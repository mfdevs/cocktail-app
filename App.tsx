import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {getList} from './src/services/category';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
  index: number;
}>;

const Section = ({title, index}: SectionProps): JSX.Element => {
  const getSource = () =>
    index % 2 === 0 ? require('./category.jpg') : require('./category1.jpg');

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => console.log(`${title} Pressed!`)}>
      <ImageBackground
        imageStyle={styles.image}
        source={getSource()}
        resizeMode="cover">
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = async () => {
    try {
      const {
        data: {drinks},
      } = await getList();

      setCategories(drinks.map(d => d.strCategory));
    } catch (error) {}
  };

  useEffect(() => {
    getCategories();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            ...styles.container,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {categories.map((category, i) => (
            <Section key={i} index={i} title={category} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const borderRed = {
//   borderWidth: 1,
//   borderColor: 'red',
// };

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    height: 100,
  },
  container: {
    display: 'flex',
    gap: 6,
    margin: 5,
  },
  sectionContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: 100,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.50)',
    padding: 15,
    // ...borderRed,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
