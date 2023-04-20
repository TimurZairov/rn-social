import React from "react";

import comments from "../../assets/data/comments.json"
import {FlatList, View} from "react-native";
import Comments from "../../components/Comments";
import styles from "./style"
import Input from "./Input";


const CommentsScreen = () => {


    return (
        <>
            <View style={styles.container}>
                <FlatList data={comments} renderItem={({item}) => {
                    return (<Comments comment={item} commentScreen/>)
                }}
                          showsVerticalScrollIndicator
                />
            </View>
            <Input />
        </>
    )
}

export default CommentsScreen