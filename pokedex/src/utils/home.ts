import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import PokemonCard from '@/components/PokemonCard.vue';
import ApiService from '@/api/ApiService';
import { Pokemon } from '@/api/ApiInterface';

export default defineComponent({
    name: "Home",
    components: {
        'Navbar': Navbar,
        'Footer': Footer,
        'PokemonCard': PokemonCard,
    },
    data() {
        return {
            ListaPokemon: [] as Pokemon[],
            PokemonsFiltrados: [] as Pokemon[],
            DetalhesPokemon: [] as any[]
        };
    },
    async created() {
        try {
            const apiService = new ApiService();
            this.ListaPokemon = await apiService.getListaPokemon();
            this.buscarDetalhesPokemon();
        } catch (error) {
            console.error('Erro:', error);
        }
    },
    methods: {
        async buscarDetalhesPokemon() {
            try {
                const apiService = new ApiService();
                const detalhesPromises = this.ListaPokemon.map(pokemon => apiService.getDetalhesPokemon(pokemon.name));
                const detalhesPokemon = await Promise.all(detalhesPromises);
                this.DetalhesPokemon.push(...detalhesPokemon);
                console.log(this.DetalhesPokemon);
            } catch (error) {
                console.error('Erro ao buscar detalhes dos Pokémon:', error);
            }
        }
        
    }
});
