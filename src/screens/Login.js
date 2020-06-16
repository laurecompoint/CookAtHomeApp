import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';
import Input from '../components/Input'; //Intégration du composants Input
import Error from '../components/Error'; //Intégration du composants Input
import { Actions, requestLogin } from "../actions"
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';

const MAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const ERR_EMAIL_INVALID = 'ERR_EMAIL_INVALID'
const ERR_LOGIN_INVALID = 'ERR_LOGIN_INVALID'
const NO_ERROR = ''
const ErrorMessages = {
  [ERR_EMAIL_INVALID]: 'Email non valide !',
  [ERR_LOGIN_INVALID]: 'Identification impossible : le couple email/mot de passe est introuvable.'
}
class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View style={styles.sectionlogin}>


        </View>)
    }
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
  validateAndFocus = () => {
    const { email } = this.state
    console.log('email', email)
    if (!MAIL_REGEXP.test(email)) {
      console.log('email invalide')
      this.setState({ error: ERR_EMAIL_INVALID });
    } else {
      console.log('email valide')
      this.setState({ error: NO_ERROR });
      this.refPassword.focus()
    }
  };
  login = () => {

    const { requestLogin } = this.props
    const { password, email } = this.state

    return requestLogin(email, password)
      .then(() => {
        // On efface les erreurs
        this.setState({
          error: NO_ERROR
        })
        // On navigue vers la home
        this.props.navigation.navigate('Home')
      })
      .catch(() => {
        // On stocke d'erreur
        this.setState({
          error: ERR_LOGIN_INVALID
        })
        // Message d'erreur
        alert(ErrorMessages[ERR_LOGIN_INVALID])
      })
  }

  onPressGoToInscription = () => {

    const { navigation } = this.props
    navigation.navigate('Register')
  }
  render() {
    const { error } = this.state
    const isValidEmail = error == NO_ERROR

    return (

      <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../data/image/imagefond.png')}>

          <View style={styles.structGlobal} >
            <Image
              style={styles.LogoCookAtHome}
              source={require('../data/image/logocookathome.png')}
            />
            <Text style={[styles.titreauth, styles.textPolice]}>Veuillez vous connecter</Text>
            <Error message={error ? ErrorMessages[error] : null} />
            <Input

              ref={ref => { this.refEmail = ref }}
              onSubmitEditing={this.validateAndFocus}
              onBlur={this.validateAndFocus}
              textContentType={'emailAddress'}
              onChangeText={this.onChangeEmail}
              placeholder={"E-mail"} />


            <Input
              ref={ref => { this.refPassword = ref }}
              textContentType={'password'}
              onChangeText={this.onChangePassword}
              placeholder={"Mot de passe"} />

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <LinearGradient colors={['#FFD165', '#FFB347', '#FFB347']} style={styles.buttonconnexion} >
                <TouchableOpacity
                  disabled={!isValidEmail}
                  onPress={this.login}>
                  <Text size={35} style={{ color: 'gray', textAlign: 'center', fontSize: 20, marginTop: 5, color: 'black', fontFamily: "Calibri" }} name="angle-right">Connexion</Text>
                </TouchableOpacity>
              </LinearGradient>
              <TouchableOpacity style={styles.buttonGoToInscription} onPress={this.onPressGoToInscription}>

                <Text style={[styles.textGoToInscription, styles.textPolice]}>Vous n’avez pas encore de compte ?
                cliquer ici pour vous inscrire
                </Text>

              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient >

    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loading: (isLoading) => dispatch(Actions.loading(isLoading)),
  setToken: (token) => dispatch(Actions.login(token)),
  requestLogin: (email, password) => dispatch(requestLogin(email, password)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
