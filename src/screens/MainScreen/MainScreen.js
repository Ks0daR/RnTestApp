import React from 'react';
import {View} from 'react-native';
import PhotoList from '../../components/PhotoList';

const MainScreen = ({navigation}) => {
  const goToImageScreen = (target, params) => {
    navigation.navigate(target, params);
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
