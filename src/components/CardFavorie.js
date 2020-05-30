import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';



export default class CardFavorie extends Component {



    render() {
        const {
            imageCard,
            paragraphe,
            cuissonrecette,
        } = this.props;
        const { colorTitleCard } = this.props;
        return (
            <View style={styles.marginfav}>
                <Image style={styles.imageExp} source={require('../data/image/imagedessert.png')} />
                <TouchableOpacity onPress={this.gotodetailrecipe}>
                    <Text style={styles.titlerecipe}>{paragraphe}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
