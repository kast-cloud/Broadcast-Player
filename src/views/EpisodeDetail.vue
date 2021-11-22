<template>
  <div class="kc-broadcast-app">
    <div class="kc-broadcast-app__inner">
      <PodcastInfo></PodcastInfo>
      <div class="kl-broadcast-detail">
        <div class="kl-broadcast-detail__hdr">
          <a href="episodes.html#list" class="ko-back"><i class="ki-chevron-alt-left"></i>Back to
            list</a>
        </div>
        <EpisodeDetailAside v-bind:episodeDetail="episodeDetail"></EpisodeDetailAside>
        <div class="kl-broadcast-detail__line"></div>
        <EpisodeDetailMain v-bind:episodeDetail="episodeDetail"></EpisodeDetailMain>
      </div>
    </div>
  </div>
</template>

<script>
  import PodcastInfo from '@/components/podcast_info.vue';
  import EpisodeDetailAside from '@/components/episode_detail_aside.vue';
  import EpisodeDetailMain from '@/components/episode_detail_main.vue';


  export default {
    name: 'EpisodeDetail',
    computed: {
      episodeDetail() {
        return this.$store.getters.episodeDetail
      }
    },
    methods: {
      getEpisodeDetail() {
        return this.$store.dispatch('getById', {
          id: window.location.href.split('/').at(-1)
        })
      },
    },
    beforeMount() {
      this.getEpisodeDetail();
    },
    components: {
      PodcastInfo,
      EpisodeDetailAside,
      EpisodeDetailMain
    }
  };

</script>
