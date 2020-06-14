import { combineReducers } from 'redux';
import favories from "./recipefavories"
import usercreatedbyuser from "./recipebyuser"
import listings from "./recipe"
import app from "./app"
import user from "./user"
import favoriebyrecette from "./favoriebyrecette"


export default combineReducers({
  favories,
  usercreatedbyuser,
  listings,
  app,
  favoriebyrecette,
  user,

});
