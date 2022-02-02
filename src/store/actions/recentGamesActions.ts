import { IBet } from "@shared/interfaces"
import { ListBets } from "@shared/services"
import { formatFiltersToAPI } from "@shared/utils"
import { RecentGamesActionTypes, REQUEST_RECENT_GAMES, UPDATE_FILTERS } from "@store/types/recentGamesType"
import { Dispatch } from "redux"

export const requestRecentGames = async (dispatch: Dispatch<RecentGamesActionTypes>, filters: string[]) => {
  const formattedFilter = filters ? formatFiltersToAPI(filters) : ''
  const response = await ListBets(formattedFilter)

  if (typeof response !== 'boolean') {
    dispatch({ type: REQUEST_RECENT_GAMES, payload: { recentGames: response, filters: [] } })
    return response
  }
  
  return false
}

export const updateFilters = async (dispatch: Dispatch<RecentGamesActionTypes>, filters: string[], newFilter: string) => {
  let updatedFilters: string[] = []

  if (!filters.includes(newFilter))
    updatedFilters = [...filters, newFilter]
  else
    updatedFilters = filters.filter(filter => filter !== newFilter)

  const updatedRecentGames = await requestRecentGames(dispatch, updatedFilters)
  dispatch({ type: UPDATE_FILTERS, payload: {recentGames: updatedRecentGames as IBet[], filters: updatedFilters} })
}