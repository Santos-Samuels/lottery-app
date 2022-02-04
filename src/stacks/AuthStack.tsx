import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ResetPasswordScreen, LogInScreen, SignUpScreen, ChangePasswordScreen } from '@screens/index';

export type AuthStackParamList = {
  LogInScreen: undefined;
  SignUpScreen: undefined;
  ResetPasswordScreen: undefined;
  ChangePasswordScreen: {token: string};
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LogInScreen">
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack