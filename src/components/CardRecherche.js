import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import StartEmpty from '../data/image/startempty.svg';
import StartNoEmpty from '../data/image/startnoempty.svg';
import { Actions, requestFavorie } from "../actions"

export default class CardRecherche extends Component {
    constructor(props) {
        super(props);
        const {
            favorieid
        } = this.props
        this.state = {
            secureTextEntry: true,

        };
    }
    addfavorie = () => {

        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        });
    }
    render() {
        const {
            imageCard,
            paragraphe,
            favorieid,
            onPress,
            cuissonrecette,
        } = this.props;
        const { secureTextEntry } = this.state;
        return (

            <TouchableOpacity style={styles.card} onPress={onPress}>
                <Image style={styles.imageRecherche} source={imageCard} />
                <View style={styles.viewRowrecette}>
                    <Text style={styles.titlereciperechercher}> {paragraphe} </Text>
                    <View style={styles.bouttonfavorie}>
                        <LinearGradient colors={['#DEDEDE', '#EFEFEF', '#FFFFFF']} style={styles.cuisson} >
                            <Text style={styles.titlecuisson}>{cuissonrecette} min</Text>
                        </LinearGradient>
                        <TouchableOpacity style={styles.filtretype} onPress={this.addfavorie}>
                            <Text style={styles.startfav} >{secureTextEntry ? <StartEmpty style={styles.start} size={80} /> : <StartNoEmpty style={styles.start} size={80} />}</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>


        );
    }
}