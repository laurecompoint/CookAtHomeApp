import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import CardRecetteUser from './CardRecetteUser';
import photos from '../data/photos/index';


export default class RecettesUser extends Component {
    render() {
        const { userrecette, onPress } = this.props;
        return (
            <View style={styles.cardRecherche}>

                {userrecette.map((recette, index) => (
                    <CardRecetteUser
                        onPress={() => onPress(recette)}
                        key={`recette-item-${index}`}
                        imageCard={photos[recette.photo]}
                        cuissonrecette={recette.cuisson}
                        paragraphe={recette.title}
                        favorieid={recette.favorie_id}

                    ></CardRecetteUser>
                ))}
            </View>
        );
    }
}
