import { mount } from '@vue/test-utils'
import Menuler from '@/components/Menuler.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount()
    expect(wrapper.vm).toBeTruthy()
  })
})
