/* eslint-disable prettier/prettier */
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigate';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePersonaje} from '../hooks/usePersonaje';
import Detalles from '../components/Detalles';

interface Props extends StackScreenProps<RootStackParams, 'DetallePersonaje'> {}

const DetallePersonaje = ({navigation, route}: Props) => {
  const {simpleList} = route.params;
  const {id, name, picture} = simpleList;
  const {top} = useSafeAreaInsets();

  const {loading, personaje} = usePersonaje(id);
  console.log(personaje);

  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{...styles.backButton, top: top + 10}}>
          <Icon name="arrow-back-outline" color="white" size={30} />
        </TouchableOpacity>
        <Text style={{...styles.name, top: top + 45}}>{name}</Text>
        <FadeInImage uri={picture} style={styles.img} />
      </View>

      {/* Detalles del personaje */}
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={'#000'} size={50} />
        </View>
      ) : (
        <Detalles personaje={personaje} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    zIndex: 999,
    backgroundColor: '#000',
    alignItems: 'center',
    borderBottomRightRadius: 600,
    borderBottomLeftRadius: 600,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  name: {
    color: '#fff',
    fontSize: 40,
    alignSelf: 'center',
  },
  img: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -10,
    borderRadius: 50,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DetallePersonaje;
