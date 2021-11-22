<template>
  <aside class="kl-broadcast-detail__aside">
    <article class="kc-series-card" v-if="episodeDetail.series">
      <a href="javascript:void(0)" class="kc-series-card__img-wrp">
        <img v-bind:src="seriesDetail.artworkUrlSml" v-bind:alt="seriesDetail.title"
          class="kc-series-card__img">
      </a>
      <div class="kc-series-card__txt">
        <h1 class="kc-series-card__title"><a href="javascript:void(0)">{{seriesDetail.title}}</a>
        </h1>
        <div class="kc-series-card__sum">
          <p>{{seriesDetail.summary}}</p>
        </div>
        <a href="javascript:void(0)" class="ko-more">View series<i
            class="ki-chevron-alt-right"></i></a>
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
        <a href="episodes.html#list" class="ko-more">View all episodes<i
            class="ki-chevron-alt-right"></i></a>
      </div>
    </div>
    <EpisodeLatestList v-else></EpisodeLatestList>
    <div class="kc-subscribe">
      <div class="kc-subscribe__cell">
        <h3 class="kc-subscribe__hdg">Subscribe to new episodes</h3>
      </div>
      <div class="kc-subscribe__cell">
        <label class="ko-label ku-show-sr ko-label--error ko-label--required">First name</label>
        <input type="text" class="ko-input ko-input--error" placeholder="First name" required="">
        <!-- <div class="ko-validation">
                                First name is required.
                            </div> -->
      </div>
      <div class="kc-subscribe__cell">
        <label class="ko-label ku-show-sr ko-label--required">Email address</label>
        <input type="email" class="ko-input" placeholder="Email address" required="">
      </div>
      <div class="kc-subscribe__cell">
        <button type="button" class="ko-button ko-button--form">Subscribe</button>
      </div>
    </div>
  </aside>
</template>

<script>
  import EpisodeSummary from '@/components/episode_summary.vue';
  import EpisodeLatestList from '@/components/episode_latest_list.vue';
  export default {
    name: 'EpisodeDetailAside',
    props: ["episodeDetail"],
    computed: {
      seriesDetail() {
        return this.$store.getters.getSeriesDetail
      }
    },
    methods: {
      getSeriesDetailById(seriesId) {
        return this.$store.dispatch('getSeriesDetailById', {
          seriesId: seriesId
        })
      },

    },
    beforeMount() {
      this.getSeriesDetailById('');
    },
    components: {
      EpisodeSummary,
      EpisodeLatestList
    }
  };

</script>
