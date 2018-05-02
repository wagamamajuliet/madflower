import React from "react";
import { View, Text, StatusBar } from "react-native";

const TakePhotoScreen = props => (
  <View style={{ flex: 1 }}>
  	<Text>Upload Photo</Text>
    <StatusBar hidden={true} />
  </View>
);
export default TakePhotoScreen;

