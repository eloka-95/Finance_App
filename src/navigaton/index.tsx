// AppNav.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './utils/navigation';
import { Landingpage } from '../screens/landingpage/Landingpage';
import OnboardingScreen from '../screens/onboardingscreens/onboardingscreen';
// import Login from '../screens/Auth/login';
// import SignUp from '../screens/Auth/SignUp';



type RootStackParamList = {
    Landing: undefined;
    Onboarding: { someParam: string };
    Login: { someParam: string };
    Signup: { someParam: string };
    // Add other routes here
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNav() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen
                    name="Landing"
                    component={Landingpage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Onboarding"
                    component={OnboardingScreen}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignUp}
                    options={{ headerShown: false }}
                /> */}

                {/* Add more screens as needed */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
