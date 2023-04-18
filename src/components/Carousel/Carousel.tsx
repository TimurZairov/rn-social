import React, {useState} from "react";
import {FlatList, Image, View} from "react-native";
import styles from "./styles";


interface ICarousel {
    postImages: string[],
}

const Carousel = ({postImages}: ICarousel) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const viewAbilityConfig = {
        itemVisiblePercentThreshold: 51
    }

    const viewAbleItemsChanged = ({viewableItems}) => {
        console.log(viewableItems)
    }

    return (
        <>
            <FlatList
                data={postImages}
                renderItem={({item}) => {
                    return (
                        <Image source={{uri: item}} style={styles.carouselContainer}/>
                    )
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onViewableItemsChanged={viewAbleItemsChanged}
                viewabilityConfig={viewAbilityConfig }
            />
            <View style={styles.dotsContainer}>
                {postImages.map((dot, index) => {
                    return <View style={index === activeIndex ? styles.dotsActive : styles.dots} key={index}/>
                })}
            </View>

        </>
    )
};

export default Carousel;