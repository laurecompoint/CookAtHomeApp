import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  structGlobal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
  },
  structProfil: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: 20,
  },
  containerConnect: {
    padding: 10,
    backgroundColor: '#507E96',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  connect: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    margin: 'auto',
    textAlignVertical: 'center',
  },
  containerLogo: {
    marginTop: 50,
    marginBottom: 40,
  },
  logo: {
    width: 50,
    height: 50,
  },
  titre: {
    fontSize: 25,
    color: 'black',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
  },
  titres: {
    fontSize: 30,
    fontWeight: '300',
    marginLeft: 10,
    color: 'black',

  },
  titresExp: {
    fontSize: 25,
    fontWeight: '300',
    marginLeft: 10,
    color: 'black',
  },
  textSavoirPlus: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
  },
  textP: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  textSoulign: {
    textDecorationLine: 'underline',
  },
  iconclose: {
    margin: 5,
    color: Colors.white,
  },
  textVoirPlus: {
    position: 'absolute',
    top: 10,
    right: 20,
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: Colors.black,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  buttonconnexion: {

    width: 207,
    height: 40,
    borderRadius: 20,
    marginTop: 50,



  },

  textInput: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    borderRadius: 22,
    width: 309,
    paddingLeft: 20,
  },
  LogoCookAtHome: {
    width: 199,
    height: 132,

  },
  textGoToInscription: {
    width: 230,
    marginTop: 80,
    textAlign: 'center',

  },
  showPassword: {
    backgroundColor: 'red',
    left: 0,
    right: 0,
    top: 50,
    bottom: 0,
    position: 'absolute'
  },

  textShowPassword: {
    color: '#B6B6B6',

  },
  textPolice: {
    fontFamily: "Calibri",
  },
  containerHome: {
    width: 350,
    height: 332,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  },
  texttitle: {
    fontFamily: "Calibri",
    marginTop: 10,
    fontWeight: 'bold',
  },
  textboutton: {
    textAlign: 'center',
    marginTop: 12,
    color: 'white',
  },
  textinfo: {
    textAlign: 'center',
    marginTop: 10,
  },
  boutonlogout: {
    width: 130,
    height: 45,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    marginLeft: 30,
  },
  infoprofil: {
    width: 130,
    height: 40,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    marginRight: 300,
    marginTop: 15,
  },
  //page profil
  viewRowInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,

  },
  AvatarCookAtHome: {
    width: 99,
    height: 102,
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 30,
  },
  boutonmodif: {
    width: 110,
    height: 40,
    borderRadius: 20,
    marginTop: 15,

  },
  boutontext: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    color: 'white',
    fontFamily: "Calibri"
  },
  //page favorie recette
  cardFav: {
    margin: 10,
    flex: 1,
    width: 327,

    flexDirection: 'column',
  },
  marginfav: {
    marginTop: 15,
  },
  imageExp: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 327,
    height: 230,

  },
  titlerecipe: {
    fontFamily: "Calibri",
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
    height: 50,
    paddingTop: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },
  titlereciperechercher: {
    fontFamily: "Calibri",
    color: 'black',
    textAlign: 'left',

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardRecherche: {

    flex: 1 / 2,
    width: 400,

    flexDirection: 'row',
    justifyContent: 'center',

    flexWrap: 'wrap',

  },
  card: {
    margin: 10,
    width: 160,
    justifyContent: 'center',
    flexDirection: 'column',

  },
  imageRecherche: {
    width: 157,
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  bouttonfavorie: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    width: 100,

  },
  cuisson: {
    width: 60,
    paddingTop: 4,
    marginTop: 10,
    borderRadius: 15,
  },
  titlecuisson: {
    textAlign: 'center',
  },
  favorie: {
    width: 75,
    textAlign: 'right',
    paddingTop: 5,
    marginTop: 10,
  },

  viewRowrecette: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'white',
    height: 80,
    width: 157,
    textAlign: 'left',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  //detail de recette
  imgrecetteBackground: {
    width: 399,
    height: 332,
  },
  titlerecette: {
    flex: 1,
    textAlign: 'center',
    marginTop: 110,
    color: 'white',
    fontSize: 35,
    fontFamily: "Calibri",
  },
  detailingredients: {
    width: 180,
    height: 50,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    marginRight: 300,
    marginTop: 15,
  },
  textinfoingredients: {
    textAlign: 'center',
    marginTop: 15,
    marginRight: 15,
  },
  structIngredient: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
  },
  buttonGoToBack: {
    paddingLeft: 15,
    paddingTop: 10,
  },
  textGoToBack: {
    width: 20,
    color: 'white',
  },
  //inputrecherche
  textRechercheInput: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,

    color: 'black',
    fontSize: 14,

    width: 260,
    paddingLeft: 20,
  },
  structInputRecherche: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  structFiltre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 5,
  },
  bouttonSearch: {
    backgroundColor: 'white',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 11,

    height: 48.5,
    width: 65,
  },
  //card
  start: {
    color: '#FFB347',
    width: 15,
    height: 10,
    textAlign: 'left',
    paddingTop: 5,
    marginTop: 10,
    marginLeft: 45,

  },
  searchlogo: {
    textAlign: 'left',
    marginLeft: 25,
    marginTop: 3,

  },
  goback: {
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 20,
  },
  filtretype: {
    width: 60,
    height: 40,

  },


});
export default styles;
