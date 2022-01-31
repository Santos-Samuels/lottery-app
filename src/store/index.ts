import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/authReducer";

const reducers = combineReducers({
  auth: authReducer
})

const store = createStore(reducers)
export type RootState = ReturnType<typeof reducers>

export {
  authReducer,
  store
}