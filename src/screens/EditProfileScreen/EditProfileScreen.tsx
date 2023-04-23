import React from "react";
import styles from "./style";
import {Image, Text, TextInput, View} from "react-native";

import user from "../../assets/data/user.json"
import colors from "../../theme/color";


interface IInputContainer {
    label: string,
    placeHolder: string,
    multiline?: boolean
}

const InputContainer = ({label, placeHolder, multiline = false} : IInputContainer) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput placeholder={placeHolder} style={styles.input} value={placeHolder} multiline={multiline}/>
        </View>
    )
}


const EditProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image source={{uri: user.image}} style={styles.userImage} />
                <Text style={styles.changeText}>Change Profile photo</Text>
            </View>

            <InputContainer label="Name"  placeHolder={user.name}/>
            <InputContainer label="USerName"  placeHolder={user.username}/>
            <InputContainer label="Website"  placeHolder={""}/>
            <InputContainer label="Bio"  placeHolder={user.bio} multiline/>

        </View>
    )
};

export default EditProfileScreen;