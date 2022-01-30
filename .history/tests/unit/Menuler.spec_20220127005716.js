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
        expect(wrapper.text()).toContain("Bilgisayar Parçaları");
    });
    it("'Foto, Kamera'?", () => {
        expect(wrapper.text()).toContain("Foto, Kamera");
    });
    test("'Ofis, Kırtasiye'", () => {
        expect(wrapper.text()).toContain("Ofis, Kırtasiye");
    });
    it("'Aksesuar'", () => {
        expect(wrapper.text()).toContain("Aksesuar");
    });
    test("'Oyun, Hobi'", () => {
        expect(wrapper.text()).toContain("Oyun, Hobi");
    });
    it("'Ev, Mutfak'", () => {
        expect(wrapper.text()).toContain("Ev, Mutfak");
    });
    test("'Kişisel Bakım'", () => {
        expect(wrapper.text()).toContain("Kişisel Bakım");
    });
    it("'Spor, Outdoor'", () => {
        expect(wrapper.text()).toContain("Spor, Outdoor");
    });
    test('Vue Örneği mi?', () => {
        const wrapper = mount(PageHeaderCategories)
        expect(wrapper.vm).toBeTruthy()
    })
});
test('console.log', () => {
    console.log(PageHeaderCategories)
})