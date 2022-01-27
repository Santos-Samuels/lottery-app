import { View, Text } from "react-native"
import { AuthContainer, AuthContent } from '@components/index';

const LogInScreen: React.FC = () => {
  return (
    <AuthContainer>
      <AuthContent>
        <Text> LogInScreen </Text>
      </AuthContent>
    </AuthContainer>
  )
}

export default LogInScreen