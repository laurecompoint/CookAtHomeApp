import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Modal,
    TouchableHighlight,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground } from 'react-native';
import GoBack from '../data/image/goback.svg';
import CommentaireModal from '../data/image/commentaire.svg';
import photos from '../data/photos/index';
import { connect } from 'react-redux';
import { Actions } from '../actions';
import * as axios from 'axios';
import RecetteCommentaire from '../components/recettecommentaire';
import StartEmpty from '../data/image/startempty.svg';
import StartNoEmpty from '../data/image/startnoempty.svg';
import InputAdd from '../components/InputAdd';
import Navbar from '../navigation/LoggedInTabNavigator';
class RecetteDetailContainer extends Component {

    constructor(props) {

        super(props);
        this.state = {
            favorieRecette: '',
            modalVisible: false,
            comment: '',
        };


    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
        const { token, setRecetteCommentaire } = this.props;
        const { navigation } = this.props
        var bearer_token = token;
        var bearer = 'Bearer ' + bearer_token;
        return fetch('https://cookathomeapp.herokuapp.com/api/commentaire/' + navigation.getParam('id', '[MISSING_ID]'), {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setRecetteCommentaire(response);

            })
            .catch((err) => {
                console.log('An error occured', err)
            });
    }
    onChangeComment = (comment) => {
        this.setState({
            comment
        })
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            const { token, setFavoriebyrecette } = this.props;
            const { navigation } = this.props
            var bearer_token = token;
            var bearer = 'Bearer ' + bearer_token;
            return fetch('https://cookathomeapp.herokuapp.com/api/favoriebyrecette/' + navigation.getParam('id', '[MISSING_ID]'), {
                method: 'GET',
                withCredentials: true,
                credentials: 'include',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response;
                })
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setFavoriebyrecette(response);

                })
                .catch((err) => {
                    console.log('An error occured', err)
                });
        });
    }
    componentWillUnmount() {
        this.focusListener.remove();
    }
    addfavorie = () => {

        const { navigation } = this.props
        const { token } = this.props;
        console.log("test" + token)
        var bearer_token = token;
        var bearer = 'Bearer ' + bearer_token;
        let data = JSON.stringify({
        })
        axios.post('https://cookathomeapp.herokuapp.com/api/favorie-add/' + navigation.getParam('id', '[MISSING_ID]'), data, {
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },
        })
            .then(function (response) {
                console.log(response);
            })
            .then(response => navigation.navigate('Home'))
            .catch(function (error) {

                console.log(error);
            });
        navigation.navigate('Home')

    }
    deletefavorie = () => {

        const { navigation } = this.props
        const { token } = this.props;
        var bearer_token = token;
        var bearer = 'Bearer ' + bearer_token;
        let data = JSON.stringify({
        })
        axios.post('https://cookathomeapp.herokuapp.com/api/favorie-delete/' + navigation.getParam('id', '[MISSING_ID]'), data, {
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },


        })
            .then(function (response) {

                console.log(response);

            })
            .then(response => navigation.navigate('Home'))
            .catch(function (error) {

                console.log(error);
            });



    }
    addcomment = () => {

        const { comment } = this.state
        if (comment == "") {
            alert('Error: Vous devez écrire un commentaire');
        }
        const { token, navigation } = this.props;
        var bearer_token = token;
        var bearer = 'Bearer ' + bearer_token;
        let data = JSON.stringify({
            content: comment,
            recette_id: navigation.getParam('id', '[MISSING_ID]'),

        })
        axios.post('https://cookathomeapp.herokuapp.com/api/commentaire-add', data, {
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            },


        })
            .then(function (response) {

                console.log(response);

            })
            .then(response => this.setModalVisible(!this.state.modalVisible))
            .catch(function (error) {

                console.log(error);
            });


    }
    onPressGoToBack = () => {

        const { navigation } = this.props
        navigation.navigate('Home')
    }
    render() {

        const { navigation, favoriebyrecetteid, commentaire } = this.props

        this.favorieRecette = favoriebyrecetteid

        const user = navigation.getParam('user', {})

        return (
            <LinearGradient colors={['#507E96', '#F7F8F8']} style={{ flex: 1 }} >

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View>
                        <LinearGradient colors={['#507E96', '#F7F8F8']}  >
                            <ScrollView >
                                <View style={{ height: 800 }}>
                                    <ImageBackground style={styles.imgBackground}
                                        resizeMode='cover'
                                        source={require('../data/image/imagefond.png')}>

                                        <TouchableOpacity
                                            onPress={() => {

                                                this.setModalVisible(!this.state.modalVisible);
                                                //this.state.tache = '';
                                            }}>
                                            <View style={styles.buttonGoToBack}>
                                                <GoBack style={[styles.textGoToBack]} size={25} />
                                            </View>
                                        </TouchableOpacity>



                                        <View style={styles.structGlobalModal}>
                                            <Image
                                                style={styles.LogoCookAtHome}
                                                source={require('../data/image/logocookathome.png')}
                                            />

                                            <InputAdd
                                                ref={ref => { this.refcomment = ref }}
                                                onChangeText={this.onChangeComment}
                                                placeholder={"Votre commentaire"}
                                                multiline={true}
                                                numberOfLines={4}
                                                style={styles.textInputAddRecipe} />
                                            <LinearGradient colors={['#4F147B', '#704C8B']} style={styles.addRecette}>
                                                <TouchableOpacity
                                                    onPress={this.addcomment}>
                                                    <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 9, color: 'white', fontFamily: "Calibri" }}>Envoyer</Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                            <Text style={styles.titre}>Voir les autres commentaire : </Text>

                                            <RecetteCommentaire commentaire={commentaire} />


                                        </View>

                                    </ImageBackground>


                                </View>
                            </ScrollView>
                        </LinearGradient>
                    </View>
                </Modal>

                <ImageBackground style={styles.imgrecetteBackground}
                    resizeMode='cover'
                    source={photos[navigation.getParam('photo', '[MISSING_PHOTO]')]}
                >

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', }}>

                        <TouchableOpacity style={styles.buttonGoToBack} onPress={this.onPressGoToBack}>
                            <GoBack style={[styles.textGoToBack]} size={25} />
                        </TouchableOpacity>
                        <View style={styles.favorieid}>
                            {this.favorieRecette ?

                                <TouchableOpacity style={styles.filtretype} onPress={this.deletefavorie}>
                                    <StartNoEmpty style={styles.start} size={80} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.filtretype} onPress={this.addfavorie}>
                                    <StartEmpty style={styles.start} size={80} />
                                </TouchableOpacity>}
                        </View>
                    </View>
                    <View style={styles.usertitlerecette}>
                        <Text style={styles.titlerecette}>{navigation.getParam('title', '[MISSING_INGREDIENT]')}</Text>

                    </View>
                    <View style={styles.usertitlerecette}>
                        <LinearGradient style={styles.usernamerecette} colors={['#DEDEDE', '#EFEFEF', '#FFFFFF']}  >
                            <Text>Crée par {user.name}</Text>
                        </LinearGradient>
                    </View>
                    <TouchableOpacity style={styles.buttonGoToModal}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>


                        <CommentaireModal style={styles.textGoToBack} size={25} />
                    </TouchableOpacity>




                </ImageBackground>



                <ScrollView >
                    <View >

                        <LinearGradient colors={['white', 'white']} style={styles.detailingredients}>

                            <Text style={styles.textPolice, styles.textinfoingredients}>Ingredients</Text>

                        </LinearGradient>

                        <View style={styles.structIngredient}>
                            <Text>{navigation.getParam('ingredient1', '[MISSING_INGREDIENT]')}</Text>
                            <Text>{navigation.getParam('ingredient2', '[MISSING_INGREDIENT]')}</Text>
                            <Text>{navigation.getParam('ingredient3', '[MISSING_INGREDIENT]')}</Text>
                            <Text>{navigation.getParam('ingredient4', '[MISSING_INGREDIENT]')}</Text>
                            <Text>{navigation.getParam('ingredient5', '[MISSING_INGREDIENT]')}</Text>
                            <Text>{navigation.getParam('ingredient6', '[MISSING_INGREDIENT]')}</Text>
                        </View>

                        <LinearGradient colors={['white', 'white']} style={styles.detailingredients}>

                            <Text style={styles.textPolice, styles.textinfoingredients}>Préparations</Text>

                        </LinearGradient>

                        <View style={styles.structIngredient}>
                            <Text>Etape 1</Text>
                            <Text style={styles.etapeespace}>
                                {navigation.getParam('preparation1', '[MISSING_INGREDIENT]')}

                            </Text>
                            <Text>Etape 2</Text>
                            <Text style={styles.etapeespace}>
                                {navigation.getParam('preparation2', '[MISSING_INGREDIENT]')}

                            </Text>
                            <Text>Etape 3</Text>
                            <Text style={styles.etapeespace}>
                                {navigation.getParam('preparation3', '[MISSING_INGREDIENT]')}

                            </Text>
                            <Text>Etape 4</Text>
                            <Text style={styles.etapeespace}>
                                {navigation.getParam('preparation4', '[MISSING_INGREDIENT]')}

                            </Text>
                            <Text>Etape 5</Text>
                            <Text style={styles.etapeespace}>
                                {navigation.getParam('preparation5', '[MISSING_INGREDIENT]')}

                            </Text>

                        </View>

                        <LinearGradient colors={['white', 'white']} style={styles.detailingredients}>

                            <Text style={styles.textPolice, styles.textinfoingredients}>Matériels</Text>

                        </LinearGradient>

                        <View style={styles.structIngredient}>

                            <Text style={styles.etapeespace}>
                                {navigation.getParam('materiel', '[MISSING_MATERIEL]')}

                            </Text>


                        </View>


                    </View>

                </ScrollView>

            </LinearGradient >


        );
    }


}
const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
    token: state.user.token,
    commentaire: state.recettebycommentaire.commentaire,
    favoriebyrecetteid: state.favoriebyrecette.favoriebyrecetteid,
});

const mapDispatchToProps = dispatch => ({
    setFavoriebyrecette: results => dispatch(Actions.setFavoriebyrecette(results)),
    setRecetteCommentaire: results => dispatch(Actions.setRecetteCommentaire(results)),
    loading: (isLoading) => dispatch(Actions.loading(isLoading)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RecetteDetailContainer);