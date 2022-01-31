import { ListGames } from "@shared/services";
import { Dispatch } from "redux";
import { RulesActionTypes, REQUEST_LOTTERY_RULES } from "@store/types/rulesTypes";

export const requestLotteryRules = async (dispatch: Dispatch<RulesActionTypes>) => {
  const response = await ListGames()

  if (typeof response !== 'boolean') {
    dispatch({ type: REQUEST_LOTTERY_RULES, payload: response })
    return true
  }
  
  return false
}