//imports

import { API_URL, FB_APP_ID } from "../../constants";
import { AsyncStorage } from "react-native";
import { Facebook } from "expo";

//action
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

//action creators
function setLogIn(token) {
	return {
		type:LOG_IN,
		token
	}
}

function setLogOut(){
	return {type:LOG_OUT};
}

function setUser(user) {
	return {
		type:SET_USER,
		user
	}
}
//api actions
function login(username, password) {
	return dispatch => {
		return fetch(`${API_URL}/rest-auth/login/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username,
				password
			})
		})
		.then(response => response.json())
		.then(json => {
			console.log(json);
			if(json.user && json.token) {
				dispatch(setLogIn(json.token));
				dispatch(setUser(json.user));
				return true;
			} else {
				return false;
			}
		});
	};
}

function facebookLogin() {
	return async dispatch => {
		const { type, token } = await Facebook.logInWithReadPermissionsAsync(
			FB_APP_ID, 
			{
				permissions: ["public_profile", "email"]
			}
		);
		if(type === "success") {
			return fetch(`${API_URL}/users/login/facebook/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"					
				},
				body: JSON.stringify({
					access_token: token
				})
			})
			.then(response => response.json())
			.then(json => {
				if(json.user && json.token) {
					dispatch(setLogIn(json.token));
					dispatch(setUser(json.user));
					return true;
				} else {
					return false;
				}
			});
		}
	};
}

//initial state
const initialState = {
	isLoggedIn:false
};
//reducer
function reducer(state= initialState, action) {
	switch (action.type) {
		case LOG_IN:
			return applyLogIn(state, action);
		case LOG_OUT:
			return applyLogOut(state, action);
		case SET_USER:
			return applySetUser(state, action);
		default:
			return state;
	}
}
//reducer functions
function applyLogIn(state, action) {
	const { token } =action;
	return {
		...state,
		isLoggedIn:true,
		token
	};
}
function applyLogOut(state, action) {
	AsyncStorage.clear();
	return {
		...state,
		isLoggedIn:false,
		token:""
	};
}
function applySetUser(state, action) {
	const { user } = action;
	return {
		...state,
		profile: user
	};
}
//exports

const actionCreators = {
	login,
	facebookLogin
}

export { actionCreators };

//default reducer export

export default reducer;