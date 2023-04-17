import {StyleSheet} from "react-native";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.black,
    },
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    imageAvatar: {
        height: 50,
        width: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.orange,
        marginRight: 10
    },
    userName: {
        fontSize: fonts.fontSize.lg,
        fontWeight: fonts.fontWeight.normal,
        color: colors.white
    },
    dots: {
        marginLeft: "auto"
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    footerContainer: {
        paddingHorizontal: 12
    },
    iconContainer: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 5,
    },
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
    allComments: {
        color:colors.lightGrey,
        marginTop: 5
    },
    comments: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center"
    }
})