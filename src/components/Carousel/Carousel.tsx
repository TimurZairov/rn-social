import React, {useState, useRef} from "react";
import {FlatList, Image, View, ViewabilityConfig, ViewToken} from "react-native";
import styles from "./styles";
import DoubleTap from "../DoubleTap/DoubleTap";


interface ICarousel {
    postImages: string[],
    onDoublePress? : () => void,
}

const Carousel = ({postImages, onDoublePress = () => {}}: ICarousel) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const viewAbilityConfig: ViewabilityConfig = {
        itemVisiblePercentThreshold: 51
    }

    const viewAbleItemsChanged = useRef(({viewableItems} : {viewableItems: Array<ViewToken>}) => {
        if(viewableItems.length > 0) {
            setActiveIndex(viewableItems[0]?.index || 0)
        }
    })

    return (
        <View style={styles.container}>
            <FlatList
                data={postImages}
                renderItem={({item}) => {
                    return (

                        <DoubleTap onDoubleTap={onDoublePress}>
                            <Image source={{uri: item}} style={styles.carouselContainer}/>
                        </DoubleTap>
                    )
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onViewableItemsChanged={viewAbleItemsChanged.current}
                viewabilityConfig={viewAbilityConfig }
            />
            <View style={styles.dotsContainer}>
                {postImages.map((dot, index) => {
                    return <View style={index === activeIndex ? styles.dotsActive : styles.dots} key={index}/>
                })}
            </View>

        </View>
    )
};

export default Carousel;