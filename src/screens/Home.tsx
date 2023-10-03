/* eslint-disable prettier/prettier */
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {useApiPagina} from '../hooks/useApiPagina';
import Card from '../components/Card';

const Home = () => {
  const {top} = useSafeAreaInsets();
  const {simplePaginaList, loadApi} = useApiPagina();

  return (
    <>
      <View style={{alignItems: 'center', backgroundColor: '#000'}}>
        <FlatList
          data={simplePaginaList}
          keyExtractor={personaje => personaje.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <Text
                style={{
                  ...styles.title,
                  ...styles.globalMargin,
                  top: top + 20,
                  marginBottom: top + 20,
                }}>
                Prueba Q-10
              </Text>
              <Text
                style={{
                  ...styles.subtitle,
                  ...styles.globalMargin,
                }}>
                Consumiendo Api de Rick and Morty
              </Text>
            </>
          }
          // numColumns={2}
          renderItem={({item}) => <Card personaje={item} />}
          onEndReached={loadApi}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};

export default Home;
