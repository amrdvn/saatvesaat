import { mount, RouterLinkStub } from "@vue/test-utils";
import footerContainer from "../components/PageFooter.vue";
describe("Footer Komponentinin Düzgün Çalışıp Çalışmamasının denetlenmesi", () => {
    const wrapper = mount(PageFooter, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("'Sosyal Medya' yazısı gözüküyor mu?", () => {
        expect(wrapper.text()).toContain("Sosyal Medya");
    });
    test('Vue Örneği mi?', () => {
        const wrapper = mount(PageFooter)
        expect(wrapper.vm).toBeTruthy()
    })
    test('console.log', () => {
        console.log(PageFooter)
    })
});