import { mount } from '@vue/test-utils'
import Menuler from '@/components/Menuler.vue'

describe('Menuler', () => {
  test('Menuler var mı?', () => {
    const wrapper = mount(Menuler)
    expect(wrapper.text()).toMatch('KADIN SAAT')
    expect(wrapper.text()).toMatch('ERKEK SAAT')
    expect(wrapper.text()).toMatch('AKILLI SAAT')
    expect(wrapper.text()).toMatch('MARKALAR SAAT')
    expect(wrapper.text()).toMatch('TAKI & AKSESUAR SAAT')
    expect(wrapper.text()).toMatch('FIRSAT')
    expect(wrapper.text()).toMatch('ONLINE ÖZEL')

  })
})
