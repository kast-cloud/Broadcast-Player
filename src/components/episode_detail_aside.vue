<template>
  <aside class="kl-broadcast-detail__aside">
    <article class="kc-series-card" v-if="episodeDetail.series">
      <a href="javascript:void(0)" class="kc-series-card__img-wrp">
        <img v-bind:src="seriesDetail.artworkUrlSml" v-bind:alt="seriesDetail.artworkAltText"
          class="kc-series-card__img">
      </a>
      <div class="kc-series-card__txt">
        <h1 class="kc-series-card__title"><a href="javascript:void(0)">{{seriesDetail.title}}</a>
        </h1>
        <div class="kc-series-card__sum">
          <p>{{seriesDetail.summary}}</p>
        </div>
        <router-link :to="{ name: 'episode', params: { isGridShow: true , viewGridType: 'Series'}}"
          class="ko-more">View
          series<i class="ki-chevron-alt-right"></i></router-link>
      </div>
    </article>
    <div class="kc-wdg--series-episodes" v-if="episodeDetail.series">
      <div class="kc-wdg__sec--hdr">
        <h2 class="kc-wdg__hdg">More episodes from this series</h2>
      </div>
      <div class="kc-wdg__sec--bdy">
        <ul class="kc-episode-list">
          <li v-for="episode in seriesDetail.episodes" v-if="episode.id !== episodeDetail.id">
            <EpisodeSummary v-bind:episode="episode"></EpisodeSummary>
          </li>
        </ul>
      </div>
      <div class="kc-wdg__sec--ftr">
        <router-link :to="{ name: 'episode', params: { isGridShow: true , viewGridType: 'Episodes' }}"
          class="ko-more">View
          all
          episodes<i class="ki-chevron-alt-right"></i></router-link>
      </div>
    </div>
    <EpisodeLatestList v-else></EpisodeLatestList>
    <SubscribeForm></SubscribeForm>
  </aside>
</template>

<script>
  import EpisodeSummary from '@/components/episode_summary.vue';
  import EpisodeLatestList from '@/components/episode_latest_list.vue';
  import SubscribeForm from '@/components/subscribe_form.vue';

  export default {
    name: 'EpisodeDetailAside',
    props: ["episodeDetail"],
    computed: {
      seriesDetail() {
        return this.$store.getters.getSeriesDetail
      },
    },
    methods: {
      getSeriesDetailById(id) {
        return this.$store.dispatch('getSeriesDetailById', {
          id: id
        })
      },
      //on Click View All episode Btn
      onClickViewAllEpisodeBtn() {
        this.$eventHub.$emit('onClickViewAllEpisodeBtn', 'Episodes');
      },

      onClickViewAllSeriesBtn() {

        this.$eventHub.$emit('onClickViewAllSeriesBtn', 'Series');
      }
    },
    beforeUpdate() {
      if (this.$store.getters.getEpisodeDetail.series) {
        this.getSeriesDetailById(this.$store.getters.getEpisodeDetail.series.id);
      }
      if (this.$router.currentRoute.name === 'episodeDetail') {
        const releasedLocalDate = new Date(this.episodeDetail.releasedLocal);
      }
      document.title = this.episodeDetail.title + " - " + releasedLocalDate;
    },
    components: {
      EpisodeSummary,
      EpisodeLatestList,
      SubscribeForm
    }
  };

</script>
