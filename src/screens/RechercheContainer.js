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

import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import Recette from '../components/Recette';
import RechercheInput from '../components/RechercheInput';
import { requestGetListings, Actions } from '../actions';
import Searchlogo from '../data/image/search.svg';
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

    componentDidMount() {
        const { requestGetListings } = this.props;
        return requestGetListings()
    }

    render() {
        const { recettes } = this.props;
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

                                    <Searchlogo style={styles.searchlogo} size={80} />


                                </TouchableOpacity>

                            </View>
                            <Recette recettes={recettes} />


                        </View>

                    </ScrollView>


                </ImageBackground>
            </LinearGradient>

        );
    }


}
const mapStateToProps = state => ({
    recettes: state.listings.recettes,
    isLoading: state.app.isLoading,
});

const mapDispatchToProps = dispatch => ({
    requestGetListings: () => dispatch(requestGetListings())
});
export default connect(mapStateToProps, mapDispatchToProps)(RechercheContainer);


