import {StyleSheet} from "react-native";
import {sizes} from "../../theme/sizes";

export default StyleSheet.create({
    container: {
        width: sizes.width,
        position: "relative"
    },
    video: {
        width: "100%",
        aspectRatio: 1
    },
    volumeIconContainer: {
        position: "absolute",
        bottom: 15,
        right: 15
    }
})