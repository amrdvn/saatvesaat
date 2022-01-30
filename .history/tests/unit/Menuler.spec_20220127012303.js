import { mount, RouterLinkStub } from "@vue/test-utils"

import menuler from "~/components/Menuler.vue"


describe("Kategoriler gözüküyor mu?", () => {
    const header = mount(menuler, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("'KADIN SAAT'", () => {
        expect(header.text()).toContain("KADIN SAAT");
    });
    test("'ERKEK SAAT'", () => {
        expect(header.text()).toContain("ERKEK SAAT");
    });
    it("'AKILLI SAAT'", () => {
        expect(header.text()).toContain("AKILLI SAAT");
    });
    test("'MARKALAR'", () => {
        expect(header.text()).toContain("MARKALAR");
    });
    it("'TAKI & AKSESUAR'", () => {
        expect(header.text()).toContain("TAKI & AKSESUAR");
    });
    test("'FIRSAT'", () => {
        expect(header.text()).toContain("FIRSAT");
    });
    it("'ONLINE ÖZEL'", () => {
        expect(header.text()).toContain("ONLINE ÖZEL");
    });
    test('Örneği mi?', () => {
        const header = mount(menuler)
        expect(wrapper.vm).toBeTruthy()
    })
});
test('console.log', () => {
    console.log(menuler)
})