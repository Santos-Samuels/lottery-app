import { REQUEST_LOTTERY_RULES, RulesActionTypes, RuleState } from "@store/types/rulesTypes";

const initialState: RuleState = null

export const rulesReducer = (state = initialState, action: RulesActionTypes) => {
  if (action.type === REQUEST_LOTTERY_RULES)
    return action.payload

  return state
}