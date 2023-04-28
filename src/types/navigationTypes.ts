import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs"
import {RouteProp} from "@react-navigation/native"

export type RootNavigation = {
    Home: undefined,
    Comments: {userId: string}
}

export type BottomNavigator = {
    HomeScreen: undefined,
    Search: undefined,
    Upload: undefined,
    Notification: undefined,
    MyProfileScreen: undefined
}

export type NativeStack = {
    HomeTab: undefined,
    UserProfile: {userId: string}
}

export type StackProfile = {
    Profile: undefined,
    Edit: undefined
}
//PROPS
export type FeedNavigationProp = NativeStackNavigationProp<NativeStack, "HomeTab" >

export type ProfileNavigationProp = NativeStackNavigationProp <StackProfile, "Edit">

export type ProfileNavigationNativeProp = NativeStackNavigationProp<StackProfile, "Profile">

export type MyProfileTabNavigationProp = BottomTabNavigationProp<BottomNavigator, "MyProfileScreen">


//RouterPROPS

export type MyProfileRouterProp = RouteProp<BottomNavigator , "MyProfileScreen">
export type UserProfileRouterProp = RouteProp<NativeStack , "UserProfile">

