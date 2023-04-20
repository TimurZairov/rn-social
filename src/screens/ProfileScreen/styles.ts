import {StyleSheet} from "react-native";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    userInfo: {
        paddingHorizontal: 10,
        paddingTop: 10,
        flexDirection: "row",
    },
    userAvatar: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 15,
        marginRight: 10,
        borderColor: colors.orange,
        borderWidth: 2
    },
    usersInfo: {
        flex: 1,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    infoContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    textNumber: {
        fontSize: fonts.fontSize.lg,
        color: colors.white
    },
    infoText: {
        color: colors.lightGrey,
        fontSize: fonts.fontSize.md
    },
    userInfoFooter: {
        paddingHorizontal: 10,
        marginTop: 10
    },
    userName: {
        color: colors.white,
        fontSize: fonts.fontSize.md,
        fontWeight: fonts.fontWeight.semi
    },
    buttonContainer: {
        paddingHorizontal: 10,
        flexDirection: "row"
    }
})