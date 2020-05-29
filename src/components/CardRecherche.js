import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';



export default class CardRecherche extends Component {
    render() {

        return (
            <View style={styles.cardRecherche}>
                <View style={styles.card}>
                    <Image style={styles.imageRecherche} source={require('../data/image/imagedessert.png')} />
                    <View style={styles.viewRowrecette}>
                        <Text style={styles.titlereciperechercher}>TITRE RECETTE</Text>
                        <View style={styles.bouttonfavorie}>
                            <LinearGradient colors={['#DEDEDE', '#EFEFEF', '#FFFFFF']} style={styles.cuisson} >
                                <Text style={styles.titlecuisson}>30 min</Text>
                            </LinearGradient>
                            <Text style={styles.favorie}>test</Text>

                        </View>
                    </View>
                </View>


                <View style={styles.card}>
                    <Image style={styles.imageRecherche} source={require('../data/image/imagedessert.png')} />
                    <View style={styles.viewRowrecette}>
                        <Text style={styles.titlereciperechercher}>TITRE RECETTE</Text>
                        <View style={styles.bouttonfavorie}>
                            <LinearGradient colors={['#DEDEDE', '#EFEFEF', '#FFFFFF']} style={styles.cuisson} >
                                <Text style={styles.titlecuisson}>30 min</Text>
                            </LinearGradient>
                            <Text style={styles.favorie}>test</Text>

                        </View>
                    </View>
                </View>
            </View>

        );
    }
}