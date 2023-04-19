import React, {useRef, useState} from "react";
import {FlatList, ViewToken} from "react-native";
import posts from "../../assets/data/posts.json";
import FeedPost from "../../components/FeedPost";
import {sizes} from "../../theme/sizes";

const HomeScreen = () => {
    const [activePost, setActivePost] = useState<string | null>(null)

    const viewAbilityConfig = {
        itemVisiblePercentThreshold: 51
    }


    const onViewableItemsChanged = useRef(({viewableItems}: {viewableItems: Array<ViewToken>}) => {
        if(viewableItems.length > 0){
            setActivePost(viewableItems[0].item.id)
        }
    })

    return(
        <FlatList
            data={posts}
            renderItem={({item, index}) => {
                return (
                    <FeedPost post={item} isVisible = { activePost === item.id } />
                )
            }}
            showsVerticalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged.current}
            viewabilityConfig={viewAbilityConfig}
        />
    )
}

export default React.memo(HomeScreen)