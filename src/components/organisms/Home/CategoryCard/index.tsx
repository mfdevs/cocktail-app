import React, {PropsWithChildren} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type CategoryCardProps = PropsWithChildren<{
  title: string;
  index: number;
}>;

const CategoryCard = ({title, index}: CategoryCardProps): JSX.Element => {
  const getSource = () =>
    index % 2 === 0
      ? require('../../../../assets/category.jpg')
      : require('../../../../assets/category1.jpg');

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

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    height: 100,
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
});

export default CategoryCard;
