import axios, { AxiosResponse } from 'axios';
import { Pokemon } from './ApiInterface';

class ApiService {
  private apiURL: string = 'https://pokeapi.co/api/v2/';
  
  public getListaPokemon = async (): Promise<Pokemon[]> => {
    try {
      const response: AxiosResponse<{ results: Pokemon[] }> = await axios.get(`${this.apiURL}pokemon?limit=10`);
      return response.data.results;
    } catch (error) {
      throw new Error(`Erro ao buscar lista de Pokémon: ${error}`);
    }
  };

  public getDetalhesPokemon = async (nomePokemon: string): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.get(`${this.apiURL}pokemon/${nomePokemon}`);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar detalhes do Pokémon ${nomePokemon} : ${error}`);
    }
  };
}

export default ApiService;