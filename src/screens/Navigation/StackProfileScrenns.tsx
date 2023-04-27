import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ProfileScreen from "../ProfileScreen";
import EditProfileScreen from "../EditProfileScreen";

const Stack = createNativeStackNavigator()

const StackProfileScreens = () => {
return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Edit" component={EditProfileScreen} />
    </Stack.Navigator>
)
}

export default StackProfileScreens
