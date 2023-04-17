import {TextStyle, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window')

const fontSize = {
    es: 10,
    s: 12,
    default: 14,
    md: 16,
    lg: 18,
    xlg: 24,
    xxlg: 30
}

const fontWeight: {[key: string] : TextStyle['fontWeight']} = {
    full: "900",
    semi: "600",
    bold: "bold",
    normal: "normal",
    thin: "400"
}

export default {fontSize, fontWeight}