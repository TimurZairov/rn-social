import {StyleSheet} from "react-native";
import colors from "../../theme/color";

export default StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: colors.orange,
        borderRadius: 10,
        padding: 10,
        flex: 1,
        alignItems: "center",
        marginHorizontal: 5,
        marginTop: 10,
        marginBottom: 10
    },
    buttonText: {
        color: colors.white
    }
})