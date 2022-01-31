import { IGameRole, ILotteryRoles } from "@shared/interfaces"

export const REQUEST_LOTTERY_RULES = 'REQUEST_RULES'
export const UPDATE_CURRENT_GAME_RULES = 'UPDATE_CURRENT_GAME_RULES'

export type RuleState = {
  lotteryRules: ILotteryRoles;
  currentGameRules: IGameRole;
} | null

type RequestLotteryRules = {
  type: typeof REQUEST_LOTTERY_RULES;
  payload: ILotteryRoles
}

type UpdateCurrentGameRules = {
  type: typeof UPDATE_CURRENT_GAME_RULES
  payload: IGameRole
}

export type RulesActionTypes = RequestLotteryRules | UpdateCurrentGameRules