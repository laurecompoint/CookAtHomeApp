import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
    Button,
} from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Searchlogo from '../data/image/search.svg';
import Filtreentree from '../data/image/filtrentree.svg';
import Filtredessert from '../data/image/filtredessert.svg';
import Filtreapero from '../data/image/filtreapero.svg';
import Filtre from '../data/image/testplats.svg';
import { ImageBackground } from 'react-native';
import Recettes from '../components/recettes';
import { requestGetListings, Actions } from '../actions';
import { filterRecettes } from '../reducers/recipe';
import Goback from '../data/image/goback.svg';
class RechercheContainer extends Component {

    componentDidMount() {
        const { requestGetListings } = this.props;
        return requestGetListings()
    }
    onPressGoToBack = () => {

        const { navigation } = this.props
        navigation.navigate('Home')
    }
    render() {
        const { recettes, filterRecettes, filter } = this.props;
        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >
                <ImageBackground style={styles.imgBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagefond.png')}>
                    <TouchableOpacity onPress={this.onPressGoToBack}>
                        <Goback style={styles.goback} />
                    </TouchableOpacity>


                    <ScrollView >
                        <View style={styles.structGlobal}>
                            <Image
                                style={styles.LogoCookAtHome}
                                source={require('../data/image/logocookathome.png')}
                            />
                            <View style={styles.structInputRecherche} >
                                <TextInput placeholder={"Chercher une recette"} style={styles.textRechercheInput} defaultValue={filter} onChangeText={filterRecettes}></TextInput>
                                <View style={styles.bouttonSearch}>

                                    <Searchlogo style={styles.searchlogo} />


                                </View>
                            </View>
                            <View style={styles.structFiltre} >

                                <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes(filter, "title")}>
                                    <Filtreapero style={styles.searchlogo} />
                                </TouchableOpacity >
                                <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes(filter, "title")}>
                                    <Filtreentree style={styles.searchlogo} />
                                </TouchableOpacity >
                                <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes(filter, "title")}>
                                    <Filtre style={styles.searchlogo} />
                                </TouchableOpacity >
                                <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes(filter, "type")}>
                                    <Filtredessert style={styles.searchlogo} />
                                </TouchableOpacity >

                            </View>
                            <Recettes recettes={recettes} />


                        </View>

                    </ScrollView>


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
export default connect(mapStateToProps, mapDispatchToProps)(RechercheContainer);


