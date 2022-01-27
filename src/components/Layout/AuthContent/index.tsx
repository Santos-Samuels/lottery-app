import { View } from "./style"

const AuthContent: React.FC = (props) => {
  return (
    <View>
      {props.children}
    </View>
  )
}

export default AuthContent