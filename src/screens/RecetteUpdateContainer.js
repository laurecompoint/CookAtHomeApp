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
import GoBack from '../data/image/goback.svg';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import { ImageBackground } from 'react-native';
class RecetteUpdateContainer extends Component {

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


    onPressGoToBack = () => {

        const { navigation } = this.props
        navigation.navigate('Home')
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


    Updaterecette = () => {
        const { navigation } = this.props
        const { title, photo, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, preparation1, preparation2, preparation3, preparation4, preparation5, cuisson, type, nbpersonne } = this.state

        const { token } = this.props;
        var bearer_token = token;
        console.log('TEST' + token);
        var bearer = 'Bearer ' + bearer_token;
        let data = JSON.stringify({
            title: title,
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
            type: type,
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


        navigation.navigate('Home')

    }

    render() {
        const { navigation } = this.props
        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >

                <ImageBackground style={styles.imgBackground}
                    resizeMode='cover'
                    source={require('../data/image/imagefond.png')}>

                    <View>

                        <TouchableOpacity style={styles.buttonGoToBack} onPress={this.onPressGoToBack}>
                            <GoBack style={[styles.textGoToBack]} size={25} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.structGlobal} >
                        <Image
                            style={styles.LogoCookAtHome}
                            source={require('../data/image/logocookathome.png')}
                        />
                        <Text style={styles.titre}>Modifier une recette </Text>
                        <ScrollView>
                            <InputAddRecette
                                ref={ref => { this.refTitle = ref }}
                                onChangeText={this.onChangeTitle}
                                defaultValue={navigation.getParam('title', '[MISSING_TITLE]')}
                                placeholder={navigation.getParam('title', '[MISSING_TITLE]')} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient1 = ref }}
                                onChangeText={this.onChangeIngredient1}
                                defaultValue={navigation.getParam('ingredient1', '[MISSING_INGREDIENT]')}
                                placeholder={navigation.getParam('ingredient1', '[MISSING_INGREDIENT]')} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient2 = ref }}
                                onChangeText={this.onChangeIngredient2}
                                defaultValue={navigation.getParam('ingredient2', '[MISSING_INGREDIENT]')}
                                placeholder={navigation.getParam('ingredient2', '[MISSING_INGREDIENT]')} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient3 = ref }}
                                onChangeText={this.onChangeIngredient3}
                                defaultValue={navigation.getParam('ingredient3', '[MISSING_INGREDIENT]')}
                                placeholder={navigation.getParam('ingredient3', '[MISSING_INGREDIENT]')} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient4 = ref }}
                                onChangeText={this.onChangeIngredient4}
                                defaultValue={navigation.getParam('ingredient4', '[MISSING_INGREDIENT]')}
                                placeholder={navigation.getParam('ingredient4', '[MISSING_INGREDIENT]')} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient5 = ref }}
                                onChangeText={this.onChangeIngredient5}
                                defaultValue={navigation.getParam('ingredient5', '[MISSING_INGREDIENT]')}
                                placeholder={navigation.getParam('ingredient5', '[MISSING_INGREDIENT]')} />

                            <InputAddRecette
                                ref={ref => { this.refIngredient6 = ref }}
                                onChangeText={this.onChangeIngredient6}
                                defaultValue={navigation.getParam('ingredient6', '[MISSING_INGREDIENT]')}
                                placeholder={navigation.getParam('ingredient6', '[MISSING_INGREDIENT]')} />

                            <InputAddRecette
                                ref={ref => { this.refPreparation1 = ref }}
                                onChangeText={this.onChangePreparation1}
                                defaultValue={navigation.getParam('preparation1', '[MISSING_PREPARATION]')}
                                placeholder={navigation.getParam('preparation1', '[MISSING_PREPARATION]')} />

                            <InputAddRecette
                                ref={ref => { this.refPreparation2 = ref }}
                                onChangeText={this.onChangePreparation2}
                                defaultValue={navigation.getParam('preparation2', '[MISSING_PREPARATION]')}
                                placeholder={navigation.getParam('preparation2', '[MISSING_PREPARATION]')} />
                            <InputAddRecette
                                ref={ref => { this.refPreparation3 = ref }}
                                onChangeText={this.onChangePreparation3}
                                defaultValue={navigation.getParam('preparation3', '[MISSING_PREPARATION]')}
                                placeholder={navigation.getParam('preparation3', '[MISSING_PREPARATION]')} />

                            <InputAddRecette
                                ref={ref => { this.refPreparation4 = ref }}
                                onChangeText={this.onChangePreparation4}
                                defaultValue={navigation.getParam('preparation4', '[MISSING_PREPARATION]')}
                                placeholder={navigation.getParam('preparation4', '[MISSING_PREPARATION]')} />

                            <InputAddRecette
                                ref={ref => { this.refPreparation5 = ref }}
                                onChangeText={this.onChangePreparation5}
                                defaultValue={navigation.getParam('preparation5', '[MISSING_PREPARATION]')}
                                placeholder={navigation.getParam('preparation5', '[MISSING_PREPARATION]')} />

                            <InputAddRecette
                                ref={ref => { this.refType = ref }}
                                onChangeText={this.onChangeType}
                                defaultValue={navigation.getParam('type', '[MISSING_TYPE]')}
                                placeholder={navigation.getParam('type', '[MISSING_TYPE]')} />
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
    token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
    loading: (isLoading) => dispatch(Actions.loading(isLoading)),
    //requestGetRecetteFavories: () => dispatch(requestGetRecetteFavories())
});
export default connect(mapStateToProps, mapDispatchToProps)(RecetteUpdateContainer);