import React from "react";
import { StackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";
import UploadPhotoScreen from "../screens/UploadPhotoScreen";

const RootNavigation = StackNavigator(
	{
		Tabs: {
			screen: TabsNavigation,
			navigationOptions: {
				header: null
			}
		},
		TakePhoto: {
			screen: TakePhotoScreen,
			navigationOptions: {
				header: null
			}
		},
		UploadPhoto: {
		      screen: UploadPhotoScreen,
		      navigationOptions: ({ navigation }) => ({
		        title: "Upload Photo",
		        headerLeft: (
		          <Button
		            title="Cancel"
		            color="black"
		            onPress={() => navigation.goBack(null)}
		          />
		        )
		    })
		}
	},
	{
		mode:"modal"
	}
);

export default RootNavigation;
