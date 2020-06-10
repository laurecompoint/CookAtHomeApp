import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import CardFavorie from '../components/CardFavorie';
import photos from '../data/photos/index';



export default class Recette extends Component {
    render() {
        const { favorierecette } = this.props;
        return (
            <View style={styles.cardFav}>

                {favorierecette.map((recette, index) => (


                    <CardFavorie
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