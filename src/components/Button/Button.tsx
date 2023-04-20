import React from "react";
import {Pressable, Text} from "react-native";
import styles from "./styles";

interface IButton {
    text?: string,
    onPress? : () => void
}

const Button = ({text = "", onPress = () => {}} : IButton) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

export default Button