<template>
  <article class="kc-series-item">
    <header class="kc-series-item__hdr">
      <div class="kc-series-item__img-wrp" v-if="series.artworkUrlLrg">
        <img v-bind:src="series.artworkUrlLrg" v-bind:alt="series.artworkAltText"
          class="kc-series-item__img" />
      </div>
      <div class="kc-series-item__txt">
        <h1 class="kc-series-item__title">{{ series.title }}</h1>
        <dl class="ko-keyvalue ko-keyvalue--value-only kc-series-item__info">
          <div class="kc-series-card__episodes">
            <dt>Episodes in series</dt>
            <dd>
              <i class="ki-info"></i> {{ series.totalEpisodes }} episodes
              <span v-if="series.complete">(complete)</span>
            </dd>
          </div>
          <div class="kc-series-card__time">
            <dt>Total time</dt>
            <dd>
              <i class="ki-clock"></i>
              {{ series.duration | convertSecondsToHoursMinutes }}
            </dd>
          </div>
          <!-- <div class="kc-series-card__done kc-series-card__done--">
            <dt>Listened</dt>
            <dd>
              <i class="ki-headphones"></i><span class="ku-show-sr"></span>
            </dd>
          </div> -->
        </dl>
        <p>{{ series.summary }}</p>
        <router-link
          :to="{ name: 'seriesDetail', params: { id: series.id , urlPath: series.urlPath}}"
          class="ko-more">Learn
          more<i class="ki-chevron-alt-right"></i></router-link>
      </div>
    </header>
    <table class="ko-episode-tbl">
      <thead>
        <tr>
          <th>Episode number</th>
          <th>Title / Author</th>
          <th>Recorded on</th>
          <th>Duration</th>
          <th>Listened</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(episode, index) in sortedEpisodes" @click="goToEpisodeDetailPage(episode.id)">
          <td class="ko-episode-tbl__num">
            {{ index | formatNumber }}
          </td>
          <td class="ko-episode-tbl__title">
            {{ episode.title }}
            <span v-if="episode.author">- {{ episode.author }}</span>
          </td>
          <td class="ko-episode-tbl__date">
            <time class="ko-datetime">
              {{episode.releasedLocal | moment("ddd Do MMM, YYYY")}} <span
                class="kl-dt-separator">{{episode.releasedLocal | moment("h:mm a")}}</span>
            </time>
          </td>
          <td class="ko-episode-tbl__time">
            <i class="ki-clock"></i>
            {{ episode.duration | convertSecondsToHoursMinutes }}
          </td>
          <!-- <td class="ko-episode-tbl__done ko-episode-tbl__done--false">
            <i class="ki-headphones"></i><span class="ku-show-sr">false</span>
          </td> -->
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
  export default {
    name: "SeriesItem",
    props: ["series"],
    computed: {
      sortedEpisodes() {
        if (this.series.episodes) {
          return this.series.episodes.sort(
            (a, b) => new Date(a.releasedUtc) - new Date(b.releasedUtc)
          );
        }
      },
    },
    methods: {
      goToEpisodeDetailPage(episodeId) {
        this.$router.push('episode/' + episodeId);
      }
    },
  };

</script>
