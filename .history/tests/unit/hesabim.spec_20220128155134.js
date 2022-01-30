import { mount } from '@vue/test-utils'
import hesabim from '~/components/hesabim.vue'

const authMock = {
  loggedIn: true,
  ad,
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