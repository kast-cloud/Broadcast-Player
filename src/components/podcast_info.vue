<template>
  <div class="kc-podcast-info" v-if="podcastInfo">
    <div class="kc-podcast-info__cell--artwork">
      <img v-bind:src="podcastInfo.artworkUrlSml" alt="" class="kc-podcast-info__img">
    </div>
    <div class="kc-podcast-info__cell--txt">
      <div class="kc-podcast-info__title">{{ podcastInfo.title }}</div>
      <div class="kc-podcast-info__author">By {{ podcastInfo.author }}</div>
    </div>
    <div class="kc-podcast-info__cell--dir">
      <a v-for="item in podcastInfo.podcastDirectories" :key="item.order" v-bind:href="item.url"
        class="kc-podcast-info__btn--img" v-bind:title="`Listen on ${item.name}`">
        <img v-bind:src="item.imageUrl" v-bind:alt="`Listen on ${item.name}`">
        <span class="show-for-sr">Listen on {{item.name}}</span>
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
