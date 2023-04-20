import React from "react";
import {FlatList} from "react-native";
import colors from "../../theme/color";
import {IPost} from "../../types/models";
import FeedImageGreedItem from "./FeedImageGreedItem";


interface IGreed {
    posts: IPost,
    headerComponents?: React.ComponentType<any> | React.ReactElement | null | undefined;
}

const FeedImageGreed = ({posts, headerComponents}: IGreed) => {
    return (
        <FlatList
            data={posts}
            renderItem={({item}) => <FeedImageGreedItem post={item} />}
            style={{flex: 1, backgroundColor: colors.black}}
            numColumns={3}
            ListHeaderComponent={headerComponents}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default FeedImageGreed