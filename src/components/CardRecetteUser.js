import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import StartEmpty from '../data/image/startempty.svg';
import StartNoEmpty from '../data/image/startnoempty.svg';
import { Actions, requestFavorie } from "../actions"
import { withNavigation } from 'react-navigation';
import Edit from '../data/image/edit.svg';
import CardRecherche from './CardRecherche';
class CardRecetteUser extends Component {
    constructor(props) {
        super(props);

    }

    updatebutton = () => {

        const { navigation } = this.props
        navigation.navigate('RecetteUpdateContainer')
    }
    render() {
        const {
            imageCard,
            paragraphe,
            onPress,

        } = this.props;

        return (

            <TouchableOpacity style={styles.card} onPress={onPress}>
                <Image style={styles.imageRecherche} source={imageCard} />
                <View style={styles.viewRowrecetteUser}>
                    <Text style={styles.titlereciperechercher}> {paragraphe} </Text>
                    <View style={styles.bouttonfavorie}>

                        <Edit style={styles.boutonmodifrecette} size={25} />

                    </View>
                </View>
            </TouchableOpacity>


        );
    }
}
export default withNavigation(CardRecetteUser)