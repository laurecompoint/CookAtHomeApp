import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';



export default class CardCommentaire extends Component {



    render() {
        const {
            content,
            user
        } = this.props;
        const { colorTitleCard } = this.props;
        return (

            <View style={styles.comment}>

                <Image
                    style={styles.AvatarCookAtHomeUser}
                    source={require('../data/image/avatar.png')}
                />
                <View style={styles.commentview}>
                    <Text style={styles.commentcontent}>{user}</Text>
                    <Text style={styles.commentcontent}>{content}</Text>
                </View>

            </View>

        );
    }
}