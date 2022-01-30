import { mount } from "@vue/test-utils"

import menuler from "~/components/Menuler.vue"


describe("Kategoriler gözüküyor mu?", () => {
    
    it('Kategoriler gözüküyor mu?', () => {
        const wrapper=mount(menuler,{})
        expect(wrapper.text()).toMatch("KADIN SAAT");
    
        expect(wrapper.text()).toMatch("ERKEK SAAT");
    
        expect(wrapper.text()).toMatch("AKILLI SAAT");
    
        expect(wrapper.text()).toMatch("MARKALAR");
    
        expect(wrapper.text()).toMatch("TAKI & AKSESUAR");
   
        expect(wrapper.text()).toMatch("FIRSAT");
  
        expect(wrapper.text()).toMatch("ONLINE ÖZEL");
   
    
    })
});
test('console.log', () => {
    console.log(menuler)
})