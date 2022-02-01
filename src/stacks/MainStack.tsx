import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserScreen, HomeScreen, NewBetScreen, CartScreen } from "@screens/index";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "@shared/globalStyles/colors";

export type MainStackParamList = {
  HomeScreen: undefined;
  NewBetScreen: undefined;
  UserScreen: undefined;
  CartScreen: undefined;
};

const Tab = createBottomTabNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  const teste = true
  return (
    // tabBarBadge: 3
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
      }}
      initialRouteName="HomeScreen"
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="home"
              size={21}
              color={focused ? colors.primary : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewBetScreen"
        component={NewBetScreen}
        options={{
          title: "New bet",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="dice"
              size={21}
              color={focused ? colors.primary : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="shopping-cart"
              size={21}
              color={focused ? colors.primary : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="user-alt"
              size={21}
              color={focused ? colors.primary : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
