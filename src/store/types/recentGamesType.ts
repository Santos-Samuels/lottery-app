import { IBet } from "@shared/interfaces"

export const REQUEST_RECENT_GAMES = 'REQUEST_RECENT_GAMES'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'

export type RecentGamesState = { 
  recentGames: IBet[];
  filters: string[]
}

type RequestRecentGames = {
  type: typeof REQUEST_RECENT_GAMES;
  payload: RecentGamesState
}

type UpdateFilters = {
  type: typeof UPDATE_FILTERS;
  payload: RecentGamesState
}

type ClearFilters = {
  type: typeof CLEAR_FILTERS;
  payload: RecentGamesState
}

export type RecentGamesActionTypes = RequestRecentGames | UpdateFilters | ClearFilters