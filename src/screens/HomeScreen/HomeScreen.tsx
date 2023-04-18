import React from "react";
import {FlatList} from "react-native";
import posts from "../../assets/data/posts.json";
import FeedPost from "../../components/FeedPost";

const HomeScreen = () => {
    return(
        <FlatList
            data={posts}
            renderItem={({item}) => {
                return (
                    <FeedPost post={item}/>
                )
            }}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default HomeScreen