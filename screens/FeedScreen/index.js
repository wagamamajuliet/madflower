import React from "react";
import { View, Text } from "react-native";
import configureStore from "../../redux/configureStore";
const { persistor, store } = configureStore();

store.dispatch({ type:"LOG_OUT" });

const FeedScreen = props => (
	<Text onPress={()=> props.navigation.navigate("Likes")}>Feed</Text>
	);

export default FeedScreen;

