<template>
  <div class="kl-episodes__series">
    <div class="kc-wdg--latest-series">
      <div class="kc-wdg__sec--hdr">
        <h2 class="kc-wdg__hdg">Latest series</h2>
      </div>
      <div class="kc-wdg__sec--bdy">
        <SeriesItem v-bind:series="latestSeries"></SeriesItem>
      </div>
      <div class="kc-wdg__sec--ftr">
        <a href="#" class="ko-more">
          View full series <i class="ki-chevron-alt-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesItem from "@/components/series_item.vue";

export default {
  name: "EpisodeLatestSeries",
  computed: {
    latestSeries() {
      return this.$store.getters.latestSeries;
    },
  },
  methods: {
    getLatestSeries() {
      return this.$store.dispatch("getLatestSeries");
    },
  },
  beforeMount() {
    this.getLatestSeries();
  },
  components: {
    SeriesItem,
  },
};
</script>
