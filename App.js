import React from 'react';
import { SSRProvider } from '@react-aria/ssr';
import { NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import StackNavigatior from './routes/routes';

const App = () => {
  return (
    <SSRProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <StackNavigatior />
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </SSRProvider>
  );
};

export default App;
