import { mount } from '@vue/test-utils'
import Menuler from '@/components/Menuler.vue'

describe('NuxtLogo', () => {
  test('Menuler var mı?', () => {
    const wrapper = mount(Menuler)
    expect(wrapper.text()).toMatch('KADIN SAAT')
    expect(wrapper.text()).toMatch('ERKEK SAAT')
    expect(wrapper.text()).toMatch('AKILLI SAAT')
    expect(wrapper.text()).toMatch('MARKALAR SAAT')
    expect(wrapper.text()).toMatch('TAKI & AKSE SAAT')
    expect(wrapper.text()).toMatch('KADIN SAAT')
    expect(wrapper.text()).toMatch('KADIN SAAT')

  })
})
