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
            carregando: true,
            paginaAtual: 1,
            totalPaginas: 0,
            porPagina: 16,
        };
    },
    async created() {
        try {
            const apiService = new ApiService();
            this.ListaPokemon = await apiService.getListaPokemon();

            const inicio = 0;
            const final = this.porPagina;
            const inicialPokemon = this.ListaPokemon.slice(inicio, final);
            const detalhesPromises = inicialPokemon.map(pokemon => apiService.getDetalhesPokemon(pokemon.name));
            const detalhesPokemon = await Promise.all(detalhesPromises);
            this.DetalhesPokemon.push(...detalhesPokemon);

            this.totalPaginas = Math.ceil(this.ListaPokemon.length / this.porPagina);
            this.scroll();
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

                this.totalPaginas = Math.ceil(this.DetalhesPokemon.length / this.porPagina);
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
        /**
         * Pesquisa os tipos e espécies de Pokémons conforme selecionado pelo o usuário em um select.
         */
        pesquisar() {
            this.PokemonsFiltrados = this.DetalhesPokemon.filter(pokemon => {
                const tipoCorrespondente = this.tipoSelecionado === 'todos' || pokemon.types.some((type: any) => type.type.name === this.tipoSelecionado);
                const especieCorrespondente = this.especieSelecionada === 'todos' || pokemon.species.name === this.especieSelecionada;
                return tipoCorrespondente || especieCorrespondente;
            });
        },
        /**
         * 
         */
        async scroll() {
            this.carregando = false;
            window.addEventListener('scroll', async () => {
                console.log('Scrolling...');
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && !this.carregando && this.paginaAtual < this.totalPaginas) {
                    this.carregando = true;
                    this.paginaAtual++;
                    await this.maisDetalhesPokemon();
                    this.carregando = false;
                }
            });
        },
        /**
         * 
         */
        async maisDetalhesPokemon() {
            const inicio = (this.paginaAtual - 1) * this.porPagina;
            const fim = this.paginaAtual * this.porPagina;
            const pokemonsRestantes = this.ListaPokemon.slice(inicio, fim);

            const apiService = new ApiService();
            const detalhesPromises = pokemonsRestantes.map(pokemon => apiService.getDetalhesPokemon(pokemon.name));
            const detalhesPokemon = await Promise.all(detalhesPromises);
            this.DetalhesPokemon.push(...detalhesPokemon);
        }
    }
});
