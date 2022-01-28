import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@stacks/index';
import { StackTheme } from '@shared/globalStyles/DefaultTheme';

export default function App() {
  return (
    <NavigationContainer theme={StackTheme}>
      <RootStack />
    </NavigationContainer>
  );
}
