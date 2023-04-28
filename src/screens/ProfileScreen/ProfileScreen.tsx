import React from "react";

import user from "../../assets/data/user.json"
import FeedImageGreed from "../../components/FeedImageGreed";
import ProfileScreenHeader from "./ProfileScreenHeader";
import {useRoute, useNavigation} from "@react-navigation/native";
import {
    MyProfileRouterProp,
    MyProfileTabNavigationProp,
    ProfileNavigationNativeProp, UserProfileRouterProp
} from "../../types/navigationTypes";


const ProfileScreen = () => {

    const router = useRoute<MyProfileRouterProp | UserProfileRouterProp>()
    const navigation = useNavigation<ProfileNavigationNativeProp | MyProfileTabNavigationProp>()

    const id = router.params?.userId

    return (
        <FeedImageGreed posts={user.posts} headerComponents={ProfileScreenHeader}/>
    )

}
export default ProfileScreen
