import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CategoryCard from '../../components/organisms/Home/CategoryCard';
import useTheme from '../../hooks/useTheme';
import {getList} from '../../services/category';

const Home = () => {
  const {isDarkMode, backgroundStyle} = useTheme();
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

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={{
          ...styles.container,
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {categories.map((category, i) => (
          <CategoryCard key={i} index={i} title={category} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 6,
    margin: 5,
  },
});

export default Home;
