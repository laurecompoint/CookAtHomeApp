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

const MAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const ERR_EMAIL_INVALID = 'ERR_EMAIL_INVALID'
const ERR_LOGIN_INVALID = 'ERR_LOGIN_INVALID'
const NO_ERROR = ''
const ErrorMessages = {
    [ERR_EMAIL_INVALID]: 'Email non valide !',
    [ERR_LOGIN_INVALID]: 'Identification impossible : le couple email/mot de passe est introuvable.'
}
class UpdateProfilContainer extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        error: null,
    };

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View style={styles.sectionlogin}>


                </View>)
        }
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
    register = () => {
        const { loading, setToken } = this.props
        const { password, email, name } = this.state


    }
    onPressGoToBack = () => {

        const { navigation } = this.props
        navigation.navigate('Home')
    }
    render() {
        const { error } = this.state
        const isValidEmail = error == NO_ERROR

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
                            onChangeText={this.onChangeName}
                            placeholder={"Name"} />
                        <Error style={{ paddingTop: 7, }} message={error ? ErrorMessages[error] : null} />
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
                                    onPress={this.register}>
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
});

const mapDispatchToProps = dispatch => ({
    loading: (isLoading) => dispatch(Actions.loading(isLoading)),
    setToken: (token) => dispatch(Actions.login(token)),

});
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfilContainer);
