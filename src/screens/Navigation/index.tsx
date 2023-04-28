import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {RootNavigation} from "../../types/navigationTypes"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from "./BottomTabNavigator";
import CommentsScreen from "../CommentsScreen";




const Navigation = () => {

    const Stack = createNativeStackNavigator <RootNavigation>() // {Navigator, Screen}

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}}/>
                <Stack.Screen name="Comments" component={CommentsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
