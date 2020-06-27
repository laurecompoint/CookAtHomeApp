import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import InputAdd from '../components/InputAdd';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import { ImageBackground } from 'react-native';

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
            error: null,
            picturerecipe: require('../data/image/photorecetteadd.png')
        };
        this._picturerecipeClicked = this._picturerecipeClicked.bind(this)
    }

    _picturerecipeClicked() {
        // Ici nous appellerons la librairie react-native-image-picker pour récupérer un avatar
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
                console.log('Lutilisateur a annulé')
            }
            else if (response.error) {
                console.log('Erreur : ', response.error)
            }
            else {
                console.log('Photo : ', response.uri)
                let requireSource = { uri: response.uri }
                this.setState({
                    picturerecipe: requireSource,

                })

            }
        })
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
    onChangeType = (type) => {
        this.setState({
            type
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

    addrecette = () => {

        const { title, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, preparation1, preparation2, preparation3, preparation4, preparation5, cuisson, type, nbpersonne } = this.state

        if (title == "") {
            alert('Error: le titre de la recette ne peut pas etre vide');
        }
        if (ingredient1 == "" & ingredient2 == "" & ingredient3 == "" & ingredient4 == "" & ingredient5 == "" & ingredient6 == "") {
            alert('Error: aucun des ingredients de la recette ne peut pas etre vide');
        }
        if (preparation1 == "" & preparation2 == "" & preparation3 == "" & preparation4 == "" & preparation5 == "") {
            alert('Error: aucun des preparations de la recette ne peut pas etre vide');
        }
        if (type == "") {
            alert('Error: le type de la recette ne peut pas etre vide');
        }
        if (cuisson == "") {
            alert('Error: le temps de cuisson de la recette ne peut pas etre vide');
        }
        if (cuisson == "") {
            alert('Error: pour combien de personne, la recette est réalisable ne peut pas etre vide');
        }
        const { token } = this.props;
        var bearer_token = token;
        console.log('TEST' + token);
        var bearer = 'Bearer ' + bearer_token;
        let data = JSON.stringify({
            title: title,
            photo: "photodefault",
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
            type: type,
            nbpersonne: nbpersonne,
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
        const { navigation } = this.props
        navigation.navigate('Home')
    }

    render() {
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
                        <Text style={styles.titre}>Ajouter une recette</Text>

                        <TouchableOpacity

                            onPress={this._picturerecipeClicked}>
                            <Image source={this.state.picturerecipe} style={styles.Picturerecipeadd} />
                        </TouchableOpacity>


                        <ScrollView>
                            <InputAdd
                                ref={ref => { this.refTitle = ref }}
                                onChangeText={this.onChangeTitle}
                                placeholder={"Titre de la recette"} />

                            <InputAdd
                                ref={ref => { this.refIngredient1 = ref }}
                                onChangeText={this.onChangeIngredient1}
                                placeholder={"Ingredient 1"} />

                            <InputAdd
                                ref={ref => { this.refIngredient2 = ref }}
                                onChangeText={this.onChangeIngredient2}
                                placeholder={"Ingredient 2"} />

                            <InputAdd
                                ref={ref => { this.refIngredient3 = ref }}
                                onChangeText={this.onChangeIngredient3}
                                placeholder={"Ingredient 3"} />

                            <InputAdd
                                ref={ref => { this.refIngredient4 = ref }}
                                onChangeText={this.onChangeIngredient4}
                                placeholder={"Ingredient 4"} />

                            <InputAdd
                                ref={ref => { this.refIngredient5 = ref }}
                                onChangeText={this.onChangeIngredient5}
                                placeholder={"Ingredient 5"} />

                            <InputAdd
                                ref={ref => { this.refIngredient6 = ref }}
                                onChangeText={this.onChangeIngredient6}
                                placeholder={"Ingredient 6"} />

                            <InputAdd
                                ref={ref => { this.refPreparation1 = ref }}
                                onChangeText={this.onChangePreparation1}
                                placeholder={"Preparation : etape 1"}
                                multiline={true}
                                numberOfLines={4} />

                            <InputAdd
                                ref={ref => { this.refPreparation2 = ref }}
                                onChangeText={this.onChangePreparation2}
                                placeholder={"Preparation : etape 2"}
                                multiline={true}
                                numberOfLines={4} />
                            <InputAdd
                                ref={ref => { this.refPreparation3 = ref }}
                                onChangeText={this.onChangePreparation3}
                                placeholder={"Preparation : etape 3"}
                                multiline={true}
                                numberOfLines={4} />

                            <InputAdd
                                ref={ref => { this.refPreparation4 = ref }}
                                onChangeText={this.onChangePreparation4}
                                placeholder={"Preparation : etape 4"}
                                multiline={true}
                                numberOfLines={4} />

                            <InputAdd
                                ref={ref => { this.refPreparation5 = ref }}
                                onChangeText={this.onChangePreparation5}
                                placeholder={"Preparation : etape 5"}
                                multiline={true}
                                numberOfLines={4} />

                            <InputAdd
                                ref={ref => { this.refType = ref }}
                                onChangeText={this.onChangeType}
                                placeholder={"Type de la recette"} />

                            <InputAdd
                                ref={ref => { this.refCuisson = ref }}
                                onChangeText={this.onChangeCuisson}
                                placeholder={"Cuisson"} />

                            <InputAdd
                                ref={ref => { this.refNbpersonne = ref }}
                                onChangeText={this.onChangeNbpersonne}
                                placeholder={"Combien de personne"} />
                        </ScrollView>
                        <LinearGradient colors={['#4F147B', '#704C8B']} style={styles.addRecette}>
                            <TouchableOpacity
                                onPress={this.addrecette}>
                                <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 9, color: 'white', fontFamily: "Calibri" }}>Ajouter une recette</Text>
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
    token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
    loading: (isLoading) => dispatch(Actions.loading(isLoading)),
    //requestGetRecetteFavories: () => dispatch(requestGetRecetteFavories())
});
export default connect(mapStateToProps, mapDispatchToProps)(RecettePlusContainer);