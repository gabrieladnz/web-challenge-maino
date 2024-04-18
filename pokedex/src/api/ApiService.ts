import axios, { AxiosResponse } from 'axios';
import { Pokemon } from './ApiInterface';

const apiURL: string = 'https://pokeapi.co/api/v2/';

export const getListaPokemon = async (): Promise<Pokemon[]> => {
  try {
    const response: AxiosResponse<{ results: Pokemon[] }> = await axios.get(`${apiURL}pokemon?limit=1000`);
    return response.data.results;
  } catch (error) {
    throw new Error(`Erro ao buscar lista de Pokémon: ${error}`);
  }
};

export const getDetalhesPokemon = async (nomePokemon: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${apiURL}pokemon/${nomePokemon}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar detalhes do Pokémon ${nomePokemon} : ${error}`);
  }
};