import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
    Button,
} from 'react-native';
import styles from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import CarouselArrow from '../data/image/carouselarrow.svg';
class TutoCookContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View style={styles.sectionlogin}>


                </View>)
        }
    }

    onPressGoToLogin = () => {

        const { navigation } = this.props
        navigation.navigate('Login')
    }
    render() {

        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
                <ImageBackground style={styles.imgBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagefond.png')}>


                    <View style={styles.structGlobal}>
                        <Image
                            style={styles.LogoCookAtHome}
                            source={require('../data/image/logocookathome.png')}
                        />

                        <Text style={styles.slogant}>Envie de cuisiner une recette</Text>
                        <Text style={styles.titretuto}>Comment ça marche ?</Text>
                        <ScrollView

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>

                            <View style={styles.containerHome} >
                                <Image
                                    style={styles.LogoCarouselCookAtHome}
                                    source={require('../data/image/livrerecette.png')}
                                />
                                <Text style={styles.textcarousel}>Rechercher votre recette</Text>


                                <CarouselArrow style={[styles.arrowcarousel]} size={25} />

                            </View>
                            <View style={styles.containerHome} >
                                <Image

                                    source={require('../data/image/ingredientscuisine.png')}
                                />
                                <Text style={styles.textcarousel}>Trouver tous vos ingredients</Text>

                            </View>
                            <View style={styles.containerHome} >
                                <Image
                                    style={styles.LogoCarouselCuisineCookAtHome}
                                    source={require('../data/image/cuisinerrecette.png')}
                                />
                                <Text style={styles.textcarousel}>Cuisiner votre recette</Text>


                            </View>
                            <View style={styles.containerHome} >
                                <Image
                                    style={styles.LogoCarouselCuisineCookAtHome}
                                    source={require('../data/image/commentaire.png')}
                                />
                                <Text style={styles.textcarousel}>Laisser un avis sur la recette</Text>


                            </View>




                        </ScrollView>

                        <LinearGradient colors={['#FFD165', '#FFB347', '#FFB347']} style={styles.buttonstart} >
                            <TouchableOpacity

                                onPress={this.onPressGoToLogin}>
                                <Text size={35} style={{ color: 'gray', textAlign: 'center', fontSize: 20, marginTop: 5, color: 'black', fontFamily: "Calibri" }} name="angle-right">Commencer</Text>
                            </TouchableOpacity>
                        </LinearGradient>



                    </View>

                </ImageBackground>
            </LinearGradient >

        );
    }


}

export default TutoCookContainer;


