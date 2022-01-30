import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex"
import sepet from "../components/sepet.vue";


describe("Sepetteki ürünler", () => {

  
  Sepet: [
    {
      "code":1,
      "adet":1,
      "id":"DZ1934",
      "marka":"Diesel",
      "ad":"DZ1934 Erkek Kol Saati",
      "ozellikler":"Çelik / Quartz Teknoloji / 44 mm Kasa Çapı / Yuvarlak Kasa Şekli / Mineral Cam Özellik / 5 ATM Su Geçirmezlik",
      "fiyat":712,
      "image_url":"https://cdn.saatvesaat.com.tr/media/catalog/product/d/z/dz1437_1_2.jpg",
      "cinsiyet":"Bayan, Erkek"
  },
  {
      "code":2,
      "adet":2,
      "id":"DZ1819",
      "marka":"Diesel",
      "ad":"DZ1819 Kol Saati",
      "ozellikler":"Silikon / Quartz Teknoloji / 45 mm Kasa Çapı / Yuvarlak Kasa Şekli / Mineral Cam Özellik / 10 ATM Su Geçirmezlik",
      "fiyat":715,
      "image_url":"https://cdn.saatvesaat.com.tr/media/catalog/product/d/z/dz1819_1.jpg",
      "cinsiyet":"Bayan, Erkek"
  },
  {
      "code":3,
      "adet":2,
      "id":"WRS406",
      "marka":"Welder Moody Watch",
      "ad":"WRS406 42 mm Slim Kol Saati",
      "ozellikler":"Çelik / Quartz Teknoloji / 42 mm Kasa Çapı / Yuvarlak Kasa Şekli / Mineral Photochromic Cam Özellik / 3 ATM Su Geçirmezlik",
      "fiyat":1930,
      "image_url":"https://cdn.saatvesaat.com.tr/media/catalog/product/w/r/wrs406_1.jpg",
      "cinsiyet":"Bayan, Erkek"
  },
  ]
            products: [
              {
                "code":1,
                "id":"DZ1934",
                "marka":"Diesel",
                "ad":"DZ1934 Erkek Kol Saati",
                "ozellikler":"Çelik / Quartz Teknoloji / 44 mm Kasa Çapı / Yuvarlak Kasa Şekli / Mineral Cam Özellik / 5 ATM Su Geçirmezlik",
                "fiyat":712,
                "image_url":"https://cdn.saatvesaat.com.tr/media/catalog/product/d/z/dz1437_1_2.jpg",
                "cinsiyet":"Bayan, Erkek"
            },
            {
                "code":2,
                "id":"DZ1819",
                "marka":"Diesel",
                "ad":"DZ1819 Kol Saati",
                "ozellikler":"Silikon / Quartz Teknoloji / 45 mm Kasa Çapı / Yuvarlak Kasa Şekli / Mineral Cam Özellik / 10 ATM Su Geçirmezlik",
                "fiyat":715,
                "image_url":"https://cdn.saatvesaat.com.tr/media/catalog/product/d/z/dz1819_1.jpg",
                "cinsiyet":"Bayan, Erkek"
            },
            {
                "code":3,
                "id":"WRS406",
                "marka":"Welder Moody Watch",
                "ad":"WRS406 42 mm Slim Kol Saati",
                "ozellikler":"Çelik / Quartz Teknoloji / 42 mm Kasa Çapı / Yuvarlak Kasa Şekli / Mineral Photochromic Cam Özellik / 3 ATM Su Geçirmezlik",
                "fiyat":1930,
                "image_url":"https://cdn.saatvesaat.com.tr/media/catalog/product/w/r/wrs406_1.jpg",
                "cinsiyet":"Bayan, Erkek"
            },
            ]
        },
      
  

    )
    const wrapper = mount(Sepet, {
        stubs: {
            NuxtLink: RouterLinkStub
        },
    })
    describe("Sepettekiler", () => {
        it("deneme", () => {
            expect(1 + 1).toBe(2);
        });
        it("Sepet text", () => {
            expect(wrapper.text()).toContain("Sepet");
        });
        it("Ürün: iPhone 11 64 Gb Siyah :", () => {
            expect(wrapper.text()).toContain("iPhone 11 64 Gb Siyah");
        });

        it("Ürün 2'nin code'u : LENOVO TAB M7 MTK 8321 1.3GHZ-2GB-32GB-BT-7'-CAM- ANDROID PIE", () => {
            expect(wrapper.text()).toContain("LENOVO TAB M7 MTK 8321 1.3GHZ-2GB-32GB-BT-7'-CAM- ANDROID PIE");
        });
        it("Ürün 3'ün fiyatı : ASUS X515MA CELERON N4020 1.1GHZ-4GB RAM-128GB SSD-15.6''-W10 NOTEBOOK", () => {
            expect(wrapper.text()).toContain("ASUS X515MA CELERON N4020 1.1GHZ-4GB RAM-128GB SSD-15.6''-W10 NOTEBOOK");
        });
    });
})