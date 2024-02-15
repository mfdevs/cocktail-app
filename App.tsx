import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import useTheme from './src/hooks/useTheme';
import Home from './src/screens/Home';

function App(): JSX.Element {
  const {isDarkMode, backgroundStyle} = useTheme();
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Home />
    </SafeAreaView>
  );
}

export default App;
