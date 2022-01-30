import { mount, RouterLinkStub } from "@vue/test-utils";
import footerContainer from "../components/footerContainer.vue";
describe("Footerın kontrolü", () => {
    const wrapper = mount(footerContainer, {
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });
    it("'Bizi Takip Edin!' yazısı görünüyor mu?", () => {
        expect(wrapper.text()).toContain("Bizi Takip Edin!");
    });
    it("'Saat ve Saat
    ' yazısı görünüyor mu?", () => {
      expect(wrapper.text()).toContain("Bizi Takip Edin!");
  });
  it("'Bizi Takip Edin!' yazısı görünüyor mu?", () => {
    expect(wrapper.text()).toContain("Bizi Takip Edin!");
});
it("'Bizi Takip Edin!' yazısı görünüyor mu?", () => {
  expect(wrapper.text()).toContain("Bizi Takip Edin!");
});
it("'Bizi Takip Edin!' yazısı görünüyor mu?", () => {
  expect(wrapper.text()).toContain("Bizi Takip Edin!");
});
it("'Bizi Takip Edin!' yazısı görünüyor mu?", () => {
  expect(wrapper.text()).toContain("Bizi Takip Edin!");
});
it("'Bizi Takip Edin!' yazısı görünüyor mu?", () => {
  expect(wrapper.text()).toContain("Bizi Takip Edin!");
});
    test('Vue Örneği mi?', () => {
        const wrapper = mount(footerContainer)
        expect(wrapper.vm).toBeTruthy()
    })
    test('console.log', () => {
        console.log(footerContainer)
    })
});