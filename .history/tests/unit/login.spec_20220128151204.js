import { mount } from '@vue/test-utils'
import login from '~/components/login.vue'

const authMock = {
  loggedIn: true
};

describe('Hello Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(login, {
      mocks: {
        $auth: authMock
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})