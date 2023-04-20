import React, {useState} from "react";
import {Image, Pressable, TextInput, View} from "react-native";
import styles from "./style";
import colors from "../../theme/color";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Input = () => {

    const [sendComment, setSendComment] = useState('')

    const sendCommentHandler = () => {
        console.warn(sendComment)
    }

    return(
        <View style={styles.inputContainer}>
            <Image source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg"}}
                   style={styles.userAvatar}/>
            <TextInput style={styles.input} placeholder="Write a message..." placeholderTextColor={colors.lightGrey}
                       multiline
                       value={sendComment}
                       onChangeText={setSendComment}
            />
            <Pressable style={styles.sendMessage} onPress={sendCommentHandler}>
                <FontAwesome name={"send"} size={20} color={colors.white}/>
            </Pressable>

        </View>
    )
}

export default Input