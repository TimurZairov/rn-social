import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import SearchScreen from "../SearchScreen";
import NotificationScreen from "../NotificationScreen";
import {SearchScreenParams} from "../../types/navigationTypes";
import colors from "../../theme/color";



const Tab = createMaterialTopTabNavigator<SearchScreenParams>()

const SearchTabNavigator = () => {
    return (
       <Tab.Navigator screenOptions={{
           tabBarActiveTintColor: colors.orange,
            tabBarAndroidRipple: {color: colors.orange, borderless: false},
           tabBarStyle: {backgroundColor: colors.black},
           tabBarIndicatorStyle: {backgroundColor: colors.orange}
       }}>
           <Tab.Screen name="Users" component={SearchScreen} />
           <Tab.Screen name="Posts" component={NotificationScreen} />
       </Tab.Navigator>
    )
}

export default SearchTabNavigator
