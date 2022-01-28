import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserScreen, HomeScreen, NewBetScreen } from '@screens/index';

export type MainStackParamList = {
  HomeScreen: undefined;
  NewBetScreen: undefined;
  UserScreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewBetScreen" component={NewBetScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );
}

export default MainStack