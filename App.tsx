import React from "react";
import AuthNavigation from "./app-flow/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./app-flow/AuthProvider";
import NavigationController from "./app-flow/NavigationController";

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <NavigationController />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
