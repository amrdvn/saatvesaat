import { mount } from '@vue/test-utils'
import hesabim from '~/components/hesabim.vue'

const authMock = {
  loggedIn: true,
  ad,
  soyad,
  email,
};

describe('Giriş başarılı mı?', () => {
  test('Vue örneği mi?', () => {
    const wrapper = mount(hesabim, {
      mocks: {
        $auth: authMock,
        ad:a,
        soyad:this.soyad,
        email:this.email
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
})
})