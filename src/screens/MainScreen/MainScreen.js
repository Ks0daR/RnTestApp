import React from 'react';
import {View} from 'react-native';
import PhotoList from '../../components/PhotoList';

const MainScreen = ({navigation}) => {
  const goToImageScreen = () => {
    navigation.navigate('Image');
  };

  return (
    <View>
      <PhotoList toImageScreen={goToImageScreen} />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: 'Image Gallery',
};

export default MainScreen;
