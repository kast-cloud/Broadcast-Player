<template>
  <div class="kc-podcast-info"
    v-if="podcastInfo && (podcastInfo.podcastDirectories || podcastInfo.rssUrl)">
    <div class="kc-podcast-info__cell--artwork">
      <img v-bind:src="podcastInfo.artworkUrlSml" v-bind:alt="podcastInfo.artworkAltText"
        class="kc-podcast-info__img">
    </div>
    <div class="kc-podcast-info__cell--txt">
      <div class="kc-podcast-info__title">{{ podcastInfo.title }}</div>
      <div class="kc-podcast-info__author">By {{ podcastInfo.author }}</div>
    </div>
    <div class="kc-podcast-info__cell--dir">

      <a v-for="podcastDirectorie in podcastInfo.podcastDirectories" target="_blank"
        :key="podcastDirectorie.order" v-bind:href="podcastDirectorie.url"
        class="kc-podcast-info__btn--img" v-bind:title="`Listen on ${podcastDirectorie.name}`">
        <img v-bind:src="podcastDirectorie.imageUrl"
          v-bind:alt="`Listen on ${podcastDirectorie.name}`">
        <span class="show-for-sr">Listen on {{podcastDirectorie.name}}</span>
      </a>

      <a v-if="podcastInfo.rssUrl" v-bind:href="podcastInfo.rssUrl"
        class="kc-podcast-info__btn kc-podcast-info__btn--rss"
        title="Click to view the RSS feed URL">
        <span class="ki-rss"></span>
        RSS
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'PodcastInfo',
    computed: {
      podcastInfo() {
        return this.$store.getters.podcastInfo
      }
    },
    methods: {
      getBroadcastInfo() {
        return this.$store.dispatch('getBroadcastInfo')
      },

    },
    beforeMount() {
      this.getBroadcastInfo()
    },
  };

</script>
