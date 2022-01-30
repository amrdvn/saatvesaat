import { shallowMount } from "@vue/test-utils"
import { iterator } from "core-js/fn/symbol";

import menuler from "~/components/Menuler.vue"


describe("Kategoriler gözüküyor mu?", () => {
    it("Kategoriler :",())
    const wrapper = shallowMount(menuler, {

    });

    expect(wrapper.text()).toMatch("KADIN SAAT");


    expect(wrapper.text()).toMatch("ERKEK SAAT");


    expect(wrapper.text()).toMatch("AKILLI SAAT");


    expect(wrapper.text()).toMatch("MARKALAR");

    expect(wrapper.text()).toMatch("TAKI & AKSESUAR");

    expect(wrapper.text()).toMatch("FIRSAT");

    expect(wrapper.text()).toMatch("ONLINE ÖZEL");


})
})
test('console.log', () => {
    console.log(menuler)
})