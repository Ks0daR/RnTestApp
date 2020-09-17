import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Navbar;
