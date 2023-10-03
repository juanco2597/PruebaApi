/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {PersonajeDatos} from '../interfaces/interface';

interface Props {
  personaje: PersonajeDatos;
}

const Detalles = ({personaje}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>Estado: {personaje.status}</Text>
        <Text style={styles.title}>Especie: {personaje.species}</Text>
        <Text style={styles.title}>Genero: {personaje.gender}</Text>
        <Text style={styles.title}>Origen: {personaje.origin.name}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 400,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
  },
});
export default Detalles;
