import { mount, RouterLinkStub } from "@vue/test-utils"

import menuler from "~/components/Menuler.vue"


describe("Kategoriler gözüküyor mu?", () => {
    const wrapper = mount(menuler, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("'KADIN SAAT'", () => {
        expect(wrapper.text()).toContain("KADIN SAAT");
    });
    test("'ERKEK SAAT'", () => {
        expect(wrapper.text()).toContain("ERKEK SAAT");
    });
    it("'AKILLI SAAT'", () => {
        expect(wrapper.text()).toContain("AKILLI SAAT");
    });
    test("'MARKALAR'", () => {
        expect(wrapper.text()).toContain("MARKALAR");
    });
    it("'TAKI & AKSESUAR'", () => {
        expect(wrapper.text()).toContain("TAKI & AKSESUAR");
    });
    test("'FIRSAT'", () => {
        expect(wrapper.text()).toContain("FIRSAT");
    });
    it("'ONLINE ÖZEL'", () => {
        expect(wrapper.text()).toContain("ONLINE ÖZEL");
    });
    test('Vue Örneği mi?', () => {
        const wrapper = mount(PageHeaderCategories)
        expect(wrapper.vm).toBeTruthy()
    })
});
test('console.log', () => {
    console.log(PageHeaderCategories)
})