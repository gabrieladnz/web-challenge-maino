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
        getBackgroundColor(type: string) {
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
          },
          navegarPokemonSelecionado() {
            this.$router.push({name: 'PokemonSelecionado', params: { id: this.id, name: this.name}});
          }
    }
});
