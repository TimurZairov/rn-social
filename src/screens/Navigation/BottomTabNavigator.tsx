import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import colors from "../../theme/color";
import React from "react";

import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {BottomNavigator} from "../../types/navigationTypes";

import NotificationScreen from "../NotificationScreen";
import UploadScreen from "../UploadScreen";
import CreateNativeStackNavigator from "./CreateNativeStackNavigator";
import StackProfileScreens from "./StackProfileScrenns";
import SearchTabNavigator from "./SearchTabNavigation";

const Tab = createBottomTabNavigator <BottomNavigator>()

const BottomTabNavigator = () => {


    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {backgroundColor: colors.black},
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.orange
        }}>
            <Tab.Screen
                name="HomeScreen"
                component={CreateNativeStackNavigator} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (<MaterialIcons name="home-filled" size={size} color={color}/>)
            }}/>
            <Tab.Screen
                name="Search"
                component={SearchTabNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="search" size={size} color={color}/>)
                }}/>
            <Tab.Screen
                name="Upload"
                component={UploadScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="plus-circle-outline" size={size} color={color}/>)
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="heart-outline" size={size} color={color}/>)
                }}
            />
            <Tab.Screen
                name="MyProfileScreen"
                component={StackProfileScreens}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (<FontAwesome name="user-circle-o" size={size} color={color}/>)
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
