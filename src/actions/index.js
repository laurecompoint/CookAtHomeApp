import { login as loginService } from "../services"
export const Types = {
  SET_LISTINGS: 'SET_LISTINGS',
  SET_FAVORIES: 'SET_FAVORIES',
  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
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
  filterRecettes: (criteria, sortCriteria) => ({
    type: Types.FILTER_RECETTES,
    payload: {
      criteria,
      sort: sortCriteria
    }
  }),
};
export function requestGetListings() {
  return (dispatch) => {
    dispatch(Actions.loading(true))
    //Récupération des données contenus dans l'URL
    return fetch('https://cookathomeapi.herokuapp.com/api/recettes') // requête vers l'API
      .then((response) => {
        // Si un code erreur a été détecté on déclenche une erreur
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(response => {
        // On cache le loading spinner à la fin de la requête
        dispatch(Actions.loading(false))
        dispatch(Actions.setListings(response))
      })
      .catch((err) => {
        console.log('An error occured', err)
        // En cas d'erreur on cache le loading spinner également
        dispatch(Actions.loading(false))
      })
  }
}
export function requestGetRecetteFavories() {
  return (dispatch) => {
    dispatch(Actions.loading(true))
    //Récupération des données contenus dans l'URL
    return fetch('https://cookathomeapi.herokuapp.com/api/recettes') // requête vers l'API
      .then((response) => {
        // Si un code erreur a été détecté on déclenche une erreur
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(response => {
        // On cache le loading spinner à la fin de la requête
        dispatch(Actions.loading(false))
        dispatch(Actions.setFavories(response))
      })
      .catch((err) => {
        console.log('An error occured', err)
        // En cas d'erreur on cache le loading spinner également
        dispatch(Actions.loading(false))
      })
  }
}
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