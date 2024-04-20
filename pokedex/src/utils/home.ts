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
            DetalhesPokemon: [] as any[],
            termoProcurado: '',
            tipoSelecionado: '',
            especieSelecionada: '',
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
        /**
         * Busca os detalhes do pokémon em específico através do seu nome.
         */
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
        },
        /**
         * Filtra os Pokémons através de dados como: nome, espécie e id e exibe na tela.
         */
        filtrarPokemon() {
            this.PokemonsFiltrados = this.DetalhesPokemon.filter(pokemon => {
                return (
                    pokemon.name.toLowerCase().includes(this.termoProcurado.toLowerCase()) || pokemon.id.toString().includes(this.termoProcurado) || pokemon.types.some((type: any) => type.type.name.toLowerCase().includes(this.termoProcurado.toLowerCase()))
                );
            })
        },
        pesquisar() {
            this.PokemonsFiltrados = this.DetalhesPokemon.filter(pokemon => {
                const tipoCorrespondente = this.tipoSelecionado === 'todos' || pokemon.types.some((type: any) => type.type.name === this.tipoSelecionado);
                const especieCorrespondente = this.especieSelecionada === 'todos' || pokemon.species.name === this.especieSelecionada;
                return tipoCorrespondente || especieCorrespondente;
            });
        }
    }
});
