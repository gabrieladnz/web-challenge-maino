import axios, { AxiosResponse } from 'axios';
import { Pokemon } from './ApiInterface';

class ApiService {
  private apiURL: string = 'https://pokeapi.co/api/v2/';

  /**
   * 
   * @returns 
   */
  public getListaPokemon = async (): Promise<Pokemon[]> => {
    try {
      const response: AxiosResponse<{ results: Pokemon[] }> = await axios.get(`${this.apiURL}pokemon?limit=100`);
      return response.data.results;
    } catch (error) {
      throw new Error(`Erro ao buscar lista de Pokémon: ${error}`);
    }
  };

  /**
   * 
   * @param nomePokemon 
   * @returns 
   */
  public getDetalhesPokemon = async (nomePokemon: string): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.get(`${this.apiURL}pokemon/${nomePokemon}`);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar detalhes do Pokémon ${nomePokemon} : ${error}`);
    }
  };

  /**
   * 
   * @param nomePokemon 
   * @returns 
   */
  public getPokemonEspecie = async (nomePokemon: string): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.get(`${this.apiURL}pokemon-species/${nomePokemon}`);
      if (response.data.evolution_chain && response.data.evolution_chain.url) {

        const evolutionChainResponse = await axios.get(response.data.evolution_chain.url);
        const evolutionChainData = evolutionChainResponse.data;

        const nomeEspecies: any = [];
        const adicionarNomeEspecie = (evolutionDetails: any) => {
          if (evolutionDetails && evolutionDetails.species) {
            nomeEspecies.push(evolutionDetails.species.name);
            if (evolutionDetails.evolves_to) {
              evolutionDetails.evolves_to.forEach(adicionarNomeEspecie);
            }
          }
        };
        adicionarNomeEspecie(evolutionChainData.chain);

        response.data.evolutions = nomeEspecies;
      }
      console.log(response.data.evolutions)
      return response.data.evolutions;

    } catch (error) {
      throw new Error(`Erro ao buscar detalhes do Pokémon ${nomePokemon} : ${error}`);
    }
  }
}

export default ApiService;