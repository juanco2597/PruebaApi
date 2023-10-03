/* eslint-disable prettier/prettier */
import {useEffect, useRef, useState} from 'react';
import {rickMortyApi} from '../api/rickMortyApi';
import {InterfaceApi, Result, SimpleList} from '../interfaces/interface';

export const useApiPagina = () => {
  const [loading, setLoading] = useState(true);
  const [simplePaginaList, setSimplePaginaList] = useState<SimpleList[]>([]);

  const nextPageUrl = useRef('https://rickandmortyapi.com/api/character/');

  const loadApi = async () => {
    setLoading(true);
    const resp = await rickMortyApi.get<InterfaceApi>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapList(resp.data.results);
  };

  const mapList = (lista: Result[]) => {
    const newArraylist: SimpleList[] = lista.map(({name, url, species}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 1];
      const picture = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

      return {
        id,
        picture,
        name,
        species,
      };
    });

    setSimplePaginaList([...simplePaginaList, ...newArraylist]);
    setLoading(false);
  };

  useEffect(() => {
    loadApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    simplePaginaList,
    loadApi,
  };
};
