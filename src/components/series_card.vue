<template>
  <router-link :to="{ name: 'seriesDetail', params: { id: series.id }}" class="kc-series-card">
    <article class="kc-series-card__inner">
      <div class="kc-series-card__img-wrp" v-if="series.artworkUrlLrg">
        <img v-bind:src="series.artworkUrlLrg" v-bind:alt="series.artworkAltText"
          class="kc-series-card__img">
      </div>
      <div class="kc-series-card__txt">
        <h1 class="kc-series-card__title">{{series.title}}</h1>
        <div class="kc-series-card__sum">
          <p>{{series.summary}}</p>
        </div>
        <dl class="ko-keyvalue ko-keyvalue--value-only kc-series-card__info">
          <div class="kc-series-card__episodes">
            <dt>Episodes in series</dt>
            <dd>
              <i class="ki-info"></i> {{series.totalEpisodes}} episodes <span
                v-if="series.complete">(complete)</span>
            </dd>
          </div>
          <div class="kc-series-card__time" v-if="series.duration > 0">
            <dt>Total time</dt>
            <dd>
              <i class="ki-clock"></i> {{series.duration | convertSecondsToHoursMinutes}}
            </dd>
          </div>
          <!-- <div class="kc-series-card__done kc-series-card__done--">
            <dt>Listened</dt>
            <dd>
              <i class="ki-headphones"></i><span class="ku-show-sr"></span>
            </dd>
          </div> -->
        </dl>
      </div>
    </article>
  </router-link>
</template>

<script>
  export default {
    name: 'SeriesCard',
    props: ["series"],
  };

</script>
