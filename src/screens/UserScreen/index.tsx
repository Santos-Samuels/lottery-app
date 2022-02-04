import { AppContainer, Title } from "@components/index"
import { StyledViewRow, StyledText, StyledTouchableOpacity } from './styled'
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from "@shared/globalStyles/colors";
import { useDispatch } from "react-redux";
import { logout } from "@store/actions/authActions";

const UserScreen: React.FC = () => {
  const dispatch = useDispatch()

  const logoutHandler = async () => {
    await logout(dispatch)
  }

  return (
    <AppContainer isScrollable={false} >
      <StyledViewRow>
        <Title size="md"> Your account </Title>

        <StyledTouchableOpacity onPress={logoutHandler}>
          <StyledText color={colors.error}>Out</StyledText>
          <MaterialIcons name="logout" size={24} color={colors.error} />
        </StyledTouchableOpacity>
      </StyledViewRow>
    </AppContainer>
  )
}

export default UserScreen