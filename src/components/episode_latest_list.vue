<template>
  <div class="kl-episodes__latest">
    <div class="kc-wdg--latest-episodes">
      <div class="kc-wdg__sec--hdr">
        <h2 class="kc-wdg__hdg">Latest episodes</h2>
      </div>
      <div class="kc-wdg__sec--bdy">
        <ul class="kc-episode-list">
          <li v-for="episode in latestEpisodes.items" v-bind:key="episode.id">
            <EpisodeSummary v-bind:episode="episode"></EpisodeSummary>
          </li>
        </ul>
      </div>
      <div class="kc-wdg__sec--ftr">
        <a href="#" class="ko-more">View all episodes<i class="ki-chevron-alt-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import EpisodeSummary from '@/components/episode_summary.vue';

  export default {
    name: 'EpisodeLatestList',
    computed: {
      latestEpisodes() {
        return this.$store.getters.latestEpisodes
      }
    },
    methods: {
      getLatestEpisodes() {
        return this.$store.dispatch('getLatestEpisodes')
      },

    },
    beforeMount() {
      this.getLatestEpisodes()
    },
    components: {
      EpisodeSummary,
    }
  };

</script>
