import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavorieRecetteContainer from '../screens/FavorieRecetteContainer';
import HomeContainer from '../screens/HomeContainer';
import RecettePlusContainer from '../screens/RecettePlusContainer';
import ProfileContainer from '../screens/ProfileContainer';
import RecettefavorieIcon from '../data/image/recettefavorie.svg';
import HomeIcon from '../data/image/home.svg';
import RecettePlusIcon from '../data/image/recetteplus.svg';
import ProfilIcon from '../data/image/profil.svg';
import { StyleSheet, View, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import { NavigationEvents } from 'react-navigation';
import Recherche from '../screens/RechercheContainer';


export default createBottomTabNavigator(
  {

    Explore: {
      screen: FavorieRecetteContainer,
      navigationOptions: {

        tabBarIcon: ({ tintColor }) => <RecettefavorieIcon color={tintColor} size={25} />

      },
    },
    Home: {
      screen: HomeContainer,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <HomeIcon color={tintColor} size={25} />
      },
    },

    Trips: {
      screen: RecettePlusContainer,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <RecettePlusIcon color={tintColor} size={25} />
      },
    },

    Profile: {
      screen: ProfileContainer,
      navigationOptions: {

        tabBarIcon: ({ tintColor }) => <ProfilIcon color={tintColor} size={25} />
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: false,

      activeTintColor: '#507E96',
      tabStyle: {
        backgroundColor: '#F7F8F8',

      },
    },





  },
);
