import { mount, RouterLinkStub } from "@vue/test-utils";
import footerContainer from "../components/footerContainer.vue";
describe("Footer Komponentinin Düzgün Çalışıp Çalışmamasının denetlenmesi", () => {
    const wrapper = mount(footerContainer, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("'Sosyal Medya' yazısı gözüküyor mu?", () => {
        expect(wrapper.text()).toContain("Sosyal Medya");
    });
    test('Vue Örneği mi?', () => {
        const wrapper = mount(footerContainer)
        expect(wrapper.vm).toBeTruthy()
    })
    test('console.log', () => {
        console.log(footerContainer)
    })
});