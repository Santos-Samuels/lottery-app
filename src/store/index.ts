import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { betReducer } from "./reducers/betReducer";
import { cartReducer } from "./reducers/cartReducer";
import { recentGamesReducer } from "./reducers/recentGamesReducer";
import { rulesReducer } from "./reducers/rulesReducer";

const reducers = combineReducers({
  auth: authReducer,
  rules: rulesReducer,
  recentGames: recentGamesReducer,
  bet: betReducer,
  cart: cartReducer
})

const store = createStore(reducers)
export type RootState = ReturnType<typeof reducers>

export {
  authReducer,
  rulesReducer,
  recentGamesReducer,
  betReducer,
  cartReducer,
  store
}