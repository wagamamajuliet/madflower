import React from "react";
import LikesScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PhotoScreen from "../screens/PhotoScreen";
import NavButton from "../components/NavButton";

const sharedRoutes = {
	Likes: {
		screen: LikesScreen,
	    navigationOptions: {
	      headerTitle: "Likes"
	    }
	},
	Comments: {
		screen: CommentsScreen,
	    navigationOptions: {
	      headerTitle: "Comments"
	    }
	},
	Profile: {
	    screen: ProfileScreen,
	    navigationOptions: {
	      headerTitle: "Profile"
	    }
	},
	Photo: {
	    screen: PhotoScreen,
	    navigationOptions: {
	      headerTitle: "Photo"
	    }
	}
};

const sharedOptions = {
	navigationOptions: {
    	headerLeft: props => <NavButton iconName={"ios-arrow-back"} {...props} />,
		headerStyle: {
			backgroundColor: "#FBFBFB"
		}
	}
};

export { sharedOptions };

export default sharedRoutes;