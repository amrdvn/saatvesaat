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
        ad:this.ad,
        soyad:this.soyad,
        email:this.email
      }
    })

})
})