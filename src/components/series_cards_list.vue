<template>
  <ul class="kc-series-list kc-series-list--cards">
    <li>
      <EpisodeSummary></EpisodeSummary>
    </li>
  </ul>
</template>

<script>
  import SeriesCard from '@/components/series_card.vue';

  export default {
    name: 'SeriesCardsList',
    components: {
      SeriesCard,
    }
  };

</script>
