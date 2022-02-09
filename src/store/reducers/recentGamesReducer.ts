import { CLEAR_FILTERS, RecentGamesActionTypes, RecentGamesState, REQUEST_RECENT_GAMES, UPDATE_FILTERS } from "@store/types/recentGamesType"

const initialState: RecentGamesState = {recentGames: [], filters: []}

export const recentGamesReducer = (state = initialState, action: RecentGamesActionTypes) => {
  if (action.type === REQUEST_RECENT_GAMES)
    return action.payload
  
  if (action.type === UPDATE_FILTERS)
    return action.payload
  
  if (action.type === CLEAR_FILTERS)
    return action.payload
  
  return state
}