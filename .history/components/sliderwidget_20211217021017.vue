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
    data: () => ({
      model: 0,
      colors: [
        './assets/sliderResimler/1.jpg',
        './assets/sliderResimler/2.jpg',
        './assets/sliderResimler/3.jpg',
        './assets/sliderResimler/4.jpg',
        './assets/sliderResimler/5.jpg',
        './assets/sliderResimler/6.jpg',
      ],
    }),
  }
</script>