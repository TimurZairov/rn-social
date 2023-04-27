import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from "../HomeScreen";
import ProfileScreen from "../ProfileScreen";
import {Image} from "react-native";
import {NativeStack} from "../../types/navigationTypes"

const Stack = createNativeStackNavigator<NativeStack>()

const HeaderTitle = () => {
    return (
        <Image source={require("../../assets/images/logo.png")} resizeMode="contain"
               style={{width: 150, height: 40}}/>
    )
}

const CreateNativeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeTab" component={HomeScreen} options={{
                headerTitle: HeaderTitle, headerTitleAlign: "center",
            }} />
            <Stack.Screen name="UserProfile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default CreateNativeStackNavigator
