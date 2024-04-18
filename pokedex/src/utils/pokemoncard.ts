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
    }
});
