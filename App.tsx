import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@stacks/index';
import { StackTheme } from '@shared/globalStyles/DefaultTheme';
import { Provider } from 'react-redux';
import { store } from '@store/index';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={StackTheme}>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
