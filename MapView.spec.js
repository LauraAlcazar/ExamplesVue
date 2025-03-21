import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MapView from '../src/components/MapView.vue'

describe('MapView.vue', () => {
  it('debería montar el componente correctamente', () => {
    const wrapper = mount(MapView)
    expect(wrapper.exists()).toBe(true)
  })

  it('debería renderizar el contenedor del mapa', () => {
    const wrapper = mount(MapView)
    const mapContainer = wrapper.find('#map')
    expect(mapContainer.exists()).toBe(true)
  })

  it('debería tener el contenedor con altura establecida', () => {
    const wrapper = mount(MapView)
    const style = getComputedStyle(wrapper.find('#map').element)
    expect(style.height).not.toBe('')
  })
})
