import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import SignUp from './src/screens/SignUp/Container';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SignUp />
      </SafeAreaProvider>
    </Provider>
  );
}
