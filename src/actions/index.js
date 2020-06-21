import { login as loginService } from "../services"
import { register as registerService } from "../services"

export const Types = {
  SET_RECETTES: 'SET_RECETTES',
  SET_FAVORIES: 'SET_FAVORIES',
  SET_RECETTEUSER: 'SET_RECETTEUSER',
  SET_COMMENTAIRE: 'SET_COMMENTAIRE',
  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
  USERPROFIL: 'USERPROFIL',
  REGISTER: 'REGISTER',
  FILTER_RECETTES: 'FILTER_RECETTES',
  SET_FAVORIEBYRECETTE: 'SET_FAVORIEBYRECETTE'
};

export const Actions = {
  setRecettes: results => ({
    type: Types.SET_RECETTES,
    payload: results,
  }),
  setFavories: resultsfav => ({
    type: Types.SET_FAVORIES,
    payload: resultsfav,
  }),
  setFavoriebyrecette: resultsbyrecette => ({
    type: Types.SET_FAVORIEBYRECETTE,
    payload: resultsbyrecette,
  }),
  setRecetteUser: resultsuser => ({
    type: Types.SET_RECETTEUSER,
    payload: resultsuser,
  }),
  setRecetteCommentaire: resultscommentaire => ({
    type: Types.SET_COMMENTAIRE,
    payload: resultscommentaire,
  }),
  setUserProfil: resultsprofil => ({
    type: Types.USERPROFIL,
    payload: resultsprofil,
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
  register: (name, email, token) => ({
    type: Types.REGISTER,
    payload: {
      name,
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
        dispatch(Actions.login(response.user.email, response.authorization, response.user.name))
      })
      .catch((err) => {
        dispatch(Actions.loading(false))
        throw err
      })
  }
}
export function requestRegister(name, email, password) {
  return function (dispatch) {
    dispatch(Actions.loading(true))
    return registerService(name, email, password)
      .then((response) => {
        // On cache le loader
        dispatch(Actions.loading(false))

        // On sauvegarde du token dans le local storage
        dispatch(Actions.register(response.user.email, response.user.name, response.authorization,))
      })
      .catch((err) => {
        dispatch(Actions.loading(false))
        throw err
      })
  }
}

