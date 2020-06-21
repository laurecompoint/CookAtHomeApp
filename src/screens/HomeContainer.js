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
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Searchlogo from '../data/image/search.svg';
import Filtreentree from '../data/image/filtrentree.svg';
import Filtredessert from '../data/image/filtredessert.svg';
import Filtreapero from '../data/image/filtreapero.svg';
import Filtre from '../data/image/testplats.svg';
import { ImageBackground } from 'react-native';
import Recettes from '../components/recettes';
import { Actions } from '../actions';
import { filterRecettes } from '../reducers/recipe';

class HomeContainer extends Component {

    componentDidMount() {
        //const { requestGetListings } = this.props;
        // return requestGetListings()
        const { setRecettes, loading, token } = this.props;
        loading(true)
        var bearer_token = token;
        console.log('TEST' + token);
        var bearer = 'Bearer ' + bearer_token;
        return fetch('https://cookathomeapp.herokuapp.com/api/recettes', {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        }) // requête vers l'API
            .then((response) => {
                // Si un code erreur a été détecté on déclenche une erreur
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(response => {
                // On cache le loading spinner à la fin de la requête
                loading(false)
                setRecettes(response);
            })
            .catch((err) => {
                console.log('An error occured', err)
                // En cas d'erreur on cache le loading spinner également
                loading(false)
            })
    }
    onPressGoToBack = () => {

        const { navigation } = this.props
        navigation.navigate('Home')
    }
    render() {
        const { recettes, filterRecettes, filter, isLoading, navigation } = this.props;
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
                                <TextInput placeholder={"Chercher une recette"} style={styles.textRechercheInput} defaultValue={filter} onChangeText={filterRecettes}></TextInput>
                                <View style={styles.bouttonSearch}>

                                    <Searchlogo style={styles.searchlogo} />


                                </View>
                            </View>
                            <View style={styles.structFiltre} >

                                <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes("apero", "type-apero")}>
                                    <Filtreapero style={styles.searchlogo} />
                                </TouchableOpacity >
                                <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes("entree", "type-entree")}>
                                    <Filtreentree style={styles.searchlogo} />
                                </TouchableOpacity >
                                <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes("plats", "type-plats")}>
                                    <Filtre style={styles.searchlogo} />
                                </TouchableOpacity >
                                <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes("dessert", "type-dessert")}>
                                    <Filtredessert style={styles.searchlogo} />
                                </TouchableOpacity >

                            </View>
                            <Recettes recettes={recettes} onPress={(recette) => navigation.navigate("RecetteDetailContainer", recette)} />


                        </View>

                    </ScrollView>


                </ImageBackground>
            </LinearGradient >

        );
    }


}
const mapStateToProps = state => ({
    recettes: filterRecettes(state),
    isLoading: state.app.isLoading,
    filter: state.recipe.filter,
    token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
    setRecettes: results => dispatch(Actions.setRecettes(results)),
    loading: (isLoading) => dispatch(Actions.loading(isLoading)),
    filterRecettes: (criteria, sort) => dispatch(Actions.filterRecettes(criteria, sort))
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);


