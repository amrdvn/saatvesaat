import { mount, RouterLinkStub } from "@vue/test-utils"

import menuler from "~/components/Menuler.vue"


describe("Kategoriler gözüküyor mu?", () => {
    const wrapper = mount(menuler, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("'KADIN SAAT'", () => {
        expect(Headers.text()).toContain("KADIN SAAT");
    });
    test("'ERKEK SAAT'", () => {
        expect(Headers.text()).toContain("ERKEK SAAT");
    });
    it("'AKILLI SAAT'", () => {
        expect(Headers.text()).toContain("AKILLI SAAT");
    });
    test("'MARKALAR'", () => {
        expect(Headers.text()).toContain("MARKALAR");
    });
    it("'TAKI & AKSESUAR'", () => {
        expect(Headers.text()).toContain("TAKI & AKSESUAR");
    });
    test("'FIRSAT'", () => {
        expect(Headers.text()).toContain("FIRSAT");
    });
    it("'ONLINE ÖZEL'", () => {
        expect(Headers.text()).toContain("ONLINE ÖZEL");
    });
    test('Örneği mi?', () => {
        const wrapper = mount(menuler)
        expect(wrapper.vm).toBeTruthy()
    })
});
test('console.log', () => {
    console.log(menuler)
})