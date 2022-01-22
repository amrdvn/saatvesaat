<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.saatvesaat.com.tr/media/mnmcms/widgetSeventyNine/d-1366X504-61b33a90a1982.jpg',
          },
          {
            src: 'https://cdn.saatvesaat.com.tr/media/mnmcms/widgetSeventyNine/mk-des-61adb5e392022.jpg',
          },
          {
            src: 'https://cdn.saatvesaat.com.tr/media/mnmcms/widgetSeventyNine/d-fossil-gen6-61af600b7ba60.jpg',
          },
          {
            src: 'https://cdn.saatvesaat.com.tr/media/mnmcms/widgetSeventyNine/d-huawei-61b09aef5cb7d.jpg',
          },
        ],
      }
    },
  }
</script>
<sty>