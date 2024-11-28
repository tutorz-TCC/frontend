import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native/types";
import Main from "../screens/Main";
import ImageComponent from "../assets/components/ImageComponent";
import Search from "../screens/Search";
import SearchStack from "./SearchStack";

type Props = {};

const Tab = createBottomTabNavigator();

const icons = [
	require("../assets/source-images/tab/home.png"),
	require("../assets/source-images/tab/search.png"),
	require("../assets/source-images/tab/student.png"),
];

const MainNavigation = (props: Props) => {
	return (
		<Tab.Navigator
			initialRouteName="Main"
			screenOptions={{ headerShown: false }}
		>
			<Tab.Screen
				name="Main"
				component={Main}
				options={{ tabBarIcon: ({ }) => <ImageComponent url={icons[0]} /> }}
			/>
			<Tab.Screen
				name="SearchStack"
				component={SearchStack}
				options={{ tabBarIcon: ({ }) => <ImageComponent url={icons[1]} /> }}
			/>
			<Tab.Screen
				name="Classes"
				component={Main}
				options={{ tabBarIcon: ({ }) => <ImageComponent url={icons[2]} /> }}
			/>
		</Tab.Navigator>
	);
};

export default MainNavigation;
