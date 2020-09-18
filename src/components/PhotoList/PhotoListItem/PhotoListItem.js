import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const PhotoListItem = ({url, name, toImageScreen}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={toImageScreen}>
      <View style={styles.cardImg}>
        <Image style={styles.miniImg} source={{uri: url.small}} />
        <Text style={styles.cardText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardImg: {
    paddingBottom: 50,
  },
  miniImg: {
    width: 300,
    height: 300,
    margin: 10,
  },
  cardText: {
    textAlign: 'center',
    fontSize: 26,
  },
});

export default PhotoListItem;
