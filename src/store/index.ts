import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { rulesReducer } from "./reducers/rulesReducer";

const reducers = combineReducers({
  auth: authReducer,
  rules: rulesReducer
})

const store = createStore(reducers)
export type RootState = ReturnType<typeof reducers>

export {
  authReducer,
  rulesReducer,
  store
}