<template>
<aside class="kl-broadcast-detail__aside">
  <article class="kc-series-card">
    <a href="#" class="kc-series-card__img-wrp">
      <img v-bind:src="episodeDetail.artworkUrlSml" v-bind:alt="episodeDetail.title"
        class="kc-series-card__img">
    </a>
    <div class="kc-series-card__txt">
      <h1 class="kc-series-card__title"><a href="#">{{episodeDetail.title}}</a></h1>
      <div class="kc-series-card__sum">
        <p>Series summary a quick example text to build on the card title and make up the bulk of
          the card's
          content.</p>
      </div>
      <a href="series.html" class="ko-more">View series<i class="ki-chevron-alt-right"></i></a>
    </div>
  </article>
  <div class="kc-wdg--series-episodes">
    <div class="kc-wdg__sec--hdr">
      <h2 class="kc-wdg__hdg">More episodes from this series</h2>
    </div>
    <div class="kc-wdg__sec--bdy">
      <ul class="kc-episode-list">
        <li><a href="episode.html" class="kc-episode-sum">
            <article class="kc-episode-sum__inner">
              <div class="kc-episode-sum__img-wrp">
                <img src="https://placeimg.com/288/288/nature" alt="Faith in the Dark"
                  class="kc-episode-sum__img">
              </div>
              <div class="kc-episode-sum__txt">
                <h1 class="kc-episode-sum__title">Faith in the Dark</h1>
                <dl class="ko-keyvalue ko-keyvalue--value-only kc-episode-sum__info">
                  <div class="kc-episode-sum__released">
                    <dt>Recorded</dt>
                    <dd>
                      <time datetime="Sun 12 April 8:30 am" class="ko-datetime">
                        Sun 12 April <span class="kl-dt-separator">8:30 am</span></time>
                    </dd>
                  </div>
                  <div class="kc-episode-sum__author">
                    <dt>Author</dt>
                    <dd>Ps Andrew Scott</dd>
                  </div>
                  <div class="kc-episode-sum__series">
                    <dt>Series</dt>
                    <dd>Faith Lives Here</dd>
                  </div>
                  <div class="kc-episode-sum__location">
                    <dt>Location</dt>
                    <dd>
                      <span class="ko-badge ko-badge--location">Kedron</span>
                    </dd>
                  </div>
                  <div class="kc-episode-sum__duration">
                    <dt>Duration</dt>
                    <dd>
                      <i class="ki-clock"></i> 33 min
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </a></li>
        <li><a href="episode.html" class="kc-episode-sum">
            <article class="kc-episode-sum__inner">
              <div class="kc-episode-sum__img-wrp">
                <img src="https://placeimg.com/288/288/nature" alt="Walk on Water"
                  class="kc-episode-sum__img">
              </div>
              <div class="kc-episode-sum__txt">
                <h1 class="kc-episode-sum__title">Walk on Water</h1>
                <dl class="ko-keyvalue ko-keyvalue--value-only kc-episode-sum__info">
                  <div class="kc-episode-sum__released">
                    <dt>Recorded</dt>
                    <dd>
                      <time datetime="Sun 12 April 8:30 am" class="ko-datetime">
                        Sun 12 April <span class="kl-dt-separator">8:30 am</span></time>
                    </dd>
                  </div>
                  <div class="kc-episode-sum__author">
                    <dt>Author</dt>
                    <dd>Ps Joey White</dd>
                  </div>
                  <div class="kc-episode-sum__series">
                    <dt>Series</dt>
                    <dd>Stories of Renewal</dd>
                  </div>
                  <div class="kc-episode-sum__location">
                    <dt>Location</dt>
                    <dd>
                      <span class="ko-badge ko-badge--location">Kedron</span>
                    </dd>
                  </div>
                  <div class="kc-episode-sum__duration">
                    <dt>Duration</dt>
                    <dd>
                      <i class="ki-clock"></i> 28 min
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </a></li>
        <li><a href="episode.html" class="kc-episode-sum">
            <article class="kc-episode-sum__inner">
              <div class="kc-episode-sum__img-wrp">
                <img src="https://placeimg.com/288/288/nature" alt="Breakthrough"
                  class="kc-episode-sum__img">
              </div>
              <div class="kc-episode-sum__txt">
                <h1 class="kc-episode-sum__title">Breakthrough</h1>
                <dl class="ko-keyvalue ko-keyvalue--value-only kc-episode-sum__info">
                  <div class="kc-episode-sum__released">
                    <dt>Recorded</dt>
                    <dd>
                      <time datetime="Sun 12 April 8:30 am" class="ko-datetime">
                        Sun 12 April <span class="kl-dt-separator">8:30 am</span></time>
                    </dd>
                  </div>
                  <div class="kc-episode-sum__author">
                    <dt>Author</dt>
                    <dd>Tom Hanks</dd>
                  </div>
                  <div class="kc-episode-sum__location">
                    <dt>Location</dt>
                    <dd>
                      <span class="ko-badge ko-badge--location">Kedron</span>
                    </dd>
                  </div>
                  <div class="kc-episode-sum__duration">
                    <dt>Duration</dt>
                    <dd>
                      <i class="ki-clock"></i> 30 min
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </a></li>
      </ul>
    </div>
    <div class="kc-wdg__sec--ftr">
      <a href="episodes.html#list" class="ko-more">View all episodes<i
          class="ki-chevron-alt-right"></i></a>
    </div>
  </div>
  <div class="kc-subscribe">
    <div class="kc-subscribe__cell">
      <h3 class="kc-subscribe__hdg">Subscribe to new episodes</h3>
    </div>
    <div class="kc-subscribe__cell">
      <label class="ko-label ku-show-sr ko-label--error ko-label--required">First name</label>
      <input type="text" class="ko-input ko-input--error" placeholder="First name" required="">
      <!-- <div class="ko-validation">
                                First name is required.
                            </div> -->
    </div>
    <div class="kc-subscribe__cell">
      <label class="ko-label ku-show-sr ko-label--required">Email address</label>
      <input type="email" class="ko-input" placeholder="Email address" required="">
    </div>
    <div class="kc-subscribe__cell">
      <button type="button" class="ko-button ko-button--form">Subscribe</button>
    </div>
  </div>
</aside>
</template>

<script>

  export default {
    name: 'EpisodeDetailAside',
    props: ["episodeDetail"],
  };

</script>
