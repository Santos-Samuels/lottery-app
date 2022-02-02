import { AppContainer, GameTypeButtonList, Title, Text, EmpetyMessage } from "@components/index"
import { StyledView, StyledText } from './styled'

const ForgetPasswordScreen: React.FC = () => {
  return (
    <AppContainer>
      <Title size="md" uppercase={true} >Recent games</Title>
      
      <StyledView>
        <StyledText>Filters</StyledText>
        <GameTypeButtonList isToggleable={false} />
      </StyledView>

      <EmpetyMessage message="Empety recent games" />
    </AppContainer>
  )
}

export default ForgetPasswordScreen