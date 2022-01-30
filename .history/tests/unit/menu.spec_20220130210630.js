import { shallowMount } from "@vue/test-utils"

import menuler from "~/components/Menuler.vue"


describe("Kategoriler gözüküyor mu?", () => {
    const wrapper = shallowMount(menuler, {
        
    });
   
        expect(wrapper.text()).toContain("KADIN SAAT");
   
   
        expect(wrapper.text()).toContain("ERKEK SAAT");
   
   
        expect(wrapper.text()).toContain("AKILLI SAAT");
    
   
        expect(wrapper.text()).toContain("MARKALAR");

        expect(wrapper.text()).toContain("TAKI & AKSESUAR");
   
        expect(wrapper.text()).toContain("FIRSAT");
    });
    it("ONLINE ÖZEL", () => {
        expect(wrapper.text()).toContain("ONLINE ÖZEL");
    });
    test('Örneği mi?', () => {
        const wrapper = mount(menuler)
        expect(wrapper.vm).toBeTruthy()
    })
});
test('console.log', () => {
    console.log(menuler)
})