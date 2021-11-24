<template>
  <article class="kc-series">
    <header class="kc-series__hdr">
      <img v-bind:src="seriesDetail.artworkUrlSml" v-bind:alt="seriesDetail.artworkAltText"
        class="kc-series__img">
      <div class="kc-series__txt">
        <h1 class="kc-series__title">{{seriesDetail.title}}</h1>
        <dl class="ko-keyvalue ko-keyvalue--value-only kc-series__info">
          <div class="kc-series__episodes">
            <dt>Episodes in series</dt>
            <dd>
              <i class="ki-info"></i> {{seriesDetail.totalEpisodes}} episodes <span
                v-if="seriesDetail.complete">(complete)</span>
            </dd>
          </div>
          <div class="kc-series__time">
            <dt>Total time</dt>
            <dd>
              <i class="ki-clock"></i>
              {{seriesDetail.duration | convertSecondsToHoursMinutes}}
            </dd>
          </div>
          <div class="kc-series__done kc-series__done--">
            <dt>Listened</dt>
            <dd>
              <i class="ki-headphones"></i><span class="ku-show-sr"></span>
            </dd>
          </div>
        </dl>
        <p v-html:bind="seriesDetail.content"></p>
      </div>
    </header>
    <div class="kc-series__bdy">
      <ul class="kc-episode-list kc-episode-list--">
        <li v-if="seriesDetail.episodes" v-for="episode in seriesDetail.episodes">
          <router-link :to="{ name: 'episodeDetail', params: { id: episode.id }}"
            class="kc-episode-item">
            <article class="kc-episode-item__inner">
              <div class="kc-episode-item__img-wrp">
                <img v-bind:src="episode.artworkUrlSml" v-bind:alt="episode.artworkAltText"
                  class="kc-episode-item__img">
              </div>
              <div class="kc-episode-item__txt">
                <h1 class="kc-episode-item__title">{{episode.title}}</h1>
                <dl class="ko-keyvalue ko-keyvalue--value-only">
                  <div class="kc-episode-item__author">
                    <dt>Author</dt>
                    <dd>{{episode.author}}</dd>
                  </div>
                  <div v-if="episode.series" class="kc-episode-item__series">
                    <dt>Series</dt>
                    <dd>{{episode.series.title}}</dd>
                  </div>
                </dl>
              </div>
              <dl class="ko-keyvalue ko-keyvalue--value-only kc-episode-item__info">
                <div class="kc-episode-item__released">
                  <dt>Recorded</dt>
                  <dd>
                    <time class="ko-datetime">
                      {{ episode.releasedLocal | moment("ddd Do MMM, YYYY") }}
                      <span class="kl-dt-separator">{{
                episode.releasedLocal | moment("h:mm a")
              }}</span></time>
                  </dd>
                </div>
                <div class="kc-episode-item__location">
                  <dt>Location</dt>
                  <dd>
                    <span v-if="episode.location"
                      class=" ko-badge ko-badge--location">{{episode.location.title}}</span>
                  </dd>
                </div>
                <div class="kc-episode-item__duration">
                  <dt>Duration</dt>
                  <dd>
                    <i class="ki-clock"></i> {{episode.duration | convertSecondsToHoursMinutes}}
                  </dd>
                </div>
                <div class="kc-episode-item__done kc-episode-item__done--false">
                  <dt>Listened</dt>
                  <dd>
                    <i class="ki-headphones"></i><span class="ku-show-sr">false</span>
                  </dd>
                </div>
              </dl>
            </article>
          </router-link>
          </li>
      </ul>
    </div>
  </article>
</template>

<script>
  export default {
    name: "BroadcastDetailMain",
    computed: {
      seriesDetail() {
        return this.$store.getters.getSeriesDetail;
      }
    },
    methods: {
      getSeriesDetail() {
        return this.$store.dispatch('getSeriesDetailById', {
          id: window.location.href.split('/').at(-1)
        })
      },
    },
    beforeMount() {
      this.getSeriesDetail();
    },
  };

</script>
