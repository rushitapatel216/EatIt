import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import EatitScreen from './source/screens/EatitScreen';
import SignIn from './source/screens/SignIn';
import SignUpScreen from "./source/screens/SignUpScreen";
import PasswordScreen from "./source/screens/PasswordScreen";
import TermsandconditionScreen from "./source/screens/TermsandconditionScreen";
import FogotPasswordScreen from './source/screens/ForgotPasswordScreen';
import Drawernavigation from "./source/navigation/DrawerNavigation";
import DataScreen from "./source/screens/DataScreen";
import { StacknString } from "./source/utils/constant";
import AddcartScreen from "./source/screens/AddcartScreen";
import MycartScreen from "./source/screens/MyCartScreen";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={StacknString.Home} component={EatitScreen} />
        <Stack.Screen name={StacknString.SignIn} component={SignIn} />
        <Stack.Screen name={StacknString.SignUp} component={SignUpScreen} />
        <Stack.Screen name={StacknString.Password} component={PasswordScreen} />
        <Stack.Screen name={StacknString.TermsCondition} component={TermsandconditionScreen} />
        <Stack.Screen name={StacknString.ForgetPassword} component={FogotPasswordScreen} />
        <Stack.Screen name={StacknString.Drawer} component={Drawernavigation} />
        <Stack.Screen name={StacknString.Data} component={DataScreen} />
        <Stack.Screen name={StacknString.AddCart} component={AddcartScreen} />
        <Stack.Screen name={StacknString.mycart} component={MycartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;