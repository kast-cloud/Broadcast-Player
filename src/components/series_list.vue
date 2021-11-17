<template>
  <ul class="kc-series-list">
    <li>
      <SeriesItem></SeriesItem>
    </li>
  </ul>
</template>

<script>
  import SeriesItem from '@/components/series_item.vue';

  export default {
    name: 'SeriesItem',
    components: {
      SeriesItem,
    }
  };

</script>
