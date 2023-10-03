/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {PersonajeDatos} from '../interfaces/interface';
import {useEffect} from 'react';
import {rickMortyApi} from '../api/rickMortyApi';

/* eslint-disable prettier/prettier */
export const usePersonaje = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [personaje, setPersonaje] = useState<PersonajeDatos>(
    {} as PersonajeDatos,
  );

  const loadPersonaje = async () => {
    const resp = await rickMortyApi.get<PersonajeDatos>(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    setPersonaje(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    loadPersonaje();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    personaje,
  };
};
