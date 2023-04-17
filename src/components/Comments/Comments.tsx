import React from "react";
import {Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../theme/color";
import styles from "./styles";
import {IComment} from "../../types/models";

interface IComments {
    comment: IComment
}

const Comments = ({comment}: IComments) => {

    return(
        <View style={styles.comments}>
            <Text style={[styles.text, {flex: 1}]}>
                <Text style={styles.bold}>{comment.user?.username}{' '}</Text>
                {comment.comment}
            </Text>
            <AntDesign
                name={'hearto'}
                size={16}
                color={colors.gray}
            />
        </View>
    )
}

export default Comments