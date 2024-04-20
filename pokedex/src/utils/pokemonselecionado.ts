import { defineComponent, DefineComponent } from "vue";
import Navbar from '@/components/Navbar.vue'
import ApiService from "@/api/ApiService";
import { Pokemon } from '@/api/ApiInterface';
import { getBackgroundColor } from "./pokemoncard";

export default defineComponent({
  name: 'PokemonSelecionado',
  props: {
    id: Number,
    name: String,
  },
  components: {
    'Navbar': Navbar,
  },
  data() {
    return {
      pokemon: null as any,
      ListaPokemon: [] as Pokemon[],
      DetalhesPokemon: [] as any[],
    }
  },
  async created() {
    this.pokemon = {
      id: this.id,
      name: this.name,
    };
    try {
      const apiService = new ApiService();
      this.ListaPokemon = await apiService.getListaPokemon();
      this.buscarDetalhesPokemon();
    } catch (error) {
      console.error('Erro:', error);
    }
  },
  methods: {
    /**
     * 
     */
    async buscarDetalhesPokemon() {
      try {
        const apiService = new ApiService();
        const detalhesPromises = this.ListaPokemon.map(pokemon => apiService.getDetalhesPokemon(pokemon.name));
        const detalhesPokemon = await Promise.all(detalhesPromises);
        
        const pokemonSelecionado = detalhesPokemon.find(pokemon => pokemon.name === this.name);
        console.log(pokemonSelecionado);
        if (pokemonSelecionado) {
          const evolutions = await this.buscarEvolucoesPokemon(pokemonSelecionado.name);
          const caminhoFoto = pokemonSelecionado.sprites.other['official-artwork'].front_default;
          const types = pokemonSelecionado.types.map((typeData: any )=> typeData.type.name);

          this.pokemon = {
            name: pokemonSelecionado.name,
            sprites: Object.values(pokemonSelecionado.sprites).filter(sprite => typeof sprite === 'string'),
            moves: pokemonSelecionado.moves,
            evolutions: evolutions,
            game_indices: pokemonSelecionado.game_indices,
            foto: caminhoFoto,
            types: types,
          };
        } else {
          console.error('Detalhes do Pokémon selecionado não encontrados');
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes dos Pokémon:', error);
      }
    },
    /**
     * 
     * @param pokemonName 
     * @returns 
     */
    async buscarEvolucoesPokemon(pokemonName: string) {
      try {
        const apiService = new ApiService();
        const response = await apiService.getPokemonEspecie(pokemonName);
        return response;
      } catch (error) {
        console.error('Erro ao buscar evoluções do Pokémon:', error);
        return null;
      }
    },
    getBackgroundColor

  }
})