import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,

} from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import Filtreentree from '../data/image/filtrentree.svg';
import Filtredessert from '../data/image/filtredessert.svg';
import Filtreapero from '../data/image/filtreapero.svg';
import Filtrdej from '../data/image/filtredej.svg';
import Filtre from '../data/image/testplats.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import InputAdd from '../components/InputAdd';
import * as axios from 'axios';

import { ImageBackground } from 'react-native';
import { filterRecettes } from '../reducers/recipe';
import ImagePicker from 'react-native-image-picker';

class RecettePlusContainer extends Component {

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
            materiel: '',
            error: null,
            colorActiveItemFiltrePlats: '#FFFFFF',
            colorActiveItemFiltreApero: '#FFFFFF',
            colorActiveItemFiltreEntree: '#FFFFFF',
            colorActiveItemFiltreDessert: '#FFFFFF',
            colorActiveItemFiltreDejeuner: '#FFFFFF',
            picturerecipe: require('../data/image/photorecetteadd.png')

        };


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
    onChangeCuisson = (cuisson) => {
        this.setState({
            cuisson
        })
    }
    onChangeNbpersonne = (nbpersonne) => {
        this.setState({
            nbpersonne
        })
    }
    onChangeMateriel = (materiel) => {
        this.setState({
            materiel
        })
    }



    addrecette = () => {

        const { materiel, title, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, preparation1, preparation2, preparation3, preparation4, preparation5, cuisson, type, nbpersonne } = this.state
        const { filter } = this.props
        if (title == "") {
            alert('Error: le titre de la recette ne peut pas etre vide');
        }
        if (ingredient1 == "" & ingredient2 == "" & ingredient3 == "" & ingredient4 == "" & ingredient5 == "" & ingredient6 == "") {
            alert('Error: aucun des ingredients de la recette ne peut pas etre vide');
        }
        if (preparation1 == "" & preparation2 == "" & preparation3 == "" & preparation4 == "" & preparation5 == "") {
            alert('Error: aucun des preparations de la recette ne peut pas etre vide');
        }

        if (cuisson == "") {
            alert('Error: le temps de cuisson de la recette ne peut pas etre vide');
        }
        if (cuisson == "") {
            alert('Error: pour combien de personne, la recette est réalisable ne peut pas etre vide');
        }
        if (materiel == "") {
            alert('Error: materiel ne peut pas etre vide');
        }
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
        const { token } = this.props;
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
            cuisson: cuisson,
            type: this.type,
            nbpersonne: nbpersonne,
            materiel: materiel,
        })
        axios.post('https://cookathomeapp.herokuapp.com/api/recettes', data, {
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

        // if (this.type != "" & materiel != "" & nbpersonne != "" & cuisson != "" & preparation5 != "" & preparation4 != "" & preparation3 != "" & preparation2 != "" & preparation1 != "" & ingredient6 != "" & ingredient5 != "" & ingredient4 != "" & ingredient3 != "" & ingredient2 != "" & ingredient1 != "" & title != "") {
        //supprimer donner redux du filtre
        const { resetfilter, navigation } = this.props
        resetfilter()
        navigation.navigate('Home')

        // }


    }

    render() {

        const { filterRecettes, filter } = this.props;
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

                    <View style={styles.structGlobal} >
                        <Image
                            style={styles.LogoCookAtHome}
                            source={require('../data/image/logocookathome.png')}
                        />
                        <Text style={styles.titre}>Ajouter une recette </Text>


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


                        <ScrollView style={styles.strucinput}>


                            <InputAdd
                                ref={ref => { this.refTitle = ref }}
                                onChangeText={this.onChangeTitle}
                                placeholder={"Titre de la recette"}
                                style={styles.textInputAddRecipe} />
                            <View style={styles.structAddRecipe} >

                                <InputAdd
                                    ref={ref => { this.refCuisson = ref }}
                                    onChangeText={this.onChangeCuisson}
                                    placeholder={"Cuisson"}
                                    style={styles.textInputAddRecipeCuissonPersonne} />

                                <InputAdd
                                    ref={ref => { this.refNbpersonne = ref }}
                                    onChangeText={this.onChangeNbpersonne}
                                    placeholder={"Personnes"}
                                    style={styles.textInputAddRecipeCuissonPersonne} />

                            </View>


                            <InputAdd
                                ref={ref => { this.refMateriel = ref }}
                                onChangeText={this.onChangeMateriel}
                                placeholder={"Matériel"}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refIngredient1 = ref }}
                                onChangeText={this.onChangeIngredient1}
                                placeholder={"Ingredient 1"}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refIngredient2 = ref }}
                                onChangeText={this.onChangeIngredient2}
                                placeholder={"Ingredient 2"}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refIngredient3 = ref }}
                                onChangeText={this.onChangeIngredient3}
                                placeholder={"Ingredient 3"}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refIngredient4 = ref }}
                                onChangeText={this.onChangeIngredient4}
                                placeholder={"Ingredient 4"}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refIngredient5 = ref }}
                                onChangeText={this.onChangeIngredient5}
                                placeholder={"Ingredient 5"}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refIngredient6 = ref }}
                                onChangeText={this.onChangeIngredient6}
                                placeholder={"Ingredient 6"}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refPreparation1 = ref }}
                                onChangeText={this.onChangePreparation1}
                                placeholder={"Preparation : etape 1"}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refPreparation2 = ref }}
                                onChangeText={this.onChangePreparation2}
                                placeholder={"Preparation : etape 2"}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textInputAddRecipe} />
                            <InputAdd
                                ref={ref => { this.refPreparation3 = ref }}
                                onChangeText={this.onChangePreparation3}
                                placeholder={"Preparation : etape 3"}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refPreparation4 = ref }}
                                onChangeText={this.onChangePreparation4}
                                placeholder={"Preparation : etape 4"}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textInputAddRecipe} />

                            <InputAdd
                                ref={ref => { this.refPreparation5 = ref }}
                                onChangeText={this.onChangePreparation5}
                                placeholder={"Preparation : etape 5"}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.textInputAddRecipe} />





                        </ScrollView>
                        <LinearGradient colors={['#4F147B', '#704C8B']} style={styles.addRecette}>
                            <TouchableOpacity
                                onPress={this.addrecette}>
                                <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 9, color: 'white', fontFamily: "Calibri" }}>Ajouter une recette </Text>
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
    email: state.user.email,
    name: state.user.name,
    token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
    resetfilter: () => dispatch(Actions.resetfilter()),
    loading: (isLoading) => dispatch(Actions.loading(isLoading)),
    filterRecettes: (criteria, sort) => dispatch(Actions.filterRecettes(criteria, sort))

});
export default connect(mapStateToProps, mapDispatchToProps)(RecettePlusContainer);