import { View } from "./style"

const AuthContainer: React.FC = (props) => {
  return (
    <View>
      {props.children}
    </View>
  )
}

export default AuthContainer