import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex"
import Sepetim from "~/components/sepet.vue";


describe("Sepetimdeki ürünlerin listelenmesi", () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = {
        
    }
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