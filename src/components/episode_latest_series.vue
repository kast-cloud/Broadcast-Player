<template>
  <div class="kl-episodes__series">
    <div class="kc-wdg--latest-series">

      <h2 class="kc-wdg__hdg">Latest series</h2>
      <article class="kc-series-item">
        <header class="kc-series-item__hdr">
          <div class="kc-series-item__img-wrp" v-if="latestSeries.artworkUrlSml">
            <img v-bind:src="latestSeries.artworkUrlSml" v-bind:alt="latestSeries.artworkAltText"
              class="kc-series-item__img">
          </div>
          <div class="kc-series-item__txt">
            <h1 class="kc-series-item__title">{{latestSeries.title}}</h1>
            <dl class="ko-keyvalue ko-keyvalue--value-only kc-series-item__info">
              <div class="kc-series-card__episodes">
                <dt>Episodes in series</dt>
                <dd>
                  <i class="ki-info"></i>
                  {{latestSeries.totalEpisodes}}
                  episodes <span v-if="latestSeries.complete">(complete)</span>
                </dd>
              </div>
              <div class="kc-series-card__time">
                <dt>Total time</dt>
                <dd>
                  <i class="ki-clock"></i> 3h 35min
                </dd>
              </div>
              <!-- <div class="kc-series-card__done kc-series-card__done--true">
                <dt>Listened</dt>
                <dd>
                  <i class="ki-headphones"></i><span class="ku-show-sr">true</span>
                </dd>
              </div> -->
            </dl>
            <p>{{latestSeries.summary}}</p>
            <a href="#" class="ko-more">Learn more<i class="ki-chevron-alt-right"></i></a>
          </div>
        </header>
        <div class="kc-series-item__bdy">
          <table class="ko-episode-tbl">
            <thead>
              <tr>
                <th>
                  Episode number
                </th>
                <th>
                  Title / Author
                </th>
                <th>
                  Recorded
                </th>
                <th>
                  Duration
                </th>
                <th>
                  Listened
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(episode, index) in latestSeries.episodes" onclick="location.href='#'"
                v-bind:key="episode.id">
                <td class="ko-episode-tbl__num">
                  {{index | formatNumber}}
                </td>
                <td class="ko-episode-tbl__title">
                  {{episode.title}} <span v-if="episode.author">- {{episode.author}}</span>
                </td>
                <td class="ko-episode-tbl__date">
                  <time class="ko-datetime">
                    {{episode.releasedLocal | moment("ddd Do MMM, YYYY")}} <span
                      class="kl-dt-separator">{{episode.releasedLocal | moment("h:mm a")}}</span></time>
                </td>
                <td class="ko-episode-tbl__time">
                  <i class="ki-clock"></i> {{episode.duration | convertSecondsToHoursMinutes}}
                </td>
                <!-- <td class="ko-episode-tbl__done ko-episode-tbl__done--false">
                  <i class="ki-headphones"></i><span class="ku-show-sr">{{episode.hasAudio}}</span>
                </td> -->
              </tr>

            </tbody>
          </table>
        </div>
        <div class="kc-series-item__ftr">
          <a href="#" class="ko-more">View full series <i class="ki-chevron-alt-right"></i></a>
        </div>
      </article>


      
      <div class="kc-wdg__sec--hdr">
        <h2 class="kc-wdg__hdg">Latest series</h2>
      </div>
      <div class="kc-wdg__sec--bdy">
        <SeriesItem v-bind:series="latestSeries"></SeriesItem>
      </div>
      <div class="kc-wdg__sec--ftr">
        <a href="#" class="ko-more">
          View full series <i class="ki-chevron-alt-right"></i>
        </a>
      </div>



    </div>
  </div>
</template>

<script>
import SeriesItem from "@/components/series_item.vue";

export default {
  name: "EpisodeLatestSeries",
  computed: {
    latestSeries() {
      return this.$store.getters.latestSeries;
    },
  },
  methods: {
    getLatestSeries() {
      return this.$store.dispatch("getLatestSeries");
    },
  },
  beforeMount() {
    this.getLatestSeries();
  },
  components: {
    SeriesItem,
  },
};
</script>
