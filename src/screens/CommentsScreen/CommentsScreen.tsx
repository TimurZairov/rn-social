import React, {useState} from "react";

import comments from "../../assets/data/comments.json"
import {FlatList, Image, Pressable, Text, TextInput, View} from "react-native";
import Comments from "../../components/Comments";
import styles from "./style"
import colors from "../../theme/color";

import FontAwesome from "react-native-vector-icons/FontAwesome"


const CommentsScreen = () => {

    const [sendComment, setSendComment] = useState('')

    const sendCommentHandler = () => {
        console.warn(sendComment)
    }

    return (
        <>
            <View style={styles.container}>
                <FlatList data={comments} renderItem={({item}) => {
                    return (<Comments comment={item} commentScreen/>)
                }}
                          showsVerticalScrollIndicator
                />
            </View>
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

        </>
    )
}

export default CommentsScreen