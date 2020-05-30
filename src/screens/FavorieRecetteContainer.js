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
import { requestGetRecetteFavories, Actions } from '../actions';

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
    const { requestGetRecetteFavories } = this.props;
    return requestGetRecetteFavories()
  }

  render() {
    const { favorierecette } = this.props;
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
});

const mapDispatchToProps = dispatch => ({
  requestGetRecetteFavories: () => dispatch(requestGetRecetteFavories())
});
export default connect(mapStateToProps, mapDispatchToProps)(FavorieRecetteContainer);

