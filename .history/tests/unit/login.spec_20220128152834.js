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
    test('Vue Örneği mi?', () => {
        
        expect(wrapper.vm).toBeTruthy()
    })
    test('console.log', () => {
        console.log(login)
    })
  })
})
describe('PageAccount', () => {
    let wrapper
    const mockFunction = jest.fn();
    describe('openLogin==true iken', () => {
        beforeEach(() => {
            wrapper = mount(PageAccount, {
                localVue,
                data() {
                    return {
                        email: 'test@test.com',
                        password: '111222',
                        isAlreadyLogged: false,
                    };
                },
                store: new Vuex.Store({
                    actions: {
                        login: mockFunction,
                    },
                }),
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
            const wrapper = mount(PageAccount)
            expect(wrapper.vm).toBeTruthy()
        })
        test('console.log', () => {
            console.log(PageAccount)
        })
    })
})