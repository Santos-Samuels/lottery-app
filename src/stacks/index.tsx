import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import AuthStack, { AuthStackParamList } from "@stacks/AuthStack";
import MainStack, { MainStackParamList } from "./MainStack";

export type AuthScreenProp = NativeStackNavigationProp<AuthStackParamList, 'LogInScreen'>;
export type MainScreenProp = NativeStackNavigationProp<MainStackParamList, 'HomeScreen'>;

export type RootStackParamList = {
  Auth: AuthScreenProp;
  Main: MainScreenProp;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  const TOKEN = localStorage.getItem('TOKEN') === 'undefined' ? null : localStorage.getItem('TOKEN')

  if (!TOKEN) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  )
}
