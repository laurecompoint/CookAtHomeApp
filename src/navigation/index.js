
import Login from '../screens/Login';
import Register from '../screens/Register';
import TutoCookContainer from '../screens/TutoCookContainer';
import RechercheDetailContainer from '../screens/RecetteDetailContainer';
import AuthLoadingScreen from '../screens/AuthLoading';
import LoggedInTabNavigator from '../navigation/LoggedInTabNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// createStackNavigator() crée l'arbre de navigation
// Le premier écran déclaré est l'écran de démarrage par défaut de l'application (ici LoginScreen)
const AuthNavigator = createStackNavigator({
  TutoCookContainer: { screen: TutoCookContainer },
  Login: { screen: Login },
  Register: { screen: Register }
})
const MainStackNavigator = createSwitchNavigator(
  {
    AuthLoading: { screen: AuthLoadingScreen },
    Auth: AuthNavigator,
    ExploreContainer: { screen: LoggedInTabNavigator },

    RecetteDetailContainer: { screen: RechercheDetailContainer },

  },
  {
    headerMode: 'screen', // Ce paramètre spécifie qu'on va définir des "header" (en-tête) pour chaque écran
    // grâce à la variable "navigationOptions"

  },
);
const App = createAppContainer(MainStackNavigator);
export default App;
