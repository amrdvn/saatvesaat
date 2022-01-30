import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';

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
                        email: 'test@test.com',
                        password: '111222',
                        isAlreadyLogged: false,
                    };
                },
                mocks: {
                    $router: {
                        push: jest.fn()
                    }
                },
                propsData: {
                    openLogin: true
                },
                stubs: {
                    NuxtLink: RouterLinkStub
                },
            });
        });
        // eslint-disable-next-line require-await
        test('Gönder butonuna basılabilir ve basılınca login fonksiyonun çağrılması', async() => {
            const loginButton = wrapper.find(".signup-form__button");
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