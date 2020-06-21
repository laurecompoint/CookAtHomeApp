import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';
import Input from '../components/Input'; //Intégration du composants Input
import Error from '../components/Error'; //Intégration du composants Input
import { Actions } from "../actions"
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import GoBack from '../data/image/goback.svg';
import * as axios from 'axios';

class UpdateProfilContainer extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        error: null,
    };

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
    onChangeName = (name) => {
        this.setState({
            name
        })
    }
    onChangeEmail = (email) => {
        this.setState({
            email
        })
    }
    onChangePassword = (password) => {
        this.setState({
            password
        })
    }
    updaterecette = () => {

        const { name, email, password } = this.state

        const { token } = this.props;
        var bearer_token = token;
        console.log('TESTupdate' + token);
        var bearer = 'Bearer ' + bearer_token;
        let data = JSON.stringify({
            name: name,
            email: email,
            password: password,
        })
        axios.post('https://cookathomeapp.herokuapp.com/api/updateuser', data, {
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
        })
            .then(function (response) {

                console.log(response);
            })
            .catch(function (error) {

                console.log(error);
            });

        const { navigation } = this.props
        navigation.navigate('Profile')

    }


    register = () => {
        const { loading, setToken } = this.props
        const { password, email, name } = this.state


    }
    onPressGoToBack = () => {

        const { navigation } = this.props
        navigation.navigate('Home')
    }
    render() {

        const { email, token, name } = this.props


        return (

            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
                <ImageBackground style={styles.imgBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagefond.png')}>

                    <View>

                        <TouchableOpacity style={styles.buttonGoToBack} onPress={this.onPressGoToBack}>
                            <GoBack style={[styles.textGoToBack]} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.structGlobal} >
                        <Image
                            style={styles.LogoCookAtHome}
                            source={require('../data/image/logocookathome.png')}
                        />
                        <Text style={[styles.titreauth, styles.textPolice]}>Modifier vos informations</Text>
                        <Input
                            ref={ref => { this.refEmail = ref }}
                            onSubmitEditing={this.validateAndFocus}
                            onBlur={this.validateAndFocus}
                            textContentType={'name'}
                            value={name}
                            onChangeText={this.onChangeName}
                            placeholder={name} />

                        <Input
                            ref={ref => { this.refEmail = ref }}
                            onSubmitEditing={this.validateAndFocus}
                            onBlur={this.validateAndFocus}
                            textContentType={'emailAddress'}
                            onChangeText={this.onChangeEmail}
                            defaultValue={email}
                            placeholder={email} />

                        <Input
                            ref={ref => { this.refPassword = ref }}
                            textContentType={'password'}
                            onChangeText={this.onChangePassword}
                            placeholder={"Mot de passe"} />

                        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                            <LinearGradient colors={['#FFD165', '#FFB347', '#FFB347']} style={styles.buttonconnexion} >
                                <TouchableOpacity

                                    onPress={this.updaterecette}>
                                    <Text size={35} style={{ color: 'gray', textAlign: 'center', fontSize: 20, marginTop: 5, color: 'black', fontFamily: "Calibri" }} name="angle-right">Validé</Text>
                                </TouchableOpacity>
                            </LinearGradient>

                        </View>
                    </View>
                </ImageBackground>
            </LinearGradient >

        );
    }
}
const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    email: state.userprofil.email,
    name: state.userprofil.name,
    token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
    loading: (isLoading) => dispatch(Actions.loading(isLoading)),
    setUserProfil: results => dispatch(Actions.setUserProfil(results)),
    setToken: (token) => dispatch(Actions.login(token)),

});
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfilContainer);
