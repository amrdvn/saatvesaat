import { mount } from '@vue/test-utils'
import login from '~/components/login.vue'

const authMock = {
  loggedIn: true
};

describe('Giriş başarılı mı?', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(login, {
      mocks: {
        $auth: authMock
      }
    })
    test('Vue Örneği mi?', () => {
        
        expect(wrapper.vm).toBeTruthy()
    })
    test('console.log', () => {
        console.log(login)
    })
  })
})
