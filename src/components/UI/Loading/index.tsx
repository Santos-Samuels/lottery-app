import { Container, StyledView, StyledText } from './style'
import { ActivityIndicator } from 'react-native'
import { colors } from '@shared/globalStyles/colors'

const Loading: React.FC = (props) => {
  return (
    <Container>
      <StyledView>
        <StyledText>
          TGL
        </StyledText>
      </StyledView>
        <ActivityIndicator size="large" color={colors.primary} />
    </Container>
  )
}

export default Loading