import {StyleSheet} from "react-native";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.black,
        flex: 1,
    },
    userContainer: {
        alignItems: "center"
    },
    userImage: {
        width: "30%",
        aspectRatio: 1,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.orange,
    },
    changeText: {
        fontSize: fonts.fontSize.lg,
        color: colors.white,
        marginTop: 10
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    label: {
        fontSize: fonts.fontSize.default,
        color: colors.lightGrey,
        fontWeight: fonts.fontWeight.semi,
        marginRight: 10,
        width: "18%"
    },
    input: {
        borderBottomColor: colors.darkGray,
        borderBottomWidth: 1,
        color: colors.white
    }
})

export default styles