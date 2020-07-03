import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import InputAdd from '../components/InputAdd';
import * as axios from 'axios';
import Filtreentree from '../data/image/filtrentree.svg';
import Filtredessert from '../data/image/filtredessert.svg';
import Filtreapero from '../data/image/filtreapero.svg';
import Filtrdej from '../data/image/filtredej.svg';
import Filtre from '../data/image/testplats.svg';
import GoBack from '../data/image/goback.svg';
import Trash from '../data/image/trash.svg';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import { ImageBackground } from 'react-native';
import { filterRecettes } from '../reducers/recipe';

class RecetteUpdateContainer extends Component {

    constructor(props) {

        super(props)
        this.state = {
            title: '',
            photo: '',
            ingredient1: '',
            ingredient2: '',
            ingredient3: '',
            ingredient4: '',
            ingredient5: '',
            ingredient6: '',
            preparation1: '',
            preparation2: '',
            preparation3: '',
            preparation4: '',
            preparation5: '',
            type: '',
            cuisson: '',
            nbpersonne: '',
            colorActiveItemFiltrePlats: '#FFFFFF',
            colorActiveItemFiltreApero: '#FFFFFF',
            colorActiveItemFiltreEntree: '#FFFFFF',
            colorActiveItemFiltreDessert: '#FFFFFF',
            colorActiveItemFiltreDejeuner: '#FFFFFF',
            error: null
        };
    }


    onPressGoToBack = () => {

        const { navigation } = this.props
        navigation.navigate('Profile')
    }

    onChangeTitle = (title) => {
        this.setState({
            title
        })
    }

    onChangeIngredient1 = (ingredient1) => {
        this.setState({
            ingredient1
        })
    }
    onChangeIngredient2 = (ingredient2) => {
        this.setState({
            ingredient2
        })
    }
    onChangeIngredient3 = (ingredient3) => {
        this.setState({
            ingredient3
        })
    }
    onChangeIngredient4 = (ingredient4) => {
        this.setState({
            ingredient4
        })
    }
    onChangeIngredient5 = (ingredient5) => {
        this.setState({
            ingredient5
        })
    }
    onChangeIngredient6 = (ingredient6) => {
        this.setState({
            ingredient6
        })
    }
    onChangeIngredient1 = (ingredient1) => {
        this.setState({
            ingredient1
        })
    }
    onChangePreparation1 = (preparation1) => {
        this.setState({
            preparation1
        })
    }
    onChangePreparation2 = (preparation2) => {
        this.setState({
            preparation2
        })
    }
    onChangePreparation3 = (preparation3) => {
        this.setState({
            preparation3
        })
    }
    onChangePreparation4 = (preparation4) => {
        this.setState({
            preparation4
        })
    }
    onChangePreparation5 = (preparation5) => {
        this.setState({
            preparation5
        })
    }

    onChangeMateriel = (materiel) => {
        this.setState({
            materiel
        })
    }
    onPressDeleteRecipe = () => {
        const { navigation } = this.props
        const { token } = this.props;
        var bearer_token = token;
        var bearer = 'Bearer ' + bearer_token;
        let data = JSON.stringify({
        })
        axios.post('https://cookathomeapp.herokuapp.com/api/delete/' + navigation.getParam('id', '[MISSING_ID]'), data, {
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

        navigation.navigate('Home')
    }

    Updaterecette = () => {
        const { filter, token, navigation, resetfilter } = this.props
        const { title, photo, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, preparation1, preparation2, preparation3, preparation4, preparation5, cuisson, type, nbpersonne } = this.state
        if (filter == "apero") {
            this.photo = "photodefaultapero"
            this.type = "apero"
        }
        if (filter == "entree") {
            this.photo = "photodefaultentree"
            this.type = "entree"
        }
        if (filter == "plats") {
            this.photo = "photodefaultplats"
            this.type = "plats"
        }
        if (filter == "dessert") {
            this.photo = "photodefaultdessert"
            this.type = "dessert"
        }
        if (filter == "dejeuner") {
            this.photo = "photodefaultdejeuner"
            this.type = "dejeuner"

        }
        var bearer_token = token;
        var bearer = 'Bearer ' + bearer_token;
        let data = JSON.stringify({
            title: title,
            photo: this.photo,
            ingredient1: ingredient1,
            ingredient2: ingredient2,
            ingredient3: ingredient3,
            ingredient4: ingredient4,
            ingredient5: ingredient5,
            ingredient6: ingredient6,
            preparation1: preparation1,
            preparation2: preparation2,
            preparation3: preparation3,
            preparation4: preparation4,
            preparation5: preparation5,
            cuisson: 10,
            type: this.type,
            nbpersonne: 3,
        })
        axios.post('https://cookathomeapp.herokuapp.com/api/updaterecette/' + navigation.getParam('id', '[MISSING_ID]'), data,
            {
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


        resetfilter()
        navigation.navigate('Home')

    }

    render() {
        const { navigation, filterRecettes, filter } = this.props;
        if (filter == 'plats') {
            this.state.colorActiveItemFiltrePlats = '#FFB347'
        } else {
            this.state.colorActiveItemFiltrePlats = '#000000'
        }
        if (filter == 'entree') {
            this.state.colorActiveItemFiltreEntree = '#FFB347'
        } else {
            this.state.colorActiveItemFiltreEntree = '#000000'
        }
        if (filter == 'apero') {
            this.state.colorActiveItemFiltreApero = '#FFB347'
        } else {
            this.state.colorActiveItemFiltreApero = '#000000'
        }
        if (filter == 'dessert') {
            this.state.colorActiveItemFiltreDessert = '#FFB347'
        } else {
            this.state.colorActiveItemFiltreDessert = '#000000'
        }
        if (filter == 'dejeuner') {
            this.state.colorActiveItemFiltreDejeuner = '#FFB347'
        } else {
            this.state.colorActiveItemFiltreDejeuner = '#000000'

        }
        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >

                <ImageBackground style={styles.imgBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagefond.png')}>

                    <View style={styles.structDeletRecipe}>

                        <TouchableOpacity style={styles.buttonGoToBack} onPress={this.onPressGoToBack}>
                            <GoBack style={[styles.textGoToBack]} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonDeleteRecipe} onPress={this.onPressDeleteRecipe}>
                            <Trash style={[styles.textGoToBack]} size={25} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.structGlobal} >
                        <Image
                            style={styles.LogoCookAtHome}
                            source={require('../data/image/logocookathome.png')}
                        />
                        <Text style={styles.titre}>Modifier une recette </Text>
                        <View style={styles.structAddTypeRecipe} >

                            <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes("dejeuner", "type-apero")}>
                                <Filtrdej style={{ color: this.state.colorActiveItemFiltreDejeuner, textAlign: 'left', marginLeft: 25, marginTop: 3, }} />
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes("apero", "type-apero")}>
                                <Filtreapero style={{ color: this.state.colorActiveItemFiltreApero, textAlign: 'left', marginLeft: 25, marginTop: 3, }} />
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes("entree", "type-entree")}>
                                <Filtreentree style={{ color: this.state.colorActiveItemFiltreEntree, textAlign: 'left', marginLeft: 25, marginTop: 3, }} />
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes("plats", "type-plats")}>
                                <Filtre style={{ color: this.state.colorActiveItemFiltrePlats, textAlign: 'left', marginLeft: 25, marginTop: 3, }} />
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.filtretype} title={""} onPress={() => filterRecettes("dessert", "type-dessert")}>
                                <Filtredessert style={{ color: this.state.colorActiveItemFiltreDessert, textAlign: 'left', marginLeft: 25, marginTop: 3, }} />
                            </TouchableOpacity >

                        </View>
                        <ScrollView>
                            <InputAdd
                                ref={ref => { this.refTitle = ref }}
                                onChangeText={this.onChangeTitle}
                                style={styles.textInputAddRecipe}
                                defaultValue={navigation.getParam('title', '[MISSING_TITLE]')}
                            />

                            <InputAdd
                                ref={ref => { this.refIngredient1 = ref }}
                                onChangeText={this.onChangeIngredient1}
                                style={styles.textInputAddRecipe}
                                defaultValue={navigation.getParam('ingredient1', '[MISSING_INGREDIENT]')} />

                            <InputAdd
                                ref={ref => { this.refIngredient2 = ref }}
                                onChangeText={this.onChangeIngredient2}
                                style={styles.textInputAddRecipe}
                                defaultValue={navigation.getParam('ingredient2', '[MISSING_INGREDIENT]')}
                            />

                            <InputAdd
                                ref={ref => { this.refIngredient3 = ref }}
                                onChangeText={this.onChangeIngredient3}
                                style={styles.textInputAddRecipe}
                                defaultValue={navigation.getParam('ingredient3', '[MISSING_INGREDIENT]')}
                            />

                            <InputAdd
                                ref={ref => { this.refIngredient4 = ref }}
                                onChangeText={this.onChangeIngredient4}
                                style={styles.textInputAddRecipe}
                                defaultValue={navigation.getParam('ingredient4', '[MISSING_INGREDIENT]')}
                            />

                            <InputAdd
                                ref={ref => { this.refIngredient5 = ref }}
                                onChangeText={this.onChangeIngredient5}
                                style={styles.textInputAddRecipe}
                                defaultValue={navigation.getParam('ingredient5', '[MISSING_INGREDIENT]')}
                            />

                            <InputAdd
                                ref={ref => { this.refIngredient6 = ref }}
                                onChangeText={this.onChangeIngredient6}
                                style={styles.textInputAddRecipe}
                                defaultValue={navigation.getParam('ingredient6', '[MISSING_INGREDIENT]')}
                            />

                            <InputAdd
                                ref={ref => { this.refPreparation1 = ref }}
                                onChangeText={this.onChangePreparation1}
                                defaultValue={navigation.getParam('preparation1', '[MISSING_PREPARATION]')}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refPreparation2 = ref }}
                                onChangeText={this.onChangePreparation2}
                                defaultValue={navigation.getParam('preparation2', '[MISSING_PREPARATION]')}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textInputAddRecipe} />
                            <InputAdd
                                ref={ref => { this.refPreparation3 = ref }}
                                onChangeText={this.onChangePreparation3}
                                defaultValue={navigation.getParam('preparation3', '[MISSING_PREPARATION]')}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refPreparation4 = ref }}
                                onChangeText={this.onChangePreparation4}
                                defaultValue={navigation.getParam('preparation4', '[MISSING_PREPARATION]')}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refPreparation5 = ref }}
                                onChangeText={this.onChangePreparation5}
                                defaultValue={navigation.getParam('preparation5', '[MISSING_PREPARATION]')}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refTitle = ref }}
                                onChangeText={this.onChangeMateriel}
                                style={styles.textInputAddRecipe}
                                multiline={true}
                                defaultValue={navigation.getParam('materiel', '[MISSING_MATERIEL]')}
                            />
                        </ScrollView>

                        <LinearGradient colors={['#4F147B', '#704C8B']} style={styles.addRecette}>
                            <TouchableOpacity
                                onPress={this.Updaterecette}>
                                <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 9, color: 'white', fontFamily: "Calibri" }}>Modifier</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                </ImageBackground>
            </LinearGradient>
        );
    }
}
const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    filter: state.recipe.filter,
    recettes: filterRecettes(state),
    token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
    resetfilter: () => dispatch(Actions.resetfilter()),
    loading: (isLoading) => dispatch(Actions.loading(isLoading)),
    filterRecettes: (criteria, sort) => dispatch(Actions.filterRecettes(criteria, sort))
});
export default connect(mapStateToProps, mapDispatchToProps)(RecetteUpdateContainer);