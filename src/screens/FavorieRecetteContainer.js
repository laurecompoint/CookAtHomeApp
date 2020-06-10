import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import RecetteFavorie from '../components/RecetteFavorie';
import { connect } from 'react-redux';
import { Actions } from '../actions';

class FavorieRecetteContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: props => (
      <View style={styles.containerConnect}>
        <Icon size={20} style={styles.iconclose} name="close"></Icon>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.connect}>Connexion</Text>
        </TouchableOpacity>
      </View>
    )
  });

  /**
   * Nous n'avons plus besoin d'initialiser un state local au component.
   * isLoading erst 
   */
  gotodetailrecipe = () => {
    const { navigation } = this.props
    navigation.navigate('RecetteDetailContainer')
  }



  componentDidMount() {
    //const { requestGetRecetteFavories } = this.props;
    //return requestGetRecetteFavories()
    const { setFavories, loading, token } = this.props;
    loading(true)
    var bearer_token = token;
    console.log('TEST' + token);
    var bearer = 'Bearer ' + bearer_token;
    return fetch('https://cookathomeapp.herokuapp.com/api/favories', {
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
        setFavories(response);
      })
      .catch((err) => {
        console.log('An error occured', err)
        // En cas d'erreur on cache le loading spinner également
        loading(false)
      })
  }

  render() {
    const { email } = this.props
    const { favorierecette, isLoading } = this.props;
    return (
      <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../data/image/imagefond.png')}>
          <ScrollView>
            <View style={{ flex: 1 }, styles.structGlobal}>

              <Image
                style={styles.LogoCookAtHome}
                source={require('../data/image/logocookathome.png')}
              />
              <Text style={styles.titre}>Vos recette préférer</Text>


              <RecetteFavorie favorierecette={favorierecette} />

            </View>
          </ScrollView>
        </ImageBackground>
      </LinearGradient >

    );

  }
}
const mapStateToProps = state => ({
  favorierecette: state.favories.favorierecette,
  isLoading: state.app.isLoading,
  email: state.user.email,
  token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
  setFavories: results => dispatch(Actions.setFavories(results)),
  loading: (isLoading) => dispatch(Actions.loading(isLoading)),
  //requestGetRecetteFavories: () => dispatch(requestGetRecetteFavories())
});
export default connect(mapStateToProps, mapDispatchToProps)(FavorieRecetteContainer);

