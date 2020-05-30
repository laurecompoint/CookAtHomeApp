import { combineReducers } from 'redux';
import favories from "./recipefavories"
import listings from "./recipe"
import app from "./app"
import user from "./user"

export default combineReducers({
  favories,
  listings,
  app,
  user
});
