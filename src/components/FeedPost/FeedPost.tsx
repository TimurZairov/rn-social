import React from "react";
import {Text, View, Image} from "react-native";
import colors from "../../theme/color";
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "./styles";
import {IPost} from "../../types/models";
import Comments from "../Comments";

interface IFeedPost {
    post: IPost
}

const FeedPost = ({post}: IFeedPost) => {
    return (
        <View style={styles.container}>
            {/*HEADER*/}
            <View style={styles.header}>
                <Image
                    style={styles.imageAvatar}
                    source={{uri: post.user.image}}/>
                <Text style={styles.userName}>{post.user.username}</Text>
                <Entypo name="dots-three-horizontal" size={25} color={colors.orange} style={styles.dots}/>
            </View>

            {/*CONTENT*/}
            <Image source={{uri: post.image}}
                   style={styles.image}/>

            {/*FOOTER*/}
            <View style={styles.footerContainer}>

                {/*ICONS*/}
                <View style={styles.iconContainer}>
                    <AntDesign
                        name={'hearto'}
                        size={24}
                        style={styles.icon}
                        color={colors.gray}
                    />
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
                <Text style={styles.text}>
                    <Text style={styles.bold}>{post.user.username}{' '}</Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet, consectetur dignissimos
                    dolorem eaque eos exercitationem molestiae necessitatibus nemo nesciunt possimus provident,
                    quo ratione repellat sapiente soluta tenetur vitae voluptatem?
                </Text>

                {/*COMMENTS*/}
                <Text style={styles.allComments}>View all {post.nofComments} comments</Text>
                {post.comments.map(comment => (
                <Comments key={comment.id} comment ={comment} />
                ))}

                {/*DATE*/}
                <Text style={styles.allComments}>22 december, 2023</Text>
            </View>
        </View>
    )
};

export default FeedPost;

