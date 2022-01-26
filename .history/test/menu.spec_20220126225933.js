import { mount } from '@vue/test-utils'
import Menuler from '@/components/Menuler.vue'

describe('NuxtLogo', () => {
  test('Menuler var mı?', () => {
    const wrapper = mount(Menuler)
    expect(wrapper.text()).toMatch()
  })
})
