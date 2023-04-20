import {StyleSheet} from "react-native";
import colors from "../../theme/color";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        paddingHorizontal: 10,
        paddingTop: 10,
        flex: 1
    },
    inputContainer: {
        paddingVertical: 10,
        paddingHorizontal: 60,
        backgroundColor: colors.black,
        justifyContent: "center",
        flexDirection: "row",
        borderTopColor: colors.darkGray,
        borderTopWidth: 1,
    },
    input: {
        padding: 6,
        color: colors.lightGrey,
        backgroundColor: colors.black,
        flex: 1
    },
    userAvatar: {
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: 10,
        marginRight: 5,
        zIndex: 10,
        left: 10,
        bottom: 10
    },
    sendMessage: {
        width: 40,
        height: 40,
        backgroundColor: colors.orange,
        borderRadius: 10,
        position: "absolute",
        right: 10,
        bottom: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})