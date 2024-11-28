import * as React from "react";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/Main";
import SignIn from "../screens/SignIn";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
	return (
		<Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Cadastro" component={SignIn} />
			<Stack.Screen name="Main" component={Main} />
		</Stack.Navigator>
	);
};

export default AuthNavigation;
