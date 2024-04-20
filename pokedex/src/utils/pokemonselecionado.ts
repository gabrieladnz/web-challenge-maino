import { defineComponent, DefineComponent } from "vue";

export default defineComponent({
  name: 'PokemonSelecionado',
  props: {
    id: Number,
    name: String,
  },
  data() {
    return {
      pokemon: null as any,
    }
  },
  created() {
    this.pokemon = {
      id: this.id,
      name: this.name,
    };
  },
  methods: {
  }
})