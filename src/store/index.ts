import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { recentGamesReducer } from "./reducers/recentGamesReducer";
import { rulesReducer } from "./reducers/rulesReducer";

const reducers = combineReducers({
  auth: authReducer,
  rules: rulesReducer,
  recentGames: recentGamesReducer
})

const store = createStore(reducers)
export type RootState = ReturnType<typeof reducers>

export {
  authReducer,
  rulesReducer,
  recentGamesReducer,
  store
}