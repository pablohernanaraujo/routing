import React from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';

import RootStack from './src/root-stack';
import {RoutesProvider} from './src/context/routing';

const App = () => {
  return (
    <RoutesProvider>
      <RootStack />
    </RoutesProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
  },
});
export default App;
