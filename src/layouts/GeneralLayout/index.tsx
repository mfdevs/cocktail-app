import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useTheme from '../../hooks/useTheme';

interface GeneralLayoutProps {
  children: JSX.Element;
}
const GeneralLayout = ({children}: GeneralLayoutProps) => {
  const {isDarkMode, backgroundStyle} = useTheme();
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};

export default GeneralLayout;
