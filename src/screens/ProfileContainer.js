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

  doLogout = () => {
    const { logout, navigation } = this.props
    logout()
    navigation.navigate('Login')
  }

  modifInfo = () => {
    const { navigation } = this.props
    navigation.navigate('RecetteDetailContainer')
  }

  render() {
    const { email } = this.props
    return (
      <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../data/image/imagefond.png')}>
          <ScrollView>
            <View style={styles.structGlobal}>
              <Image
                style={styles.LogoCookAtHome}
                source={require('../data/image/logocookathome.png')}
              />
              <Text style={styles.titre}>Votre compte</Text>
              <View style={styles.structProfil}>
                <LinearGradient colors={['#800F00', '#400800']} style={styles.boutonlogout}>
                  <TouchableOpacity onPress={this.doLogout}>
                    <Text style={styles.textPolice, styles.textboutton}>Déconnexion</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['white', 'white']} style={styles.infoprofil}>

                  <Text style={styles.textPolice, styles.textinfo}>Infos</Text>

                </LinearGradient>

              </View>
              <View style={styles.viewRowInfo}>
                <View style={{ width: 150, height: 150 }}>
                  <Image
                    style={styles.AvatarCookAtHome}
                    source={require('../data/image/avatar.png')}
                  />


                </View>
                <View style={{ width: 190, height: 150 }}>

                  <Text >Nom : Cookathome</Text>
                  <Text >Email : {email}</Text>
                  <LinearGradient colors={['#4F147B', '#704C8B']} style={styles.boutonmodif}>
                    <TouchableOpacity onPress={this.modifInfo}>
                      <Text style={styles.boutontext}>Modifier</Text>
                    </TouchableOpacity>
                  </LinearGradient>

                </View>

              </View>

            </View>
          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    );
  }
}


const mapStateToProps = state => ({
  email: state.user.email
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Actions.logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
