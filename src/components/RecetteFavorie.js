import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import CardFavorie from '../components/CardFavorie';

import photos from '../data/photos/index';



export default class RecetteFavorie extends Component {
    render() {
        const { favorierecette, onPress } = this.props;

        if (this.props.favorierecette.length == 0) {

            return (
                <View style={styles.cardEmptyFav}>
                    <View style={styles.marginfav}>
                        <Image style={styles.imageFavVide} source={require('../data/photos/defaultimage.png')} />

                        <Text style={styles.titleFavVide}>Vous n'avez pas encore ajouter de recette en favoris</Text>


                    </View>
                </View>
            );

        }

        return (
            <View style={styles.cardFav}>

                {favorierecette.map((recette, index) => (

                    < CardFavorie
                        onPress={() => onPress(recette)}
                        key={`recette-item-${index}`}
                        imageCard={photos[recette.photo]}
                        paragraphe={recette.title}


                    ></CardFavorie>
                ))
                }



            </View>
        );
    }
}