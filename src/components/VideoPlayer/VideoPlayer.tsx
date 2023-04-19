import React, {useState} from "react";
import {Pressable, View} from "react-native";
import Video from "react-native-video";
import styles from "./styles";
import colors from "../../theme/color";

import Fontisto from "react-native-vector-icons/Fontisto"


interface IVideo {
    uri: string,
    paused: boolean
}


const VideoPlayer = ({uri, paused}: IVideo) => {

    const [muted, setMuted] = useState(false)

    const muteHandler = () => {
        setMuted(v => !v)
    }
    return (
        <>
            <View style={styles.container}>
                <Video source={{uri: uri}} style={styles.video} repeat resizeMode="cover" muted={muted} paused={paused}/>
                <Pressable style={styles.volumeIconContainer} onPress={muteHandler}>
                    <Fontisto name={muted ? "volume-off" : "volume-down"} size={16} color={colors.orange}  />
                </Pressable>
            </View>

        </>
    )
}

export default VideoPlayer;