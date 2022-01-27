import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@stacks/AuthStack';
import { StackTheme } from '@shared/GlobalStyles/DefaultTheme';

export default function App() {
  return (
    <NavigationContainer theme={StackTheme}>
      <AuthStack />
    </NavigationContainer>
  );
}
