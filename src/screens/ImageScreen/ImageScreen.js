import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';

const ImageScreen = ({ navigation}) => {
  const links = navigation.getParam('url');

  return (
    <ScrollView horizontal={true} style={styles.fullImgContainer}>
      <Image style={styles.fullImg} source={{uri: links.full}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullImgContainer: {flex: 1, },
  fullImg: {width: 700, },
});

export default ImageScreen;
