import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils"
import Vuex from "vuex"
import urun from "../components/urun.vue"


describe("Verilen ürünlerin listelenmesi", () => {
    
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
        
        
 
    const wrapper = mount(urun, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    })
    describe("Liste Kontrolü", () => {

        it("Ürün 1'in adı : iPhone 11 64 Gb Siyah :", () => {
            expect(wrapper.text()).toContain("iPhone 11 64 Gb Siyah");
        });

        it("Ürün 2'nin code'u : ZA550238TR", () => {
            expect(wrapper.text()).toContain("ZA550238TR");
        });
        it("Ürün 3'ün fiyatı : 3299", () => {
            expect(wrapper.text()).toContain("3299");
        });
    });
    test('console.log', () => {
        console.log(urun)
    })
})