import { mount, RouterLinkStub } from "@vue/test-utils"

import menuler from "~/components/Menuler.vue"


describe("Kategoriler gözüküyor mu?", () => {
    const menu-dropdown-icon = mount(menuler, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("'KADIN SAAT'", () => {
        expect(menu-dropdown-icon.text()).toContain("KADIN SAAT");
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
        expect(header.vm).toBeTruthy()
    })
});
test('console.log', () => {
    console.log(menuler)
})