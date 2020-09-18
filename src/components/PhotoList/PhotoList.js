import React, {useState, useEffect} from 'react';
import {useHttp} from '../../hooks/useHttp';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({toImageScreen}) => {
  const [photos, setPhotos] = useState(null);

  const {request} = useHttp();

  useEffect(() => {
    async function fetchData() {
      const response = await request();
      setPhotos(response);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.imgContainer}>
      {photos ? (
        // photos.map((elem) => (
        //   <PhotoListItem
        //     key={elem.id}
        //     url={elem.urls}
        //     name={elem.user.name}
        //     toImageScreen={toImageScreen}
        //   />
        // ))
        <FlatList
          keyExtractor={(item) => item.id}
          data={photos}
          renderItem={({item}) => (
            <PhotoListItem
              url={item.urls}
              name={item.user.name}
              toImageScreen={toImageScreen}
            />
          )}
        />
      ) : (
        <Text>Пока ничего нет</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
  },
});

export default PhotoList;
