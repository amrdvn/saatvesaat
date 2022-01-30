import { mount } from "@vue/test-utils"

import menuler from "~/components/Menuler.vue"


describe("Kategoriler gözüküyor mu?", () => {
    
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
        const Headers = mount(menuler)
        expect(Headers.vm).toBeTruthy()
    })
});
test('console.log', () => {
    console.log(menuler)
})