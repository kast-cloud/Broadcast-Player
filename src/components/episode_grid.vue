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

        <nav aria-label="Pagination" class="ko-pagination"
          v-if="showPager">
          <ul class="ko-pagination__list">
            <li class="ko-pagination__prev" :class="{ 'is-disabled': prevDisabled }">
              <a aria-label="Previous page" v-if="!prevDisabled"
                @click="onPageChange(episodesGridData.currentPage -1)">Previous <span
                  class="ku-show-sr">page</span>
              </a>
              <span v-if="prevDisabled">Previous <span class="ku-show-sr">page</span></span>
            </li>
            <li v-for="pageNumber in episodesGridData.pages" :key="pageNumber" :class="{  'ko-pagination__current' : isCurrentPage(pageNumber) }">
              <template v-if="isCurrentPage(pageNumber)">
                <span class="ku-show-sr">You're on page</span> {{ pageNumber }}
              </template>
              <a v-else @click="onPageChange(pageNumber++)"
                :aria-label="'Page ' + pageNumber">{{ pageNumber }}</a>
            </li>
            <li class="ko-pagination__next" :class="{ 'is-disabled': nextDisabled }">
              <a aria-label="Next page" v-if="!nextDisabled"
                @click="onPageChange(episodesGridData.currentPage +1)">Next <span
                  class="ku-show-sr">page</span>
              </a>
              <span v-if="nextDisabled">Next <span class="ku-show-sr">page</span></span>
            </li>
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
        selectedViewType: 'Series',
      };
    },
    computed: {
      episodesGridData() {
        return this.$store.getters.getEpisodesGridData
      },
      showPager() {
        return this.episodesGridData.pages && this.episodesGridData.pages.length > 1
      },
      prevDisabled() {
        return this.episodesGridData.pages && this.episodesGridData.currentPage <= 1;
      },
      nextDisabled() {
        return this.episodesGridData.pages && this.episodesGridData.pages.length <=
              this.episodesGridData.currentPage
      }
    },
    methods: {

      //get all episodes
      getAllEpisodes(currentPage) {
        return this.$store.dispatch('getAllEpisodes', {
          currentPage: currentPage,
          limit: 10
        })
      },

      //get All Series
      getAllSeries(currentPage) {
        return this.$store.dispatch('getAllSeriesByIncludeEpisodes', {
          isIncludeEpisodes: false,
          currentPage: currentPage,
          limit: 6
        })
      },
      isCurrentPage(pageNumber)
      {
        return pageNumber == this.episodesGridData.currentPage
      },
      
       //on page change
      onPageChange(currentPage) {

        if (this.selectedViewType === 'Episodes') {
          return this.getAllEpisodes(currentPage);
        }

        if (this.selectedViewType === 'Series & episodes') {
          return this.$store.dispatch('getAllSeriesByIncludeEpisodes', {
            isIncludeEpisodes: true,
            currentPage: currentPage,
            limit: 4
          })
        } else {
          return getAllSeries(currentPage)
        }

      },

      //on Click View By Button
      onClickViewByButton() {

        if (this.selectedViewType === 'Episodes') {
          return this.getAllEpisodes(currentPage);
        }

        if (this.selectedViewType === 'Series & episodes') {
          return this.$store.dispatch('getAllSeriesByIncludeEpisodes', {
            isIncludeEpisodes: true,
            currentPage: currentPage,
            limit: 4
          })
        } else {
          return getAllSeries(currentPage)
        }

      },

      //on Change View By Ddl
      onChangeViewByDdl(selectedViewType) {
        localStorage.setItem("selectedViewType", selectedViewType);
        this.viewByBtnToogle = false;
        this.selectedViewType = selectedViewType;
        if (selectedViewType == 'Episodes') {
          return this.$store.dispatch('getAllEpisodes', {
            currentPage: 1,
            limit: 10
          })
        }
        if (selectedViewType == 'Series & episodes') {
          return this.$store.dispatch('getAllSeriesByIncludeEpisodes', {
            isIncludeEpisodes: true,
            currentPage: 1,
            limit: 4
          })
        } else {
          return this.$store.dispatch('getAllSeriesByIncludeEpisodes', {
            isIncludeEpisodes: false,
            currentPage: 1,
            limit: 6
          })
        }
      },

    },
    beforeMount() {
      if (localStorage.getItem("selectedViewType") !== null &&
        localStorage.getItem("selectedViewType") !== "" && this.$route.params.isGridShow &&
        this.$route.params.isGridShow == true) {
        this.selectedViewType = localStorage.getItem("selectedViewType");
      }
      this.onChangeViewByDdl(this.selectedViewType);
    },
   

    created() {
      this.$eventHub.$on('onClickViewAllEpisodeBtn', selectedViewType => {
        this.selectedViewType = selectedViewType;
        return this.getAllEpisodes(1);
      });
    },

    components: {
      EpisodeItem,
      SeriesCard,
      SeriesItem
    }
  };

</script>
