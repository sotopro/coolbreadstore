import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

import AuthNavigator from "./auth";
import TabsNavigator from "./tabs";

const Navigation = () => {
  const [userId, setUserId] = useState(null);

  return (
    <NavigationContainer>{userId ? <TabsNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default Navigation;
