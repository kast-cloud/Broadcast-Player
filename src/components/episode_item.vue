<template>
  <router-link :to="{ name: 'episodeDetail', params: { id: episode.id, urlPath: episode.urlPath }}" class="kc-episode-item">
    <article class="kc-episode-item__inner">
      <div v-if="episode.artworkUrlSml" class="kc-episode-item__img-wrp">
        <img v-bind:src="episode.artworkUrlSml" v-bind:alt="episode.artworkAltText"
          class="kc-episode-item__img" />
      </div>
      <div class="kc-episode-item__txt">
        <h1 class="kc-episode-item__title">{{ episode.title }}</h1>
        <dl class="ko-keyvalue ko-keyvalue--value-only">
          <div v-if="episode.author" class="kc-episode-item__author">
            <dt>Author</dt>
            <dd>{{ episode.author }}</dd>
          </div>
          <div v-if="episode.series" class="kc-episode-item__series">
            <dt>Series</dt>
            <dd>{{ episode.series.title }}</dd>
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
        <div v-if="episode.location" class="kc-episode-item__location">
          <dt>Location</dt>
          <dd>
            <span class="ko-badge ko-badge--location">{{
              episode.location.title
            }}</span>
          </dd>
        </div>
        <div v-if="episode.duration" class="kc-episode-item__duration">
          <dt>Duration</dt>
          <dd><i class="ki-clock"></i> {{episode.duration | convertSecondsToHoursMinutes}}</dd>
        </div>
        <!-- <div class="kc-episode-item__done kc-episode-item__done--false">
            <dt>Listened</dt>
            <dd>
              <i class="ki-headphones"></i><span class="ku-show-sr">false</span>
            </dd>
          </div> -->
      </dl>
    </article>
  </router-link>
</template>

<script>
  export default {
    name: "EpisodeItem",
    props: ["episode"],
  };

</script>
