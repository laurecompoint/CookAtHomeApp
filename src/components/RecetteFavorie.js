import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import CardFavorie from '../components/CardFavorie';
import photos from '../data/photos/index';



export default class Recette extends Component {
    render() {
        const { favorierecette, onPress } = this.props;
        return (
            <View style={styles.cardFav}>

                {favorierecette.map((recette, index) => (


                    <CardFavorie
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