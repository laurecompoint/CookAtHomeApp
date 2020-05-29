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
import CardFavorie from '../components/CardFavorie';


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


  render() {

    return (
      <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
        <ImageBackground style={styles.imgBackground}
          resizeMode='cover'
          source={require('../data/image/imagefond.png')}>
          <View style={{ flex: 1 }}>

            <ScrollView>
              <View>

                <View style={styles.structGlobal} >
                  <Image
                    style={styles.LogoCookAtHome}
                    source={require('../data/image/logocookathome.png')}
                  />
                  <Text style={styles.titre}>Vos recette préférer</Text>

                  <CardFavorie></CardFavorie>

                </View>




              </View>

            </ScrollView>


          </View>
        </ImageBackground>
      </LinearGradient>
    );

  }
}

export default FavorieRecetteContainer;
