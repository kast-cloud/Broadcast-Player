<template>
  <article class="kc-series">
    <header class="kc-series__hdr">
      <div class="kc-series__img-wrp" v-if="seriesDetail.artworkUrlSml">
        <img :src="seriesDetail.artworkUrlSml" :alt="seriesDetail.artworkAltText" class="kc-series__img" />
      </div>
      <div class="kc-series__txt">
        <h1 class="kc-series__title">{{ seriesDetail.title }}</h1>
        <dl class="ko-keyvalue ko-keyvalue--value-only kc-series__info">
          <div class="kc-series__episodes">
            <dt>Episodes in series</dt>
            <dd>
              <i class="ki-info"></i> {{ seriesDetail.totalEpisodes }} episodes
              <span v-if="seriesDetail.complete">(complete)</span>
            </dd>
          </div>
          <div class="kc-series__time">
            <dt>Total time</dt>
            <dd>
              <i class="ki-clock"></i>
              {{ seriesDetail.duration | convertSecondsToHoursMinutes }}
            </dd>
          </div>
          <!-- <div class="kc-series__done kc-series__done--">
            <dt>Listened</dt>
            <dd>
              <i class="ki-headphones"></i><span class="ku-show-sr"></span>
            </dd>
          </div> -->
        </dl>
        <div class="kc-series__content" v-html="seriesDetail.content"></div>
      </div>
    </header>
    <div class="kc-series__bdy">
      <ul class="kc-episode-list kc-episode-list--series">
        <li v-for="episode in seriesDetail.episodes" v-bind:key="episode.id">
          <EpisodeItem v-bind:episode="episode"></EpisodeItem>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import EpisodeItem from "@/components/episode_item.vue";

export default {
  name: "BroadcastDetailMain",
  computed: {
    seriesDetail() {
      return this.$store.getters.getSeriesDetail;
    },
  },
  methods: {
    getSeriesDetail() {
      return this.$store.dispatch("getSeriesDetailById", {
        id: window.location.href.split("/").at(-1),
      });
    },
  },
  beforeMount() {
    this.getSeriesDetail();
  },
  mounted() {
    document.title = this.seriesDetail.title;
  },
  components: {
    EpisodeItem,
  },
};
</script>
