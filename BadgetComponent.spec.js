import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BadgetComponent from '@/components/BadgetComponent.vue'; 

describe('BadgetComponent.vue', () => {
  it('renderiza correctamente los badges pasados como props', () => {
    const badges = ['Vue', 'Vitest', 'JavaScript'];
    const wrapper = mount(BadgetComponent, {
      props: { arrayBadgets: badges },
    });

    expect(wrapper.findAll('.badge').length).toBe(badges.length);
    badges.forEach((badge, index) => {
      expect(wrapper.findAll('.badge')[index].text()).toBe(badge);
    });
  });

  it('no renderiza nada si la lista de badges está vacía', () => {
    const wrapper = mount(BadgetComponent, {
      props: { arrayBadgets: [] },
    });

    expect(wrapper.findAll('.badge').length).toBe(0);
  });

  it('maneja correctamente el renderizado con un solo badge', () => {
    const badges = ['Vue'];
    const wrapper = mount(BadgetComponent, {
      props: { arrayBadgets: badges },
    });

    expect(wrapper.findAll('.badge').length).toBe(1);
    expect(wrapper.find('.badge').text()).toBe('Vue');
  });it('maneja correctamente valores no esperados en la lista', () => {
    const badges = ['Vue', null, 123, 'JavaScript'];
    const wrapper = mount(BadgetComponent, {
      props: { arrayBadgets: badges },
    });

    // Se espera que se conviertan los valores no string a string o se rendericen correctamente
    expect(wrapper.findAll('.badge').length).toBe(badges.length);
    expect(wrapper.text()).toContain('null'); // null se convierte en "null"
    expect(wrapper.text()).toContain('123');  // Número convertido a string
  });

  it('verifica que los elementos tengan la clase CSS correcta', () => {
    const badges = ['Vue', 'Vitest'];
    const wrapper = mount(BadgetComponent, {
      props: { arrayBadgets: badges },
    });

    wrapper.findAll('.badge').forEach((badge) => {
      expect(badge.classes()).toContain('badge');
      expect(badge.classes()).toContain('badge-pill');
    });
  });
});
