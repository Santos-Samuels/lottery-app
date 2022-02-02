import { RecentGamesActionTypes, RecentGamesState, REQUEST_RECENT_GAMES, UPDATE_FILTERS } from "@store/types/recentGamesType"

const initialState: RecentGamesState = null

export const recentGamesReducer = (state = initialState, action: RecentGamesActionTypes) => {
  if (action.type === REQUEST_RECENT_GAMES)
    return action.payload

  return state
}