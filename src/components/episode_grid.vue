<template>
  <div class="kc-broadcast-list__bdy">
    <div class="kc-search">
      <div class="kc-search__cell--search">
        <form>
          <label for="episode-search" class="ko-label ku-show-sr">Search</label>
          <div class="input-group kc-search__input">
            <div class="input-group-button">
              <button type="submit" class="button kc-search__submit">
                <span class="ki-magnify"></span>
                <span class="ku-show-sr">Submit search</span>
              </button>
            </div>
            <input type="search" class="ko-input input-group-field" placeholder="Search Episodes">
          </div>
        </form>
      </div>
      <div class="kc-search__cell">
        View by:
        <button class="ko-button ko-button--view-type" v-on:click="onClickViewByButton()"
          type="button"
          data-toggle="view-options"
          aria-controls="view-options" data-is-focus="false" data-yeti-box="view-options"
          aria-haspopup="true" aria-expanded="false" id="dghlzu-dd-anchor">Episodes</button>
        <div class="kc-search__dropdown has-position-bottom has-alignment-right" id="view-options"
          data-dropdown="rtwzdu-dropdown" data-hover="false" data-close-on-click="true"
          data-v-offset="8" data-position="bottom" data-alignment="right" data-hover-pane="true"
          aria-labelledby="dghlzu-dd-anchor" aria-hidden="true" data-yeti-box="view-options"
          data-resize="view-options" data-events="resize">
          <ul class="vertical menu">
            <li><a href="#">Series</a></li>
            <li><a href="#">Series &amp; episodes</a></li>
            <li><a href="#">Episodes</a></li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="kc-episode-list kc-episode-list--full">
      <li v-for="episode in allEpisodes.items" v-bind:key="episode.id" >
      <EpisodeItem v-bind:episode="episode"></EpisodeItem>
      </li>
    </ul>
    <nav aria-label="Pagination" class="ko-pagination">
      <ul class="ko-pagination__list">

        <li v-if="allEpisodes.currentPage != 1" @click="onPageChange(allEpisodes.currentPage -1)"
          class="ko-pagination__prev">
          <span>Previous <span class="ku-show-sr">page</span></span></li>

        <li v-if="allEpisodes.currentPage == 1" class="ko-pagination__prev is-disabled">
          <span>Previous <span class="ku-show-sr">page</span></span></li>

        <li v-for="pageNumber in allEpisodes.pages" @click="onPageChange(pageNumber++)"
          :class="pageNumber == allEpisodes.currentPage ? 'ko-pagination__current' : ''">

          <span v-if="pageNumber == allEpisodes.currentPage" class="ku-show-sr">You're on
            page</span>

          <a v-if="pageNumber != allEpisodes.currentPage" href="javascript:void(0)"
            aria-label="Page 2">{{pageNumber}}</a>

          {{pageNumber==allEpisodes.currentPage?pageNumber:''}}
        </li>

        <li v-if="allEpisodes.pages && allEpisodes.pages.length != allEpisodes.currentPage"
          class="ko-pagination__next"><a href="javascript:void(0)" aria-label="Next page"
            @click="onPageChange(allEpisodes.currentPage +1)">Next<span
              class="ku-show-sr">page</span></a></li>

        <li v-if="allEpisodes.pages && allEpisodes.pages.length == allEpisodes.currentPage"
          class="ko-pagination__next">
          Next<span class="ku-show-sr">page</span></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import EpisodeItem from '@/components/episode_item.vue';

  export default {
    name: 'EpisodeGrid',
    computed: {
      allEpisodes() {
        return this.$store.getters.allEpisodes
      }
    },
    methods: {
      getAllEpisodes(currentPage) {
        return this.$store.dispatch('getAllEpisodes', {
          currentPage: currentPage
        })
      },
      onPageChange(currentPage) {
        this.getAllEpisodes(currentPage);
      },
      onClickViewByButton() {
      alert("working");
      },
    },
    beforeMount() {
      this.getAllEpisodes(1);
    },
    components: {
      EpisodeItem,
    }
  };

</script>
