import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import GoBack from '../data/image/goback.svg';

class RecetteDetailContainer extends Component {
    state = {

    };

    onPressGoToBack = () => {

        const { navigation } = this.props
        navigation.navigate('Home')
    }
    render() {

        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >

                <ImageBackground style={styles.imgrecetteBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagedessert.png')}>

                    <View>

                        <TouchableOpacity style={styles.buttonGoToBack} onPress={this.onPressGoToBack}>
                            <GoBack style={[styles.textGoToBack]} size={25} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.titlerecette}>Titre recette</Text>
                </ImageBackground>

                <ScrollView >
                    <View >

                        <LinearGradient colors={['white', 'white']} style={styles.detailingredients}>

                            <Text style={styles.textPolice, styles.textinfoingredients}>Ingredients</Text>

                        </LinearGradient>

                        <View style={styles.structIngredient}>
                            <Text>ingredients 1</Text>
                            <Text>ingredients 1</Text>
                            <Text>ingredients 1</Text>
                            <Text>ingredients 1</Text>
                            <Text>ingredients 1</Text>
                            <Text>ingredients 1</Text>
                        </View>

                        <LinearGradient colors={['white', 'white']} style={styles.detailingredients}>

                            <Text style={styles.textPolice, styles.textinfoingredients}>Préparations</Text>

                        </LinearGradient>

                        <View style={styles.structIngredient}>
                            <Text>Etape 1</Text>
                            <Text>Etape 2</Text>
                            <Text>Etape 3</Text>
                            <Text>Etape 4</Text>
                            <Text>Etape 5</Text>
                            <Text>Etape 6</Text>
                        </View>

                    </View>

                </ScrollView>



            </LinearGradient>

        );
    }


}

export default RecetteDetailContainer;

