import { mount } from '@vue/test-utils';
import PokemonCard from '@/components/PokemonCard.vue';

describe('PokemonCard', () => {
  it('renders correctly', () => {
    const propsData = {
      id: 25,
      name: 'pikachu',
      types: [{ type: { name: 'electric' } }],
      photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    };

    const wrapper = mount(PokemonCard, {
      propsData,
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.card-pokemon__numero').text()).toBe('#25');
    expect(wrapper.find('.card-pokemon__nome').text()).toBe('Pikachu');
    expect(wrapper.find('.card-pokemon__conteudo-card__tipos li').text()).toBe('Electric');
    expect(wrapper.find('.card-pokemon__conteudo-card__imagem').attributes('src')).toBe(propsData.photo);
  });

  it('emits "click" event when clicked', async () => {
    const propsData = {
      id: 25,
      name: 'pikachu',
      types: [{ type: { name: 'electric' } }],
      photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    };

    const wrapper = mount(PokemonCard, {
      propsData,
    });

    // Simula um clique no PokemonCard
    await wrapper.trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
