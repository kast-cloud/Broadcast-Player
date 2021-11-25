<template>
  <div class="kc-broadcast-app">
    <div class="kc-broadcast-app__inner">
      <PodcastInfo></PodcastInfo>
      <div class="kl-episodes">
        <EpisodeLatestList></EpisodeLatestList>
        <EpisodeLatestSeries></EpisodeLatestSeries>
        <div class="kl-episodes__subscribe">
          <div class="kc-subscribe kc-subscribe--wide">
            <div class="kc-subscribe__cell">
              <h3 class="kc-subscribe__hdg">Subscribe to new episodes</h3>
            </div>
            <div class="kc-subscribe__cell">
              <label class="ko-label ku-show-sr ko-label--error ko-label--required">First
                name</label>
              <input type="text" class="ko-input ko-input--error" placeholder="First name"
                required="">
            </div>
            <div class="kc-subscribe__cell">
              <label class="ko-label ku-show-sr ko-label--required">Email address</label>
              <input type="email" class="ko-input" placeholder="Email address" required="">
            </div>
            <div class="kc-subscribe__cell">
              <button type="button" class="ko-button ko-button--form">Subscribe</button>
            </div>
          </div>
        </div>
        <EpisodeGrid></EpisodeGrid>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import PodcastInfo from '@/components/podcast_info.vue';
  import EpisodeLatestList from '@/components/episode_latest_list.vue';
  import EpisodeLatestSeries from '@/components/episode_latest_series.vue';
  import EpisodeGrid from '@/components/episode_grid.vue';
  Vue.use(require('vue-moment'));

  export default {
    name: 'Episode',
    components: {
      PodcastInfo,
      EpisodeLatestList,
      EpisodeLatestSeries,
      EpisodeGrid
    },
    mounted() {
      if (this.$route.params.isGridShow && this.$route.params.isGridShow == true) {
        document.getElementsByClassName("kl-episodes__all")[0].scrollIntoView();
      } else {
        document.getElementById('app').scrollIntoView();
      }
    },
  };

</script>
