import { mount } from '@vue/test-utils'
import Hello from '~/components/hello_component.vue'

const authMock = {
  loggedIn: true
};

describe('Hello Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Hello, {
      mocks: {
        $auth: authMock
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})