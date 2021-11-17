<template>
  <div class="kl-episodes__latest">
    <div class="kc-wdg--latest-episodes">
      <div class="kc-wdg__sec--hdr">
        <h2 class="kc-wdg__hdg">Latest episodes</h2>
      </div>
      <div class="kc-wdg__sec--bdy">
        <ul class="kc-episode-list">
          <li v-for="episode in latestEpisodes.items"><a href="#" class="kc-episode-sum">
              <article class="kc-episode-sum__inner">
                <div class="kc-episode-sum__img-wrp">
                  <img v-bind:src="episode.artworkUrlSml" v-bind:alt="episode.title"
                    class="kc-episode-sum__img">
                </div>
                <div class="kc-episode-sum__txt">
                  <h1 class="kc-episode-sum__title">{{episode.title}}</h1>
                  <dl class="ko-keyvalue ko-keyvalue--value-only kc-episode-sum__info">
                    <div class="kc-episode-sum__released">
                      <dt>Recorded</dt>
                      <dd>
                        <time class="ko-datetime">
                          {{episode.releasedUtc | moment("ddd Do MMMM")}} <span
                            class="kl-dt-separator">{{episode.releasedUtc | moment("h:mm a")}}</span></time>
                      </dd>
                    </div>
                    <div class="kc-episode-sum__author">
                      <dt>Author</dt>
                      <dd>{{episode.author}}</dd>
                    </div>
                    <div class="kc-episode-sum__series" v-if="episode.series">
                      <dt>Series</dt>
                      <dd>{{episode.series.title}}</dd>
                    </div>
                    <div class="kc-episode-sum__location" v-if="episode.location">
                      <dt>Location</dt>
                      <dd>
                        <span class="ko-badge ko-badge--location">{{episode.location.title}}</span>
                      </dd>
                    </div>
                    <div class="kc-episode-sum__duration" v-if="episode.audio">
                      <dt>Duration</dt>
                      <dd>
                        <i class="ki-clock"></i> {{episode.audio.duration}} min
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </a></li>
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
  Vue.use(require('vue-moment'));
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
  };

</script>
