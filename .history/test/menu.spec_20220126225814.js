import { mount } from '@vue/test-utils'
import Menuler from '@/components/Menuler.vue'

describe('NuxtLogo', () => {
  test('', () => {
    const wrapper = mount(Menuler)
    expect(wrapper.vm).toBeTruthy()
  })
})
