import { login as loginService } from "../services"
export const Types = {

  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
};
export const Actions = {

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
  })
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