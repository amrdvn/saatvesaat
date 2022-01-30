import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';

import login from '~/components/login.vue'


const localVue = createLocalVue()
localVue.use(Vuex)
describe('login', () => {
    let wrapper
    const mockFunction = jest.fn();
    describe('user==null iken', () => {
        beforeEach(() => {
            wrapper = mount(login, {
                localVue,
                data() {
                    return {
                        email: 'deneme@deneme.com',
                        password: '111111',
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
                    openLogin: null
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