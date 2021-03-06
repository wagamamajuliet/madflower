import React, {Component} from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import RootNavigation from "../../navigation/RootNavigation";
import { actionCreators as userActions } from "../../redux/modules/user";

class AppContainer extends Component {
	static propTypes = {
		isLoggedIn: PropTypes.bool.isRequired,

	}
	render() {
		const {isLoggedIn, profile} = this.props;
		return (
			<View style={style.container}>
			<StatusBar hidden={false} />
				{isLoggedIn && profile ? (
          			<RootNavigation screenProps={{ username: profile.username }} />
				) : ( 
					<LoggedOutNavigation /> 
				)}
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:"#fff"
	}
})

export default AppContainer;