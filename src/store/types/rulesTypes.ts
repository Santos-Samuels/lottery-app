import { IGameRole, ILotteryRoles } from "@shared/interfaces"

export const REQUEST_LOTTERY_RULES = 'REQUEST_RULES'
export const UPDATE_CURRENT_GAME_ID = 'UPDATE_CURRENT_GAME_ID'

export type RuleState = {
  lotteryRules: ILotteryRoles;
  currentGameId: number;
  currentGameRule: IGameRole;
} | null

type RequestLotteryRules = {
  type: typeof REQUEST_LOTTERY_RULES;
  payload: RuleState
}

type UpdateCurrentGameRules = {
  type: typeof UPDATE_CURRENT_GAME_ID
  payload: RuleState
}

export type RulesActionTypes = RequestLotteryRules | UpdateCurrentGameRules