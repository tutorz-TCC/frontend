import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native/types";
import Main from "../screens/Main";

type Props = {};

const Tab = createBottomTabNavigator();

const MainNavigation = (props: Props) => {
  return (
    <Tab.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Search" component={Main} />
      <Tab.Screen name="Classes" component={Main} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
