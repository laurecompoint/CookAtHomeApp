import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import CardRecherche from './CardRecherche';
import photos from '../data/photos/index';


export default class Recettes extends Component {
    render() {
        const { recettes, onPress } = this.props;
        return (
            <View style={styles.cardRecherche}>

                {recettes.map((recette, index) => (
                    <CardRecherche
                        onPress={() => onPress(recette)}
                        key={`recette-item-${index}`}
                        imageCard={photos[recette.photo]}
                        cuissonrecette={recette.cuisson}
                        paragraphe={recette.title}
                        favorieid={recette.favorie_id}

                    ></CardRecherche>
                ))}
            </View>
        );
    }
}
