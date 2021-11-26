<template>
  <div class="kc-broadcast-app">
    <div class="kc-broadcast-app__inner">
      <PodcastInfo></PodcastInfo>
      <div class="kl-broadcast-detail">
        <div class="kl-broadcast-detail__hdr">
          <router-link
            :to="{ name: 'episode', params: { isGridShow: true , viewGridType: 'Episodes' }}"
            class="ko-back"><i class="ki-chevron-alt-left"></i>Back to
            list</router-link>
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
        return this.$store.getters.getEpisodeDetail
      }
    },
    methods: {
      getEpisodeDetailById(id) {
        return this.$store.dispatch('getById', {
          id: id
        })
      },
    },
    beforeMount() {
      this.getEpisodeDetailById(window.location.href.split('/').at(-1));
    },
    mounted() {
      document.getElementById('app').scrollIntoView();
    },
    components: {
      PodcastInfo,
      EpisodeDetailAside,
      EpisodeDetailMain
    },
  };

</script>
