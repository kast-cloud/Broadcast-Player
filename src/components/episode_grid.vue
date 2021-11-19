<template>
  <div class="kl-episodes__all">
    <div class="kc-broadcast-list">
      <div class="kc-broadcast-list__hdr">
        <h2 class="kc-broadcast-list__hdg">All {{selectedViewType}}</h2>
        <div class="kc-broadcast-list__sub-hdg">By City Lights Church</div>
      </div>
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
                <input type="search" class="ko-input input-group-field"
                  placeholder="Search Episodes">
              </div>
            </form>
          </div>
          <div class="kc-search__cell">
            View by:
            <button class="ko-button ko-button--view-type"
              @click="viewByBtnToogle = !viewByBtnToogle" v-bind:class="{hover: viewByBtnToogle}"
              type="button" data-toggle="view-options" aria-controls="view-options"
              data-is-focus="false" data-yeti-box="view-options" aria-haspopup="true"
              aria-expanded="false" id="dghlzu-dd-anchor">{{selectedViewType}}</button>
            <div class="kc-search__dropdown has-position-bottom has-alignment-right"
              v-bind:class="{'is-open': viewByBtnToogle}" id="view-options"
              data-dropdown="rtwzdu-dropdown" data-hover="false" data-close-on-click="true"
              data-v-offset="8" data-position="bottom" data-alignment="right" data-hover-pane="true"
              aria-labelledby="dghlzu-dd-anchor" aria-hidden="true" data-yeti-box="view-options"
              data-resize="view-options" data-events="resize">
              <ul class="vertical menu">
                <li @click="onChangeViewByDdl('Series')"><a href="javascript:void(0)">Series</a>
                </li>
                <li @click="onChangeViewByDdl('Series & episodes')"><a
                    href="javascript:void(0)">Series
                    &amp; episodes</a></li>
                <li @click="onChangeViewByDdl('Episodes')"><a href="javascript:void(0)">Episodes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!--show episode grid items if the view by type is episodes-->
        <ul v-if="selectedViewType == 'Episodes'" class="kc-episode-list kc-episode-list--full">
          <li v-for="episode in episodesGridData.items" v-bind:key="episode.id">
            <EpisodeItem v-bind:episode="episode"></EpisodeItem>
          </li>
        </ul>

        <!--show series with episodes grid if the view by type is series & episodes-->
        <ul v-if="selectedViewType == 'Series & episodes'" class="kc-series-list">
          <li v-for="series in episodesGridData.items" v-bind:key="series.id">
            <SeriesItem v-bind:series="series"></SeriesItem>
          </li>
        </ul>

        <!--show series cards list  if the view by type is series-->
        <ul v-if="selectedViewType == 'Series'" class="kc-series-list kc-series-list--cards">
          <li v-for="series in episodesGridData.items" v-bind:key="series.id">
            <SeriesCard v-bind:series="series"></SeriesCard>
          </li>
        </ul>

        <nav aria-label="Pagination" class="ko-pagination">
          <ul class="ko-pagination__list">

            <li v-if="episodesGridData.currentPage != 1"
              @click="onPageChange(episodesGridData.currentPage -1)" class="ko-pagination__prev">
              <span>Previous <span class="ku-show-sr">page</span></span></li>

            <li v-if="episodesGridData.currentPage == 1" class="ko-pagination__prev is-disabled">
              <span>Previous <span class="ku-show-sr">page</span></span></li>

            <li v-for="pageNumber in episodesGridData.pages" @click="onPageChange(pageNumber++)"
              :class="pageNumber == episodesGridData.currentPage ? 'ko-pagination__current' : ''">

              <span v-if="pageNumber == episodesGridData.currentPage" class="ku-show-sr">You're on
                page</span>

              <a v-if="pageNumber != episodesGridData.currentPage" href="javascript:void(0)"
                aria-label="Page 2">{{pageNumber}}</a>

              {{pageNumber==episodesGridData.currentPage?pageNumber:''}}
            </li>

            <li v-if="episodesGridData.pages && episodesGridData.pages.length !=
              episodesGridData.currentPage" class="ko-pagination__next"><a
                href="javascript:void(0)" aria-label="Next page"
                @click="onPageChange(episodesGridData.currentPage +1)">Next<span
                  class="ku-show-sr">page</span></a></li>

            <li v-if="episodesGridData.pages && episodesGridData.pages.length ==
              episodesGridData.currentPage" class="ko-pagination__next">
              Next<span class="ku-show-sr">page</span></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import EpisodeItem from '@/components/episode_item.vue';
  import SeriesCard from '@/components/series_card.vue';
  import SeriesItem from '@/components/series_item.vue';

  export default {
    name: 'EpisodeGrid',
    data() {
      return {
        viewByBtnToogle: false,
        selectedViewType: 'Episodes',
      };
    },
    computed: {
      episodesGridData() {
        return this.$store.getters.getEpisodesGridData
      },
    },
    methods: {

      //get all episodes
      getAllEpisodes(currentPage) {
        return this.$store.dispatch('getAllEpisodes', {
          currentPage: currentPage
        })
      },

      //on page change
      onPageChange(currentPage) {

        if (this.selectedViewType === 'Episodes') {
          return this.getAllEpisodes(currentPage);
        }

        if (this.selectedViewType === 'Series & episodes') {
          return this.$store.dispatch('getAllSeriesByIncludeEpisodes', {
            isIncludeEpisodes: true,
            currentPage: currentPage
          })
        } else {
          return this.$store.dispatch('getAllSeriesByIncludeEpisodes', {
            isIncludeEpisodes: false,
            currentPage: currentPage
          })
        }

      },

      //on Change View By Ddl
      onChangeViewByDdl(selectedViewType) {
        this.viewByBtnToogle = false;
        this.selectedViewType = selectedViewType;
        if (selectedViewType == 'Episodes') {
          return this.$store.dispatch('getAllEpisodes', {
            currentPage: 1
          })
        }
        if (selectedViewType == 'Series & episodes') {
          return this.$store.dispatch('getAllSeriesByIncludeEpisodes', {
            isIncludeEpisodes: true,
            currentPage: 1
          })
        } else {
          return this.$store.dispatch('getAllSeriesByIncludeEpisodes', {
            isIncludeEpisodes: false,
            currentPage: 1
          })
        }
      }
    },
    beforeMount() {
      this.getAllEpisodes(1);
    },
    components: {
      EpisodeItem,
      SeriesCard,
      SeriesItem
    }
  };

</script>
