import { REQUEST_LOTTERY_RULES, RulesActionTypes, RuleState, UPDATE_CURRENT_GAME_ID } from "@store/types/rulesTypes";

const initialState: RuleState = null

export const rulesReducer = (state = initialState, action: RulesActionTypes) => {
  if (action.type === REQUEST_LOTTERY_RULES)
    return action.payload

  if (action.type === UPDATE_CURRENT_GAME_ID)
    return action.payload

  return state
}