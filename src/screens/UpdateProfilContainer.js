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
import ImagePicker from 'react-native-image-picker';
class UpdateProfilContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {
            nameupdate: '',
            emailupdate: '',
            passwordupdate: '',
            error: null,
            profil: require('../data/image/avatar.png')
        };
        this._profilClicked = this._profilClicked.bind(this)
    }


    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
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
        });
    }
    componentWillUnmount() {
        // Remove the event listener
        this.focusListener.remove();
    }
    onChangeName = (nameupdate) => {
        this.setState({
            nameupdate
        })
    }
    onChangeEmail = (emailupdate) => {
        this.setState({
            emailupdate
        })
    }
    onChangePassword = (passwordupdate) => {
        this.setState({
            passwordupdate
        })
    }
    updaterecette = () => {

        const { nameupdate, emailupdate, passwordupdate } = this.state

        const { token } = this.props;
        const { email, name } = this.props
        console.log(email)
        var bearer_token = token;
        var bearer = 'Bearer ' + bearer_token;
        if (nameupdate != '' & passwordupdate != '') {
            var data = JSON.stringify({
                name: nameupdate,
                email: email,
                password: passwordupdate,
            })
        }
        if (nameupdate != '' & passwordupdate != '' & nameupdate != '') {
            var data = JSON.stringify({
                name: nameupdate,
                email: emailupdate,
                password: passwordupdate,
            })
        }
        if (passwordupdate != '' & nameupdate != '') {
            var data = JSON.stringify({
                name: name,
                email: emailupdate,
                password: passwordupdate,
            })
        }
        if (nameupdate != '') {
            var data = JSON.stringify({
                name: nameupdate,
                email: email,

            })
        }
        if (emailupdate != '') {
            var data = JSON.stringify({
                name: name,
                email: emailupdate,

            })
        }
        if (emailupdate != '' & nameupdate != '') {
            var data = JSON.stringify({
                name: nameupdate,
                email: emailupdate,

            })
        }
        const { navigation } = this.props
        axios.post('https://cookathomeapp.herokuapp.com/api/updateuser', data, {
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
        })
            .then(function (response) {

                console.log(response);
            })
            .then(response => navigation.navigate('Profile'))
            .catch(function (error) {

                console.log(error);
            });





    }

    _profilClicked() {
        // Ici nous appellerons la librairie react-native-image-picker pour récupérer un avatar
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
                console.log('Lutilisateur a annulé')
            }
            else if (response.error) {
                console.log('Erreur : ', response.error)
            }
            else {
                console.log('Photo : ', response.uri)
                let requireSource = { uri: response.uri }
                this.setState({
                    profil: requireSource,

                })
                console.log(this.state.profil)
            }
        })
    }

    onPressGoToBack = () => {

        const { navigation } = this.props
        navigation.navigate('Home')
    }
    render() {

        const { email, name } = this.props


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
                        <TouchableOpacity
                            style={styles.profilUpdateImage}
                            onPress={this._profilClicked}>
                            <Image source={this.state.profil} style={styles.AvatarCookAtHomeUserUpdate} />
                        </TouchableOpacity>

                        <Input
                            ref={ref => { this.refEmail = ref }}
                            onSubmitEditing={this.validateAndFocus}
                            onBlur={this.validateAndFocus}
                            textContentType={'name'}
                            defaultValue={name}
                            onChangeText={this.onChangeName}
                        />

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
