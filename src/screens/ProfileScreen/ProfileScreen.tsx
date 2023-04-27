import React from "react";
import styles from "./styles"
import {Image, Text, View} from "react-native";
import {useRoute, useNavigation} from "@react-navigation/native"

import user from "../../assets/data/user.json"
import fonts from "../../theme/fonts";
import Button from "../../components/Button";
import FeedImageGreed from "../../components/FeedImageGreed";


const ProfileScreenHeader = () => {
    const router = useRoute()
    const navigation = useNavigation()

    const editHandler = () => {
        navigation.navigate("Edit")
    }

    const goBackHandler = () => {
        navigation.goBack()
    }

    // const {userId} = router.params

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={{uri: user.image}} style={styles.userAvatar} />
                <View style={styles.usersInfo}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.textNumber}>102</Text>
                        <Text style={styles.infoText}>Posts</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.textNumber}>95</Text>
                        <Text style={styles.infoText}>Followers</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.textNumber}>32</Text>
                        <Text style={styles.infoText} >Following</Text>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoFooter}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={[styles.userName, {fontWeight: fonts.fontWeight.normal, fontSize: fonts.fontSize.default}]}>{user.bio}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button text={"Edit profile"} onPress={editHandler} />
                <Button text={"Go back"} onPress={goBackHandler} />
            </View>


        </View>
    )
}

const ProfileScreen = () => {
    return (
        <FeedImageGreed posts={user.posts} headerComponents={ProfileScreenHeader}/>
    )

}

export default ProfileScreen
