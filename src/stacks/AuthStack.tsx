import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ResetPasswordScreen, LogInScreen, SignUpScreen } from '@screens/index';

export type RootAuthStackParamList = {
  LogInScreen: undefined;
  SignUpScreen: undefined;
  ResetPasswordScreen: undefined;
}

const Stack = createNativeStackNavigator<RootAuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LogInScreen">
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack