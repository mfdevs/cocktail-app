import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CategoryCard from '../../components/organisms/Home/CategoryCard';
import useTheme from '../../hooks/useTheme';
import {getList} from '../../services/category';
import GeneralLayout from '../../layouts/GeneralLayout';
import Loading from '../../components/organisms/Shared/Loading';

const Home = () => {
  const {isDarkMode, backgroundStyle} = useTheme();
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCategories = async () => {
    setLoading(true);
    try {
      const {
        data: {drinks},
      } = await getList();

      setCategories(drinks.map(d => d.strCategory));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <GeneralLayout>
      <>
        {loading && <Loading />}
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
      </>
    </GeneralLayout>
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
