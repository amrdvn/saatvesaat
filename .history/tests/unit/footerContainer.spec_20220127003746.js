import { mount, RouterLinkStub } from "@vue/test-utils";
import footerContainer from "../unit";
describe("Footerın kontrolü", () => {
    const wrapper = mount(footerContainer, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("'Bizi Takip Edin!' yazısı görünüyor mu?", () => {
        expect(wrapper.text()).toContain("Bizi Takip Edin!");
    });
    it("'Saat ve Saat' yazısı görünüyor mu?", () => {
      expect(wrapper.text()).toContain("Saat ve Saat");
  });
  it("'Müşteri Hizmetleri' yazısı görünüyor mu?", () => {
    expect(wrapper.text()).toContain("Müşteri Hizmetleri");
});
it("'Kategoriler' yazısı görünüyor mu?", () => {
  expect(wrapper.text()).toContain("Kategoriler");
});
it("'Fırsat Bülteni' yazısı görünüyor mu?", () => {
  expect(wrapper.text()).toContain("Fırsat Bülteni");
});
it("'Bizi Takip Edin!' yazısı görünüyor mu?", () => {
  expect(wrapper.text()).toContain("Bizi Takip Edin!");
});
it("'İletişim' yazısı görünüyor mu?", () => {
  expect(wrapper.text()).toContain("İletişim");
});
    test('Vue Örneği mi?', () => {
        const wrapper = mount(footerContainer)
        expect(wrapper.vm).toBeTruthy()
    })
    test('console.log', () => {
        console.log(footerContainer)
    })
});