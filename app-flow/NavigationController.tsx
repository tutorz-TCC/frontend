import React from "react";
import { useAuth } from "./AuthProvider";
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

type Props = {};

const NavigationController = (props: Props) => {
  const { authToken } = useAuth();
  return <>{authToken ? <MainNavigation /> : <AuthNavigation />}</>;
};

export default NavigationController;
