import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {Image, StyleSheet} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EditProfileScreen from "../EditProfileScreen";
import HomeScreen from "../HomeScreen";

const HeaderTitle = () => {
    return(
        <Image source={require("../../assets/images/logo.png")} resizeMode="contain" style={{width: 150, height: 40}}/>
    )
}


const Navigation = () => {

    const Stack = createNativeStackNavigator() // {Navigator, Screen}

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    headerTitle: HeaderTitle, headerTitleAlign: "center"
                }}/>
                <Stack.Screen name="Edit" component={EditProfileScreen}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({
    app: { flex: 1 }
});

