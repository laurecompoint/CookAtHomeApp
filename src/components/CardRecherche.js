import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import StartEmpty from '../data/image/startempty.svg';


export default class CardRecherche extends Component {
    render() {
        const {
            imageCard,
            paragraphe,
            cuissonrecette,
        } = this.props;
        const { colorTitleCard } = this.props;
        return (

            <View style={styles.card}>
                <Image style={styles.imageRecherche} source={imageCard} />
                <View style={styles.viewRowrecette}>
                    <Text style={styles.titlereciperechercher}> {paragraphe} </Text>
                    <View style={styles.bouttonfavorie}>
                        <LinearGradient colors={['#DEDEDE', '#EFEFEF', '#FFFFFF']} style={styles.cuisson} >
                            <Text style={styles.titlecuisson}>{cuissonrecette} min</Text>
                        </LinearGradient>
                        <StartEmpty style={styles.start} size={80} />
                    </View>
                </View>
            </View>


        );
    }
}