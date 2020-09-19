import React, {useState, useEffect} from 'react';
import {useHttp} from '../../hooks/useHttp';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import PhotoListItem from './PhotoListItem';
import {fetchImages} from '../../redux/image/imgOperations';

const PhotoList = ({toImageScreen}) => {
  const [photos, setPhotos] = useState(null);

  const {request} = useHttp();

  const dispatch = useDispatch();

  useEffect(() => {
    // async function fetchData() {
    //   const response = await request();
    //   setPhotos(response);
    // }
    // fetchData();

    dispatch(fetchImages());
  }, []);

  return (
    <View style={styles.imgContainer}>
      {photos ? (
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
