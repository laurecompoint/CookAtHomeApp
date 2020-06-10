import { login as loginService } from "../services"
import { register as registerService } from "../services"
import { favorie as recetteService } from "../services"
import { AsyncStorage } from 'react-native';
import user from "../reducers/user"
export const Types = {
  SET_LISTINGS: 'SET_LISTINGS',
  SET_FAVORIES: 'SET_FAVORIES',
  SET_RECETTEUSER: 'SET_RECETTEUSER',
  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  FILTER_RECETTES: 'FILTER_RECETTES'
};

export const Actions = {
  setListings: results => ({
    type: Types.SET_LISTINGS,
    payload: results,
  }),
  setFavories: resultsfav => ({
    type: Types.SET_FAVORIES,
    payload: resultsfav,
  }),
  setRecetteUser: resultsuser => ({
    type: Types.SET_RECETTEUSER,
    payload: resultsuser,
  }),

  loading: (isLoading) => ({
    type: Types.LOADING,
    payload: {
      isLoading
    }
  }),
  logout: () => ({
    type: Types.LOGOUT
  }),
  login: (email, token) => ({
    type: Types.LOGIN,
    payload: {
      email,
      token
    }
  }),
  register: (email, token) => ({
    type: Types.REGISTER,
    payload: {
      email,
      token
    }
  }),
  filterRecettes: (criteria, sortCriteria) => ({
    type: Types.FILTER_RECETTES,
    payload: {
      criteria,
      sort: sortCriteria
    }
  }),
};
export function requestLogin(email, password) {
  return function (dispatch) {
    dispatch(Actions.loading(true))
    return loginService(email, password)
      .then((response) => {
        // On cache le loader
        dispatch(Actions.loading(false))

        // On sauvegarde du token dans le local storage
        dispatch(Actions.login(response.user.email, response.authorization))
      })
      .catch((err) => {
        dispatch(Actions.loading(false))
        throw err
      })
  }
}
export function requestRegister(email, password, name) {
  return function (dispatch) {
    dispatch(Actions.loading(true))
    return registerService(email, password, name)
      .then((response) => {
        // On cache le loader
        dispatch(Actions.loading(false))

        // On sauvegarde du token dans le local storage
        dispatch(Actions.register(response.user.email, response.authorization))
      })
      .catch((err) => {
        dispatch(Actions.loading(false))
        throw err
      })
  }
}

