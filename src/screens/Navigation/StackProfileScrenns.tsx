import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {StackProfile} from "../../types/navigationTypes"

import ProfileScreen from "../ProfileScreen";
import EditProfileScreen from "../EditProfileScreen";

const Stack = createNativeStackNavigator<StackProfile>()

const StackProfileScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Edit" component={EditProfileScreen}/>
        </Stack.Navigator>
    )
}

export default StackProfileScreens
