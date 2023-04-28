import React, {useState} from "react";
import {Text, View, Image, Pressable} from "react-native";
import colors from "../../theme/color";
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native"
import {FeedNavigationProp} from "../../types/navigationTypes"

import styles from "./styles";
import {IPost} from "../../types/models";
import Comments from "../Comments";
import DoubleTap from "../DoubleTap/DoubleTap";
import Carousel from "../Carousel";
import VideoPlayer from "../VideoPlayer";

interface IFeedPost {
    post: IPost,
    isVisible: boolean
}

const FeedPost = ({post, isVisible}: IFeedPost) => {

    const navigation = useNavigation<FeedNavigationProp>()

    const [isDescriptionIsExpanded, setIsDescriptionIsExpanded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const expandCommentHandler = () => {
        setIsDescriptionIsExpanded(prevState => !prevState)
    };

    const isLikedHandler = () => {
        setIsLiked(prevState => !prevState)
    };

    let content = null;

    if (post.image) {
        content = <DoubleTap onDoubleTap={isLikedHandler}>
                        <Image source={{uri: post.image}} style={styles.image}/>
                   </DoubleTap>
    } else if (post.images) {
        content = <Carousel postImages={post.images } onDoublePress={isLikedHandler}/>
    } else if (post.video) {
        content = <VideoPlayer uri={post.video} paused={!isVisible} />
    }

    const navigateToUserProfile = () => {
        navigation.navigate("UserProfile", {userId: post.user.id})
    }

    const goToComments = () => {
        navigation.navigate("Comments", {userId: post.user.id})
    }


    return (
            <View style={styles.container}>
                {/*HEADER*/}
                <View style={styles.header}>
                    <Image
                        style={styles.imageAvatar}
                        source={{uri: post.user.image}}/>
                    <Text onPress={navigateToUserProfile} style={styles.userName}>{post.user.username}</Text>
                    <Entypo name="dots-three-horizontal" size={25} color={colors.orange} style={styles.dots}/>
                </View>

                {/*CONTENT*/}
                {content}
                {/*FOOTER*/}
                <View style={styles.footerContainer}>

                    {/*ICONS*/}
                    <View style={styles.iconContainer}>
                        <Pressable onPress={isLikedHandler}>
                            <AntDesign
                                name={isLiked ? "heart" : 'hearto'}
                                size={24}
                                style={styles.icon}
                                color={isLiked ? colors.orange : colors.gray}
                            />
                        </Pressable>
                        <Ionicons
                            name="chatbubble-outline"
                            size={24}
                            style={styles.icon}
                            color={colors.gray}
                        />
                        <Feather
                            name="send"
                            size={24}
                            style={styles.icon}
                            color={colors.gray}
                        />
                        <Feather
                            name="bookmark"
                            size={24}
                            style={{marginLeft: 'auto'}}
                            color={colors.gray}
                        />
                    </View>

                    {/*LIKES*/}
                    <Text style={styles.text}>Liked by {' '}
                        <Text style={styles.bold}>someBody</Text> and {' '}
                        <Text style={styles.bold}>{post.nofLikes} others</Text>
                    </Text>

                    {/*DESCRIPTION*/}
                    <Text style={styles.text} numberOfLines={isDescriptionIsExpanded ? 0 : 3}>
                        <Text style={styles.bold}>{post.user.username}{' '}</Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet, consectetur dignissimos
                        dolorem eaque eos exercitationem molestiae necessitatibus nemo nesciunt possimus provident,
                        quo ratione repellat sapiente soluta tenetur vitae voluptatem?
                    </Text>
                    <Text style={styles.allComments}
                          onPress={expandCommentHandler}>{isDescriptionIsExpanded ? "less" : "more"} </Text>

                    {/*COMMENTS*/}
                    <Text onPress={goToComments} style={styles.allComments}>View all {post.nofComments} comments</Text>
                    {post.comments.map(comment => (
                        <Comments key={comment.id} comment={comment}/>
                    ))}

                    {/*DATE*/}
                    <Text style={styles.allComments}>22 december, 2023</Text>
                </View>
            </View>
    )
};

export default FeedPost;

