import { mount } from '@vue/test-utils'
import hesabim from '~/components/hesabim.vue'

const authMock = {
  loggedIn: true
  const {
    firstname,
    lastname,
    eposta
} = details
this.firstname = firstname
this.lastname = lastname
this.eposta = eposta
}

describe('Giriş başarılı mı?', () => {
  test('Vue örneği mi?', () => {
    const wrapper = mount(hesabim, {
      mocks: {
        $auth: authMock
      }
    })

})
})