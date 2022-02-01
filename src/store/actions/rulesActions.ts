import { ListGames } from "@shared/services";
import { Dispatch } from "redux";
import { RulesActionTypes, REQUEST_LOTTERY_RULES, UPDATE_CURRENT_GAME_ID } from "@store/types/rulesTypes";
import { ILotteryRoles } from "@shared/interfaces";

export const requestLotteryRules = async (dispatch: Dispatch<RulesActionTypes>) => {
  const response = await ListGames()

  if (typeof response !== 'boolean') {
    dispatch({ type: REQUEST_LOTTERY_RULES, payload: { lotteryRules: response, currentGameId: response.types[0].id, currentGameRule: response.types[0] } })
    return true
  }
  
  return false
}

export const updateCurrentGameId = (dispatch: Dispatch<RulesActionTypes>, lotteryRules: ILotteryRoles, newId: number) => {
  dispatch({ type: UPDATE_CURRENT_GAME_ID, payload: { lotteryRules: lotteryRules, currentGameId: newId, currentGameRule: lotteryRules.types.find(rule => rule.id === newId)! } })
}