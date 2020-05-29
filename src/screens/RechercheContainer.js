import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from '../actions';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import CardRecherche from '../components/CardRecherche';
import RechercheInput from '../components/RechercheInput';


class RechercheContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: props => (
            <View style={styles.containerConnect}>
                <Icon size={20} style={styles.iconclose} name="close"></Icon>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.connect}>Connexion</Text>
                </TouchableOpacity>

            </View>
        ),

    });

    render() {
        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
                <ImageBackground style={styles.imgBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagefond.png')}>
                    <ScrollView >
                        <View style={styles.structGlobal}>
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
                            <CardRecherche></CardRecherche>


                        </View>

                    </ScrollView>


                </ImageBackground>
            </LinearGradient>

        );
    }


}

export default RechercheContainer;

