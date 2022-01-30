import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex"
import Sepetim from "~/components/Sepetim.vue";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import fbDb from '~/plugins/firebase.js'

describe("Sepetimdeki ürünlerin listelenmesi", () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
        state: {
            Sepet: [{
                "id": 1,
                "pid": "111981",
                "count": 1
            },
            {
                "id": 2,
                "pid": "9105",
                "count": 1
            }
            ],
            cartProducts: [
                {
                    "product": {
                        "img_url": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_small.jpg",
                        "cost": 7999,
                        "currency": "TL",
                        "code": "MHDA3TU/A",
                        "name": "iPhone 11 64 Gb Siyah"
                    },
                    "count": 1,
                    "cid": 1
                },
                {
                    "product": {
                        "img_url": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-108106_small.jpg",
                        "cost": 699,
                        "currency": "TL",
                        "code": "ZA550238TR",
                        "name": "LENOVO TAB M7 MTK 8321 1.3GHZ-2GB-32GB-BT-7'-CAM- ANDROID PIE"
                    },
                    "count": 1,
                    "cid": 2
                },
                {
                    "product": {
                        "img_url": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/123266_small.jpg",
                        "cost": 3299,
                        "currency": "TL",
                        "code": "7",
                        "name": " ASUS X515MA CELERON N4020 1.1GHZ-4GB RAM-128GB SSD-15.6''-W10 NOTEBOOK"
                    },
                    "count": 1,
                    "cid": 3
                }
            ],
            products: [
                {
                    "img_url": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_small.jpg",
                    "cost": 7999,
                    "currency": "TL",
                    "code": "MHDA3TU/A",
                    "name": "iPhone 11 64 Gb Siyah"
                },
                {
                    "img_url": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/TeoriV2-108106_small.jpg",
                    "cost": 699,
                    "currency": "TL",
                    "code": "ZA550238TR",
                    "name": "LENOVO TAB M7 MTK 8321 1.3GHZ-2GB-32GB-BT-7'-CAM- ANDROID PIE"
                },
                {
                    "img_url": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/123266_small.jpg",
                    "cost": 3299,
                    "currency": "TL",
                    "code": "7",
                    "name": " ASUS X515MA CELERON N4020 1.1GHZ-4GB RAM-128GB SSD-15.6''-W10 NOTEBOOK"
                },
            ]
        },
        getters
    },

    )
    const wrapper = mount(Sepetim, {
        stubs: {
            NuxtLink: RouterLinkStub
        },
        store,
        localVue,
    })
    describe("Gözükecekler", () => {
        it("deneme test", () => {
            expect(2 + 2).toBe(4);
        });
        it("Sepetim text", () => {
            expect(wrapper.text()).toContain("Sepetim");
        });
        it("Ürün 1'in adı : iPhone 11 64 Gb Siyah :", () => {
            expect(wrapper.text()).toContain("iPhone 11 64 Gb Siyah");
        });

        it("Ürün 2'nin code'u : LENOVO TAB M7 MTK 8321 1.3GHZ-2GB-32GB-BT-7'-CAM- ANDROID PIE", () => {
            expect(wrapper.text()).toContain("LENOVO TAB M7 MTK 8321 1.3GHZ-2GB-32GB-BT-7'-CAM- ANDROID PIE");
        });
        it("Ürün 3'ün fiyatı : ASUS X515MA CELERON N4020 1.1GHZ-4GB RAM-128GB SSD-15.6''-W10 NOTEBOOK", () => {
            expect(wrapper.text()).toContain("ASUS X515MA CELERON N4020 1.1GHZ-4GB RAM-128GB SSD-15.6''-W10 NOTEBOOK");
        });
    });
})