import React from "react";
import AuthNavigation from "./app-flow/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
	return (
		<NavigationContainer>
			<AuthNavigation />
		</NavigationContainer>
	);
};

export default App;
