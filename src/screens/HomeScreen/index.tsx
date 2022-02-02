import { AppContainer, GameTypeButtonList, Title, RecentGamesList, Loading } from "@components/index"
import { IRequestStatus } from "@shared/interfaces"
import { RootState } from "@store/index"
import { requestRecentGames } from "@store/actions/recentGamesActions"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StyledView, StyledText } from './styled'
import { RecentGamesState } from "@store/types/recentGamesType"

const InitialRequestStatus: IRequestStatus = { loading: true, success: false, error: '' };

const ForgetPasswordScreen: React.FC = () => {
  const [requestStatus, setRequestStatus] = useState<IRequestStatus>(InitialRequestStatus);
  const dispatch = useDispatch()
  const recentGamesState = useSelector((states: RootState) => states.recentGames as RecentGamesState)
  
  const updateRecentGames = async () => {
    const response = await requestRecentGames(dispatch, recentGamesState.filters)
    if (typeof response !== 'boolean') {
      setRequestStatus(prev => {return {...prev, loading: false, success: true}})
    }
    setRequestStatus(prev => {return {...prev, loading: false, error: 'recent games request get an error'}})
  }

  useEffect(() => {
    if (requestStatus.loading)
      updateRecentGames()
  }, [])

  if (requestStatus.loading) return <Loading />
  console.log('asd',recentGamesState.filters)

  return (
    <AppContainer>
      <Title size="md" uppercase={true} >Recent games</Title>
      
      <StyledView>
        <StyledText>Filters</StyledText>
        <GameTypeButtonList isToggleable={false} />
      </StyledView>

      <RecentGamesList />
    </AppContainer>
  )
}

export default ForgetPasswordScreen