import React from "react";
import {useRoute} from "@react-navigation/native"

import comments from "../../assets/data/comments.json"
import {FlatList, View} from "react-native";
import Comments from "../../components/Comments";
import styles from "./style"
import Input from "./Input";


const CommentsScreen = () => {
    const router = useRoute()
    //
    const id = router.params?.userId

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
