import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogInScreen } from '@screens/index';

export type RootAuthStackParamList = {
  LogInScreen: undefined;
  SignUpScreen: undefined;
  ForgetPasswordScreen: undefined;
}

const Stack = createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack