import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';



export default class CardFavorie extends Component {



    render() {

        return (
            <View style={styles.cardExp}>
                <Image style={styles.imageExp} source={require('../data/image/imagedessert.png')} />
                <TouchableOpacity onPress={this.gotodetailrecipe}>
                    <Text style={styles.titlerecipe}>TITRE RECETTE</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
