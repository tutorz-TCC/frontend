import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Search from "../screens/Search";
import Course from "../screens/Course";
import { tipoCurso } from "../screens/Course";

type SearchStackParamList = {
	Search: undefined;
	Course: tipoCurso;
};

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Search"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Search" component={Search} />
			<Stack.Screen name="Course" component={Course} />
		</Stack.Navigator>
	);
};

export default SearchStack;
export type { SearchStackParamList };
