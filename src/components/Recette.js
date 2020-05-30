import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import CardRecherche from '../components/CardRecherche';
import photos from '../data/photos/index';


export default class Recette extends Component {
    render() {
        const { recettes } = this.props;
        return (
            <View style={styles.cardRecherche}>

                {recettes.map((recette, index) => (
                    <CardRecherche
                        key={`recette-item-${index}`}
                        imageCard={photos[recette.photo]}
                        cuissonrecette={recette.cuisson}
                        paragraphe={recette.title}

                    ></CardRecherche>
                ))}
            </View>
        );
    }
}
