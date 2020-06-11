import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import GoBack from '../data/image/goback.svg';
import photos from '../data/photos/index';
class RecetteDetailContainer extends Component {
    state = {

    };

    onPressGoToBack = () => {

        const { navigation } = this.props
        navigation.navigate('Home')
    }
    render() {
        const { navigation } = this.props
        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >

                <ImageBackground style={styles.imgrecetteBackground}
                    resizeMode='cover'
                    source={photos[navigation.getParam('photo', '[MISSING_PHOTO]')]}>

                    <View>

                        <TouchableOpacity style={styles.buttonGoToBack} onPress={this.onPressGoToBack}>
                            <GoBack style={[styles.textGoToBack]} size={25} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.titlerecette}>{navigation.getParam('title', '[MISSING_TITLE]')}</Text>
                </ImageBackground>

                <ScrollView >
                    <View >

                        <LinearGradient colors={['white', 'white']} style={styles.detailingredients}>

                            <Text style={styles.textPolice, styles.textinfoingredients}>Ingredients</Text>

                        </LinearGradient>

                        <View style={styles.structIngredient}>
                            <Text>{navigation.getParam('ingredient1', '[MISSING_INGREDIENT]')}</Text>
                            <Text>{navigation.getParam('ingredient2', '[MISSING_INGREDIENT]')}</Text>
                            <Text>{navigation.getParam('ingredient3', '[MISSING_INGREDIENT]')}</Text>
                            <Text>{navigation.getParam('ingredient4', '[MISSING_INGREDIENT]')}</Text>
                            <Text>{navigation.getParam('ingredient5', '[MISSING_INGREDIENT]')}</Text>
                            <Text>{navigation.getParam('ingredient6', '[MISSING_INGREDIENT]')}</Text>
                        </View>

                        <LinearGradient colors={['white', 'white']} style={styles.detailingredients}>

                            <Text style={styles.textPolice, styles.textinfoingredients}>Préparations</Text>

                        </LinearGradient>

                        <View style={styles.structIngredient}>
                            <Text>Etape 1</Text>
                            <Text style={styles.etapeespace}>
                                {navigation.getParam('preparation1', '[MISSING_INGREDIENT]')}

                            </Text>
                            <Text>Etape 2</Text>
                            <Text style={styles.etapeespace}>
                                {navigation.getParam('preparation2', '[MISSING_INGREDIENT]')}

                            </Text>
                            <Text>Etape 3</Text>
                            <Text style={styles.etapeespace}>
                                {navigation.getParam('preparation3', '[MISSING_INGREDIENT]')}

                            </Text>
                            <Text>Etape 4</Text>
                            <Text style={styles.etapeespace}>
                                {navigation.getParam('preparation4', '[MISSING_INGREDIENT]')}

                            </Text>
                            <Text>Etape 5</Text>
                            <Text style={styles.etapeespace}>
                                {navigation.getParam('preparation5', '[MISSING_INGREDIENT]')}

                            </Text>

                        </View>

                    </View>

                </ScrollView>



            </LinearGradient>

        );
    }


}

export default RecetteDetailContainer;

