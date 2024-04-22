import { mount } from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';

describe('Navbar', () => {
  it('renders correctly', () => {
    const wrapper = mount(Navbar);
    expect(wrapper.exists()).toBe(true);
  });

  it('changes language when language icon is clicked', async () => {
    const wrapper = mount(Navbar);

    await wrapper.find('img[alt="EN"]').trigger('click');
    expect(wrapper.vm.$i18n.locale).toBe('en');

    await wrapper.find('img[alt="ES"]').trigger('click');
    expect(wrapper.vm.$i18n.locale).toBe('es');

    await wrapper.find('img[alt="PT"]').trigger('click');
    expect(wrapper.vm.$i18n.locale).toBe('pt_br');
  });

  it('navigates to correct route when navbar link is clicked', async () => {
    const wrapper = mount(Navbar, {
      global: {
        mocks: {
          $router: {
            push: jest.fn(),
          },
        },
      },
    });

    await wrapper.find('router-link[to="/"]').trigger('click');
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/');

    await wrapper.find('router-link[to="/sobre"]').trigger('click');
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/sobre');
  });
});
