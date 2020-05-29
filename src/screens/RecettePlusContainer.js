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

class RecettePlusContainer extends Component {
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
                <ScrollView>
                    <View style={styles.structGlobal} >
                        <Image
                            style={styles.LogoCookAtHome}
                            source={require('../data/image/logocookathome.png')}
                        />
                        <Text style={styles.titre}>Ajouter une recette</Text>
                    </View>
                </ScrollView>
            </LinearGradient>
        );
    }
}

export default RecettePlusContainer;
