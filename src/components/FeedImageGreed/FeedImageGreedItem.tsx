import React from "react";
import {Image, View} from "react-native";
import {IPost} from "../../types/models";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import colors from "../../theme/color";

interface IFeedImageGreedItem {
    post: IPost
}

const FeedImageGreedItem = ({post} : IFeedImageGreedItem) => {
    return (
        <View style={{width: "33%", aspectRatio: 1, margin: 1}}>
            <Image source={{uri: post.image || post.images[0]}} style={{flex: 1}} />
            {
                post.images && (
                    <MaterialIcons name={"collections"} size={16} color={colors.orange} style={{position: "absolute", top: 5, right: 5}}/>
                )
            }
        </View>
    )
}

export default FeedImageGreedItem