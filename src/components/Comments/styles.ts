import {StyleSheet} from "react-native";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";

export default StyleSheet.create({
    icon: {
        marginRight: 8
    },
    text: {
        color: colors.white,
        lineHeight: 18
    },
    bold: {
        fontWeight: fonts.fontWeight.bold
    },
    comments: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    userAvatar: {
        width: 40,
        aspectRatio: 1,
        borderRadius: 10,
        marginRight: 10
    },
    likeIcon: {
        marginLeft: 10
    },
    commentInfoContainer: {
        flexDirection: "row",
    },
    commentInfoText: {
        color: colors.lightGrey,
        marginRight: 8
    }
})