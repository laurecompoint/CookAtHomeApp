import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import StartEmpty from '../data/image/startempty.svg';
import StartNoEmpty from '../data/image/startnoempty.svg';
import { Actions, requestFavorie } from "../actions"
import Edit from '../data/image/edit.svg';
export default class CardRecetteUser extends Component {
    constructor(props) {
        super(props);
        const {
            favorieid
        } = this.props
        this.state = {
            secureTextEntry: true,

        };
    }
    updatebutton = () => {


    }
    render() {
        const {
            imageCard,
            paragraphe,
            favorieid,
            cuissonrecette,
        } = this.props;
        const { secureTextEntry } = this.state;
        const { colorTitleCard } = this.props;
        return (

            <View style={styles.card}>
                <Image style={styles.imageRecherche} source={imageCard} />
                <View style={styles.viewRowrecetteUser}>
                    <Text style={styles.titlereciperechercher}> {paragraphe} </Text>
                    <View style={styles.bouttonfavorie}>


                        <TouchableOpacity onPress={this.modifInfo} style={styles.boutonmodifrecette}>
                            <Edit size={25} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>


        );
    }
}