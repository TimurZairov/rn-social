import React, {ReactNode} from "react";
import {Pressable} from "react-native";

interface IDoubleTapProps {
    children: ReactNode,
    onDoubleTap?: () => void
};

const DoubleTap = ( {children, onDoubleTap = () => {}}: IDoubleTapProps ) => {
    let onImageTap = 0;

    const doubleTapHandler = () => {
        const date = Date.now()
        if(date - onImageTap < 300){
            onDoubleTap()
        }
        onImageTap = date;
    };


    return (
        <Pressable onPress={doubleTapHandler}>
            {children}
        </Pressable>
    )
};

export default DoubleTap;