<template>
  <div>
    <b-carousel
      :interval="3000"
      fade
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide
        v-for="(img, n) in endpoint"
        :key="n"
        :caption="legend"
        :text="legend"
        :img-src="entrypoint + img"
        img-width="800"
        img-height="600"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    legend: String,
    entrypoint: String,
    endpoint: Array,
  },
};
</script>

<style>
</style>