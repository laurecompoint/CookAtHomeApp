import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';



export default class CardFavorie extends Component {



    render() {
        const {
            imageCard,
            paragraphe,
            onPress,
            cuissonrecette,
        } = this.props;
        const { colorTitleCard } = this.props;
        return (
            <TouchableOpacity style={styles.marginfav} onPress={onPress}>
                <Image style={styles.imageExp} source={imageCard} />

                <Text style={styles.titlerecipe}>{paragraphe}</Text>


            </TouchableOpacity>
        );
    }
}
