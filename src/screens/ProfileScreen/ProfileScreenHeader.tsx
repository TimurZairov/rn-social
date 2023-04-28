import React from "react";
import {useNavigation,} from "@react-navigation/native";
import { ProfileNavigationProp } from "../../types/navigationTypes";
import {Image, Text, View} from "react-native";
import styles from "./styles";
import user from "../../assets/data/user.json";
import fonts from "../../theme/fonts";
import Button from "../../components/Button";


const ProfileScreenHeader = () => {

    const navigation = useNavigation<ProfileNavigationProp>()

    const editHandler = () => {
        navigation.navigate("Edit")
    }

    const goBackHandler = () => {
        navigation.goBack()
    }

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

export default ProfileScreenHeader
