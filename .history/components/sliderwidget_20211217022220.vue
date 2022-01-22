<template>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
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
<style>

</style>