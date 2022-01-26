import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@stacks/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
