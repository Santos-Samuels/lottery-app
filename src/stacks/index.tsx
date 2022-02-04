import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import AuthStack, { AuthStackParamList } from "@stacks/AuthStack";
import MainStack, { MainStackParamList } from "./MainStack";
import { useEffect } from 'react';
import { Loading } from '@components/index';
import { requestLotteryRules } from '@store/actions/rulesActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { RuleState } from '@store/types/rulesTypes';
import { AuthState } from '@store/types/authTypes';

export type AuthScreenProp = NativeStackNavigationProp<AuthStackParamList, 'LogInScreen'>;
export type MainScreenProp = NativeStackNavigationProp<MainStackParamList, 'HomeScreen'>;

export type RootStackParamList = {
  Auth: AuthScreenProp;
  Main: MainScreenProp;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  const dispatch = useDispatch()
  const rules = useSelector((states: RootState) => states.rules as RuleState)
  const auth = useSelector((states: RootState) => states.auth as AuthState)

  console.log(auth)

  useEffect(() => {
    if (!rules)
      requestLotteryRules(dispatch)
  }, [])
  
  if (!rules)
    return <Loading />
  
  if (!auth.token) {
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

  // return (
  //   <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={auth?.token ? "Main" : "Auth"}>
  //     <Stack.Screen name="Auth" component={AuthStack} />
  //     {/* {auth?.token ? <Stack.Screen name="Main" component={MainStack} />: null} */}
  //   </Stack.Navigator>
  // )
  
}
