import { mount } from '@vue/test-utils'
import hesabim from '~/components/hesabim.vue'

const authMock = {
  loggedIn: true
};

describe('Giriş başarılı mı?', () => {
  test('Vue örneği mi?', () => {
    const wrapper = mount(login, {
      mocks: {
        $auth: authMock
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})