/* eslint-disable prettier/prettier */
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import React from 'react';
import {SimpleList} from '../interfaces/interface';
import {FadeInImage} from './FadeInImage';
import {useNavigation} from '@react-navigation/native';

const windowWith = Dimensions.get('window').width;

interface Props {
  personaje: SimpleList;
}

const Card = ({personaje}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('DetallePersonaje', {simpleList: personaje})
      }>
      <View
        style={{
          ...styles.container,
          width: windowWith * 0.9,
        }}>
        <FadeInImage uri={personaje.picture} style={styles.img} />

        <View style={styles.contentText}>
          <Text style={styles.name}>{personaje.name}</Text>
          <Text style={styles.nameSub}>{personaje.species}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: 'grey',
    height: 140,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#f1f1f1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 7,
  },
  contentText: {
    alignContent: 'center',
    width: 160,
    left: 7,
  },

  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    right: -180,
  },
  nameSub: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    right: -180,
  },
  img: {
    width: windowWith * 0.4,
    height: 130,
    position: 'absolute',
    marginTop: 5,
    borderRadius: 10,
    left: 2,
  },
});

export default Card;
