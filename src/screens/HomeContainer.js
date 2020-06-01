import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { filterRecettes } from '../reducers/recipe';
import { requestGetListings, Actions } from '../actions';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import RechercheInput from '../components/RechercheInput'; //Intégration du composants Input
import Searchlogo from '../data/image/search.svg';
class HomeContainer extends Component {
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
    componentDidMount() {
        const { requestGetListings } = this.props;
        return requestGetListings()
    }
    /**
     * Nous n'avons plus besoin d'initialiser un state local au component.
     * isLoading erst 
     */

    onPressSearch = () => {

        const { navigation } = this.props
        navigation.navigate('RechercheContainer')
    }

    render() {
        const { recettes, filterRecettes, filter } = this.props;
        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
                <ImageBackground style={styles.imgBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagefond.png')}>
                    <View style={{ flex: 1 }}>

                        <ScrollView>
                            <View style={styles.structGlobal} >
                                <Image
                                    style={styles.LogoCookAtHome}
                                    source={require('../data/image/logocookathome.png')}
                                />
                                <View style={styles.structInputRecherche} >

                                    <TextInput placeholder={"Chercher une recette"} style={styles.textRechercheInput} defaultValue={filter} onChangeText={filterRecettes}></TextInput>
                                    <TouchableOpacity style={styles.bouttonSearch} onPress={this.onPressSearch}>

                                        <Searchlogo style={styles.searchlogo} />


                                    </TouchableOpacity>

                                </View>
                                <Text style={styles.titre}>Comment ça marche ?</Text>
                            </View>




                        </ScrollView>

                        <ScrollView

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>

                            <View style={styles.containerHome} >
                                <Image
                                    style={styles.LogoCookAtHome}
                                    source={require('../data/image/logocookathome.png')}
                                />
                                <Text>Rechercher votre recette</Text>
                            </View>
                            <View style={styles.containerHome} >
                                <Image
                                    style={styles.LogoCookAtHome}
                                    source={require('../data/image/logocookathome.png')}
                                />
                                <Text>Trouver vos ingredients</Text>
                            </View>
                            <View style={styles.containerHome} >
                                <Image
                                    style={styles.LogoCookAtHome}
                                    source={require('../data/image/logocookathome.png')}
                                />
                                <Text>Cuisiner votre recette</Text>
                            </View>



                        </ScrollView>

                    </View>
                </ImageBackground>
            </LinearGradient >
        );

    }
}
const mapStateToProps = state => ({
    recettes: filterRecettes(state),
    isLoading: state.app.isLoading,
    filter: state.listings.filter,
});

const mapDispatchToProps = dispatch => ({
    requestGetListings: () => dispatch(requestGetListings()),
    filterRecettes: (criteria, sort) => dispatch(Actions.filterRecettes(criteria, sort))
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
//export default HomeContainer

