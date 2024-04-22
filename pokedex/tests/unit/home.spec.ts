import { mount } from '@vue/test-utils';
import Home from '@/pages/Home.vue'; // Verifique se o caminho está correto

describe('Home', () => {
  it('renders correctly', () => {
    const wrapper = mount(Home);
    
    // Verifica se o componente está sendo renderizado corretamente
    expect(wrapper.exists()).toBe(true);
    
    // Verifica se o título está sendo renderizado corretamente
    expect(wrapper.find('.home__titulo h1').text()).toBe('Pokédex');
    
    // Verifica se a barra de pesquisa está presente
    expect(wrapper.find('.home__section__barra-pesquisa input').exists()).toBe(true);
    expect(wrapper.find('.home__section__barra-pesquisa img').exists()).toBe(true);

    // Verifica se o menu lateral está presente e contém os elementos corretos
    expect(wrapper.find('.home__section__menu-lateral').exists()).toBe(true);
    expect(wrapper.find('.home__section__menu-lateral label').text()).toBe('Tipo');
    expect(wrapper.find('.home__section__menu-lateral select').exists()).toBe(true);
    
    // Verifica se o botão de pesquisa está presente
    expect(wrapper.find('.home__section__menu-lateral button').text()).toBe('Pesquisar');
    
    // Verifica se os cards estão sendo renderizados corretamente
    expect(wrapper.findAll('.home__section__cards PokemonCard').length).toBeGreaterThan(0);

    // Verifica se o componente de carregamento está presente
    expect(wrapper.find('.loading-icon').exists()).toBe(true);
  });
});
