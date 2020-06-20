import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import CardCommentaire from './CardCommentaire';
import photos from '../data/photos/index';


export default class RecetteCommentaire extends Component {
    render() {
        const { commentaire, onPress } = this.props;
        return (
            <View style={styles.cardRecherche}>

                {commentaire.map((commentairebyrecette, index) => (
                    <CardCommentaire

                        key={`recette-item-${index}`}

                        content={commentairebyrecette.content}


                    ></CardCommentaire>
                ))}
            </View>
        );
    }
}