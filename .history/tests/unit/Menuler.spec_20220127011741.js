import { mount } from "@vue/test-utils"

import menuler from "~/components/Menuler.vue"


describe("Kategoriler gözüküyor mu?", () => {
    
    it("'KADIN SAAT'", () => {
        const wrapper=mount(menuler,{})
        expect(Headers.text()).toContain("KADIN SAAT");
    
        expect(Headers.text()).toContain("ERKEK SAAT");
    
        expect(Headers.text()).toContain("AKILLI SAAT");
    
        expect(Headers.text()).toContain("MARKALAR");
    
        expect(Headers.text()).toContain("TAKI & AKSESUAR");
   
        expect(Headers.text()).toContain("FIRSAT");
  
        expect(Headers.text()).toContain("ONLINE ÖZEL");
   
        const Headers = mount(menuler)
        expect(Headers.vm).toBeTruthy()
    })
});
test('console.log', () => {
    console.log(menuler)
})