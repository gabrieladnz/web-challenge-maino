import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonCard',
  props: {
    index: Number,
    name: String,
    id: Number,
    url: String,
    types: {
      type: Array,
      default: () => []
    },
    photo: String
  },
  data() {
    return {
    }
  },
  methods: {
    /**
     * Retorna a cor de fundo correspondente ao tipo de Pokémon fornecido.
     * @param type O tipo de Pokémon para o qual a cor de fundo será determinada.
     * @returns A cor de fundo correspondente ao tipo de Pokémon.
     */
    getBackgroundColor(type: string) {
      return getBackgroundColor(type);
    },
    /**
     * Navega para a página do Pokémon selecionado em uma nova guia do navegador.
     * A rota é resolvida usando o router Vue Router com base no ID e nome do Pokémon.
     */
    navegarPokemonSelecionado() {
      const rota = this.$router.resolve({ name: 'PokemonSelecionado', params: { id: this.id, name: this.name } }).href;
      window.open(rota, '_blank');
    }
  }
});

export function getBackgroundColor(type: string) {
  switch (type) {
    case 'normal':
      return '#c89e6b';
    case 'grass':
      return '#92d1b4';
    case 'fire':
      return '#fd7a7a';
    case 'water':
      return '#75bdfd';
    case 'electric':
      return '#f5e585';
    case 'ice':
      return '#98d5d7';
    case 'ground':
      return '#e7d060';
    case 'flying':
      return '#a98ff0';
    case 'poison':
      return '#ad7fae';
    case 'fighting':
      return '#cf423a';
    case 'psychic':
      return '#f65687';
    case 'dark':
      return '#382d26';
    case 'rock':
      return '#b5b8a7';
    case 'bug':
      return '#99c98b';
    case 'ghost':
      return '#6e5896';
    case 'steel':
      return '#b9b7cf';
    case 'dragon':
      return '#8b5dff';
    case 'fairy':
      return '#f8cfd5';
    default:
      return '#c89e6b';
  }
}
