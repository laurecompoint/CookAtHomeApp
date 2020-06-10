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
import InputAddRecette from '../components/InputAddRecette';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import { ImageBackground } from 'react-native';
class RecettePlusContainer extends Component {

    state = {
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
        error: null
    };

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

    onChangeTitle = (title) => {
        this.setState({
            title
        })
    }
    onChangePhoto = (photo) => {
        this.setState({
            photo
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

        const { title, photo, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, preparation1, preparation2, preparation3, preparation4, preparation5, cuisson, type, nbpersonne } = this.state

        if (title == "") {
            alert('Error: le titre de la recette ne peut pas etre vide');
        }
        if (photo == "") {
            alert('Error: la photo de la recette ne peut pas etre vide');
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
        axios.post('https://cookathomeapp.herokuapp.com/api/recettes', {

            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },

            title: title,
            photo: photo,
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
            favorie_id: 0,
        })
            .then(function (response) {

                console.log(response);
            })
            .catch(function (error) {

                console.log(error);
            });

    }

    render() {
        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >

                <ImageBackground style={styles.imgBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagefond.png')}>
                    <ScrollView>
                        <View style={styles.structGlobal} >
                            <Image
                                style={styles.LogoCookAtHome}
                                source={require('../data/image/logocookathome.png')}
                            />
                            <Text style={styles.titre}>Ajouter une recette</Text>
                            <InputAddRecette
                                ref={ref => { this.refTitle = ref }}
                                onChangeText={this.onChangeTitle}
                                placeholder={"Titre de la recette"} />

                            <InputAddRecette
                                ref={ref => { this.refPhoto = ref }}
                                onChangeText={this.onChangePhoto}
                                placeholder={"Non de l'image"} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient1 = ref }}
                                onChangeText={this.onChangeIngredient1}
                                placeholder={"Ingredient 1"} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient2 = ref }}
                                onChangeText={this.onChangeIngredient2}
                                placeholder={"Ingredient 2"} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient3 = ref }}
                                onChangeText={this.onChangeIngredient3}
                                placeholder={"Ingredient 3"} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient4 = ref }}
                                onChangeText={this.onChangeIngredient4}
                                placeholder={"Ingredient 4"} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient5 = ref }}
                                onChangeText={this.onChangeIngredient5}
                                placeholder={"Ingredient 5"} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient6 = ref }}
                                onChangeText={this.onChangeIngredient6}
                                placeholder={"Ingredient 6"} />

                            <InputAddRecette
                                ref={ref => { this.refPreparation1 = ref }}
                                onChangeText={this.onChangePreparation1}
                                placeholder={"Preparation : etape 1"} />

                            <InputAddRecette
                                ref={ref => { this.refPreparation2 = ref }}
                                onChangeText={this.onChangePreparation2}
                                placeholder={"Preparation : etape 2"} />
                            <InputAddRecette
                                ref={ref => { this.refPreparation3 = ref }}
                                onChangeText={this.onChangePreparation3}
                                placeholder={"Preparation : etape 3"} />

                            <InputAddRecette
                                ref={ref => { this.refPreparation4 = ref }}
                                onChangeText={this.onChangePreparation4}
                                placeholder={"Preparation : etape 4"} />

                            <InputAddRecette
                                ref={ref => { this.refPreparation5 = ref }}
                                onChangeText={this.onChangePreparation5}
                                placeholder={"Preparation : etape 5"} />

                            <InputAddRecette
                                ref={ref => { this.refType = ref }}
                                onChangeText={this.onChangeType}
                                placeholder={"Type de la recette"} />

                            <InputAddRecette
                                ref={ref => { this.refCuisson = ref }}
                                onChangeText={this.onChangeCuisson}
                                placeholder={"Cuisson"} />

                            <InputAddRecette
                                ref={ref => { this.refNbpersonne = ref }}
                                onChangeText={this.onChangeNbpersonne}
                                placeholder={"Combien de personne"} />
                            <LinearGradient colors={['#4F147B', '#704C8B']} style={styles.addRecette}>
                                <TouchableOpacity
                                    onPress={this.addrecette}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 9, color: 'white', fontFamily: "Calibri" }}>Ajouter une recette</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </ScrollView>
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