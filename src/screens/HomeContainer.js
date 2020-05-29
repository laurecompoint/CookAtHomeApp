import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import RechercheInput from '../components/RechercheInput'; //Intégration du composants Input

class HomeContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: props => (
            <View style={styles.containerConnect}>
                <Icon size={20} style={styles.iconclose} name="close"></Icon>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.connect}>Connexion</Text>
                </TouchableOpacity>
            </View>
        )
    });

    /**
     * Nous n'avons plus besoin d'initialiser un state local au component.
     * isLoading erst 
     */

    onPressSearch = () => {
    }

    render() {

        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
                <ImageBackground style={styles.imgBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagefond.png')}>
                    <View style={{ flex: 1 }}>

                        <ScrollView>
                            <View style={styles.structGlobal} >
                                <Image
                                    style={styles.LogoCookAtHome}
                                    source={require('../data/image/logocookathome.png')}
                                />
                                <View style={styles.structInputRecherche} >
                                    <RechercheInput
                                        ref={ref => { this.refPassword = ref }}
                                        textContentType={'search'}
                                        onChangeText={this.onChangePassword}
                                        placeholder={"Chercher une recette"} />
                                    <TouchableOpacity style={styles.bouttonSearch} onPress={this.onPressSearch}>

                                        <Text>search</Text>


                                    </TouchableOpacity>

                                </View>
                                <Text style={styles.titre}>Comment ça marche ?</Text>
                            </View>




                        </ScrollView>

                        <ScrollView

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>

                            <View style={styles.containerHome} >
                                <Image
                                    style={styles.LogoCookAtHome}
                                    source={require('../data/image/logocookathome.png')}
                                />
                                <Text>Rechercher votre recette</Text>
                            </View>
                            <View style={styles.containerHome} >
                                <Image
                                    style={styles.LogoCookAtHome}
                                    source={require('../data/image/logocookathome.png')}
                                />
                                <Text>Trouver vos ingredients</Text>
                            </View>
                            <View style={styles.containerHome} >
                                <Image
                                    style={styles.LogoCookAtHome}
                                    source={require('../data/image/logocookathome.png')}
                                />
                                <Text>Cuisiner votre recette</Text>
                            </View>



                        </ScrollView>

                    </View>
                </ImageBackground>
            </LinearGradient >
        );

    }
}

export default HomeContainer;
