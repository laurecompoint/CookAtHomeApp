import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from '../actions';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import StartEmpty from '../data/image/logout.svg';
import RecettesUser from '../components/recetteuser';

class ProfilRecetteUser extends Component {

    componentDidMount() {
        const { setUserProfil, loading, token } = this.props;
        loading(true)
        var bearer_token = token;
        var bearer = 'Bearer ' + bearer_token;
        return fetch('https://cookathomeapp.herokuapp.com/api/user', {
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
                setUserProfil(response);
            })
            .catch((err) => {
                console.log('An error occured', err)
                // En cas d'erreur on cache le loading spinner également
                loading(false)
            })
    }

    modifInfo = () => {
        const { navigation } = this.props
        navigation.navigate('UpdateProfilContainer')
    }

    render() {
        const { email, name } = this.props
        return (
            <View >

                <Text >Nom : {name}</Text>
                <Text >Email : {email}</Text>

            </View>
        );
    }
}


const mapStateToProps = state => ({
    email: state.userprofil.email,
    name: state.userprofil.name,
    token: state.user.token,

});

const mapDispatchToProps = dispatch => ({

    setUserProfil: results => dispatch(Actions.setUserProfil(results)),
    loading: (isLoading) => dispatch(Actions.loading(isLoading)),

});
export default connect(mapStateToProps, mapDispatchToProps)(ProfilRecetteUser)
