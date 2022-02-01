import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import AuthStack, { AuthStackParamList } from "@stacks/AuthStack";
import MainStack, { MainStackParamList } from "./MainStack";
import { getToken } from '@shared/utils';
import { useEffect, useState } from 'react';
import { Loading } from '@components/index';
import { requestLotteryRules } from '@store/actions/rulesActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { RuleState } from '@store/types/rulesTypes';

export type AuthScreenProp = NativeStackNavigationProp<AuthStackParamList, 'LogInScreen'>;
export type MainScreenProp = NativeStackNavigationProp<MainStackParamList, 'HomeScreen'>;

export type RootStackParamList = {
  Auth: AuthScreenProp;
  Main: MainScreenProp;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  const [token, setToken] = useState('')
  const dispatch = useDispatch()
  const rules = useSelector((states: RootState) => states.rules as RuleState)

  const getTokenHandler = async () => {
    const response = await getToken()
    
    if (response)
      setToken(response)
  }

  useEffect(() => {
    getTokenHandler()
    
    if (!rules)
      requestLotteryRules(dispatch)

    console.log(rules)
  }, [rules])
  
  if (!rules)
    return <Loading />
  
  if (!token) {
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
