import {StyleSheet} from "react-native";
import {sizes} from "../../theme/sizes";
import colors from "../../theme/color";



export default StyleSheet.create({
    carouselContainer: {
        width: sizes.width,
        aspectRatio: 1
    },
    dotsContainer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    dotsActive: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.orange,
        marginHorizontal: 4,
        marginBottom: 5
    },
    dots: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.lightGrey,
        marginHorizontal: 4,
        marginBottom: 5
    }
})