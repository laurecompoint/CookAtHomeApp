import { combineReducers } from 'redux';
import favories from "./recipefavories"
import usercreatedbyuser from "./recipebyuser"
import recipe from "./recipe"
import app from "./app"
import user from "./user"
import favoriebyrecette from "./favoriebyrecette"
import userprofil from "./userprofil"
import recettebycommentaire from "./recipebycommentaire"


export default combineReducers({
  favories,
  usercreatedbyuser,
  recipe,
  app,
  recettebycommentaire,
  favoriebyrecette,
  user,
  userprofil,

});
