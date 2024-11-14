import React from "react";
import { Image, View } from "react-native";
type Props = {};

const Main = (props: Props) => {
  return (
    <View>
      <View
        style={{ position: "absolute" }}
      >
        <Image source={require("../assets/source-images/classroom.png")} />
      </View>
    </View>
  );
};

export default Main;
