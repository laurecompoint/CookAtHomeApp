import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';



export default class CardCommentaire extends Component {



    render() {
        const {
            content,
        } = this.props;
        const { colorTitleCard } = this.props;
        return (
            <View style={styles.commentaire}>

                <Image
                    style={styles.AvatarCookAtHomeUser}
                    source={require('../data/image/avatar.png')}
                />
                <View style={styles.commentaireview}>
                    <Text style={styles.commentairecontent}>USER</Text>
                    <Text style={styles.commentairecontent}>{content}</Text>
                </View>

            </View>
        );
    }
}