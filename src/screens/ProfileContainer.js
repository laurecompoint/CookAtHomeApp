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

class ProfileContainer extends Component {

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
    // const { requestGetRecetteCreatedByUser } = this.props;
    //return requestGetRecetteCreatedByUser()
    const { setRecetteUser, loading, token } = this.props;
    loading(true)
    var bearer_token = token;
    console.log('TEST' + token);
    var bearer = 'Bearer ' + bearer_token;
    return fetch('https://cookathomeapp.herokuapp.com/api/recettebyuser', {
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
        setRecetteUser(response);
      })
      .catch((err) => {
        console.log('An error occured', err)
        // En cas d'erreur on cache le loading spinner également
        loading(false)
      })
  }
  doLogout = () => {
    const { logout, navigation } = this.props
    logout()
    navigation.navigate('Login')
  }

  modifInfo = () => {
    const { navigation } = this.props
    navigation.navigate('UpdateProfilContainer')
  }

  render() {
    const { userrecette, email, name, token, isLoading, navigation } = this.props
    return (
      <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../data/image/imagefond.png')}>
          <ScrollView>
            <View style={styles.structGlobal}>

              <TouchableOpacity style={styles.boutonlogout} onPress={this.doLogout}>
                <StartEmpty style={styles.start} size={80} />
              </TouchableOpacity>

              <Image
                style={styles.LogoCookAtHome}
                source={require('../data/image/logocookathome.png')}
              />
              <Text style={styles.titre}>Votre compte</Text>
              <View style={styles.structProfil}>

                <LinearGradient colors={['white', 'white']} style={styles.infoprofil}>

                  <Text style={styles.textPolice, styles.textinfo}>Infos</Text>

                </LinearGradient>

              </View>
              <View style={styles.viewRowInfo}>
                <View style={{ width: 150, }}>
                  <Image
                    style={styles.AvatarCookAtHome}
                    source={require('../data/image/avatar.png')}
                  />


                </View>
                <View style={{ width: 190, }}>

                  <Text >Nom : {name}</Text>
                  <Text >Email : {email}</Text>
                  <LinearGradient colors={['#4F147B', '#704C8B']} style={styles.boutonmodif}>
                    <TouchableOpacity onPress={this.modifInfo}>
                      <Text style={styles.boutontext}>Modifier</Text>
                    </TouchableOpacity>
                  </LinearGradient>

                </View>

              </View>

              <View style={styles.structProfil}>

                <LinearGradient colors={['white', 'white']} style={styles.infoprofil}>

                  <Text style={styles.textPolice, styles.textinfo}>Vos recettes</Text>

                </LinearGradient>

              </View>

              <RecettesUser userrecette={userrecette} onPress={(recette) => navigation.navigate("RecetteUpdateContainer", recette)} />

            </View>
          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    );
  }
}


const mapStateToProps = state => ({
  email: state.user.email,
  name: state.user.name,
  token: state.user.token,
  userrecette: state.usercreatedbyuser.userrecette,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Actions.logout()),
  setRecetteUser: results => dispatch(Actions.setRecetteUser(results)),
  loading: (isLoading) => dispatch(Actions.loading(isLoading)),
  //requestGetRecetteCreatedByUser: () => dispatch(requestGetRecetteCreatedByUser())
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
