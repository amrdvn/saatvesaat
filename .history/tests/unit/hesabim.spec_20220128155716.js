import { mount } from '@vue/test-utils'
import hesabim from '~/components/hesabim.vue'

const authMock = {
  loggedIn: true,
  ad:'',
  soyad:'',
  email:'',
};

describe('Giriş başarılı mı?', () => {
  test('Vue örneği mi?', () => {
    const wrapper = mount(hesabim, {
      mocks: {
        $auth: authMock,
        ad:authMock,
        soyad:authMock,
        email:authMock
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    test('isim dönüyür mü?', () => {
        const authMock = new authMock({ firstname: 'Ruzgar', lastname: 'Rüzgar' })
        expect(authMock.ad).toBe('Ruzgar Rüzgar')
    })
    test('email dönüyür mü?', () => {
        const eposta = new User({ eposta: 'Rüzgar@hotmail.com' })
        expect(eposta.email).toBe('Rüzgar@hotmail.com')
    })
})
})