
import { mount } from '@vue/test-utils'
import Sobre from '@/pages/Sobre.vue'

describe('Sobre', () => {
  it('renders correctly', () => {
    const wrapper = mount(Sobre)
    
    // Verifica se o componente está sendo renderizado corretamente
    expect(wrapper.exists()).toBe(true)
    
    // Verifica se os links para as redes sociais estão presentes e com os URLs corretos
    expect(wrapper.find('.sobre__section__links a[href="https://www.linkedin.com/in/gabrieladnz"]').exists()).toBe(true)
    expect(wrapper.find('.sobre__section__links a[href="https://github.com/gabrieladnz"]').exists()).toBe(true)
    expect(wrapper.find('.sobre__section__links a[href="https://dev.to/gabrieladnz"]').exists()).toBe(true)
  })
})