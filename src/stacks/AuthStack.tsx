import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogInScreen, SignUpScreen } from '@screens/index';

export type RootAuthStackParamList = {
  LogInScreen: undefined;
  SignUpScreen: undefined;
  ForgetPasswordScreen: undefined;
}

const Stack = createNativeStackNavigator<RootAuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignUpScreen">
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack