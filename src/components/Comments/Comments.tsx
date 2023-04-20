import React, {useState} from "react";
import {Image, Pressable, Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../theme/color";
import styles from "./styles";
import {IComment} from "../../types/models";

interface ICommentProps {
    comment: IComment,
    commentScreen: boolean
}

const Comments = ({comment, commentScreen}: ICommentProps) => {

    const [isLiked, setIsLiked] = useState(false)

    const setLikeHandler = () => {
        setIsLiked(v => !v)
    }

    return (
        <>

            <View style={styles.comments}>
                {commentScreen && <View>
                    <Image source={{uri: comment.user.image}} style={styles.userAvatar}/>
                </View>}
                <View style={{flex: 1}}>
                    <Text style={styles.text}>
                        <Text style={styles.bold}>{comment.user?.username}{' '}</Text>
                        {comment.comment}
                    </Text>

                    <View style={styles.commentInfoContainer}>
                        <Text style={styles.commentInfoText}>2d</Text>
                        <Text style={styles.commentInfoText}>Likes 15</Text>
                        <Text style={styles.commentInfoText}>Reply</Text>
                    </View>
                </View>
                <Pressable onPress={setLikeHandler} hitSlop={8}>
                    <AntDesign
                        name={isLiked ? 'heart' : 'hearto'}
                        size={16}
                        color={isLiked ? colors.orange : colors.gray}
                        style={styles.likeIcon}
                    />
                </Pressable>
            </View>
        </>
    )
}

export default Comments