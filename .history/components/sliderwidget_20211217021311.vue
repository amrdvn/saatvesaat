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
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>