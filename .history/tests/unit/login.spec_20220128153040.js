import { mount,  RouterLinkStub } from '@vue/test-utils';

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
    test('Vue Örneği mi?', () => {
        
        expect(wrapper.vm).toBeTruthy()
    })
    test('console.log', () => {
        console.log(login)
    })
  })
})
describe('login', () => {
    let wrapper
    const mockFunction = jest.fn();
    describe('loggedIn==false iken', () => {
        beforeEach(() => {
            wrapper = mount(login, {
                
                data() {
                    return {
                        email: 'deneme@deneme.com',
                        password: '111111',
                    };
                },
                mocks: {
                    $router: {
                        push: jest.fn()
                    }
                },
                propsData: {
                    loggedIn: false
                },
                stubs: {
                    NuxtLink: RouterLinkStub
                },
            });
        });
        // eslint-disable-next-line require-await
        test('Gönder butonuna basılabilir ve basılınca login fonksiyonun çağrılması', async() => {
            const loginButton = wrapper.find(".");
            loginButton.trigger("click").then(() => {
                expect(mockFunction).toHaveBeenCalled();
            });
        })
        test('Vue Örneği mi?', () => {
            const wrapper = mount(login)
            expect(wrapper.vm).toBeTruthy()
        })
        test('console.log', () => {
            console.log(login)
        })
    })
})