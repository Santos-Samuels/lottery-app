import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogInScreen } from '@screens/index';

export type RootAuthStackParamList = {
  LogInScreen: undefined;
  SignUpScreen: undefined;
  ForgetPasswordScreen: undefined;
}

const Stack = createNativeStackNavigator<RootAuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack