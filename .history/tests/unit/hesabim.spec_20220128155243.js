import { mount } from '@vue/test-utils'
import hesabim from '~/components/hesabim.vue'

const authMock = {
  loggedIn: true,
  ad:this.ad,
  soyad:this.soyad,
  email:this.email
};

describe('Giriş başarılı mı?', () => {
  test('Vue örneği mi?', () => {
    const wrapper = mount(hesabim, {
      mocks: {
        $auth: authMock
      }
    })

})
})
describe('User', () => {
    test('isim dönüyür mü?', () => {
        const user = new User({ firstname: 'Ruzgar', lastname: 'Rüzgar' })
        expect(user.name).toBe('Ruzgar Rüzgar')
    })
    test('email dönüyür mü?', () => {
        const eposta = new User({ eposta: 'Rüzgar@hotmail.com' })
        expect(eposta.email).toBe('Rüzgar@hotmail.com')
    })
})