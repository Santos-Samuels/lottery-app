import { AppContainer, GameTypeButtonList } from "@components/index"
import { Text } from "react-native"

const ForgetPasswordScreen: React.FC = () => {
  return (
    <AppContainer>
      <GameTypeButtonList isToggleable={false} />
    </AppContainer>
  )
}

export default ForgetPasswordScreen