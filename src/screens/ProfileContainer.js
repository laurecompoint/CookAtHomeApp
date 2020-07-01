import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import StartEmpty from '../data/image/logout.svg';
import RecettesUser from '../components/recetteuser';
import ProfilRecetteUser from '../components/ProfilRecetteUser';
import GoBack from '../data/image/goback.svg';
import DeleteCompte from '../data/image/deletecompte.svg';
import * as axios from 'axios';
class ProfileContainer extends Component {

  constructor(props) {

    super(props);
    this.state = {
      modalVisible: false,
    };


  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    const { token, setRecetteCommentaire } = this.props;
  }
  DeleteCompte = () => {

    console.log("test");

    const { logout, navigation } = this.props
    const { token } = this.props;
    var bearer_token = token;
    var bearer = 'Bearer ' + bearer_token;
    let data = JSON.stringify({
    })
    axios.post('https://cookathomeapp.herokuapp.com/api/delete-compte', data, {
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

    logout()

    this.setModalVisible(!this.state.modalVisible);
    navigation.navigate('Login')
  }
  componentDidMount() {
    const { setRecetteUser, loading, token } = this.props;
    loading(true)
    var bearer_token = token;
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

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View>
            <LinearGradient colors={['#507E96', '#F7F8F8']}  >
              <ScrollView >
                <View style={{ height: 800 }}>
                  <ImageBackground style={styles.imgBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagefond.png')}>

                    <TouchableOpacity
                      onPress={() => {

                        this.setModalVisible(!this.state.modalVisible);

                      }}>
                      <View style={styles.buttonGoToBack}>
                        <GoBack style={[styles.textGoToBack]} size={25} />
                      </View>
                    </TouchableOpacity>



                    <View style={styles.structGlobalModal}>
                      <Image
                        style={styles.LogoCookAtHome}
                        source={require('../data/image/logocookathome.png')}
                      />

                      <View style={styles.carddeletecompte}>
                        <View style={styles.marginfav}>
                          <Image style={styles.imageFavDeleteCompte} source={require('../data/image/avatar.png')} />

                          <Text style={styles.titledeletecompte}>Etes vous sur de vouloir supprimer vôtre compte ?</Text>

                        </View>



                      </View>

                      <TouchableOpacity
                        onPress={this.DeleteCompte} style={styles.boutondelete}>
                        <Text style={styles.boutontext}>Supprimer vôtre compte</Text>
                      </TouchableOpacity>



                    </View>

                  </ImageBackground>


                </View>
              </ScrollView>
            </LinearGradient>
          </View>
        </Modal>


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


                  <TouchableOpacity onPress={() => {
                    this.setModalVisible(true);
                  }} style={styles.boutondeletealertmodal}>

                    <DeleteCompte style={[styles.textGoToBack]} size={25} />
                  </TouchableOpacity>


                  <Image
                    style={styles.AvatarCookAtHome}
                    source={require('../data/image/avatar.png')}
                  />


                </View>
                <View style={{ width: 190, }}>
                  <ProfilRecetteUser></ProfilRecetteUser>
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

              <RecettesUser userrecette={userrecette} onPress={(recette) => navigation.navigate("RecetteDetailContainer", recette)} />

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

});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
