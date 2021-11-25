<template>
  <div class="kl-broadcast-detail__main">
    <article class="kc-episode">
      <header class="kc-episode__hdr">
        <div class="kc-episode__img-wrp" v-if="episodeDetail.artworkUrlSml">
          <img v-bind:src="episodeDetail.artworkUrlSml" v-bind:alt="episodeDetail.artworkAltText"
            class="kc-episode__img">
        </div>
        <div class="kc-episode__txt">
          <h1 class="kc-episode__title">{{episodeDetail.title}}</h1>
          <dl class="ko-keyvalue ko-keyvalue--value-only">
            <div class="kc-episode__author">
              <dt>Author</dt>
              <dd>{{episodeDetail.author}}</dd>
            </div>
            <div v-if="episodeDetail.series" class="kc-episode__series">
              <dt>Series</dt>
              <dd>{{episodeDetail.series.title}}</dd>
            </div>
          </dl>
        </div>
        <dl class="ko-keyvalue ko-keyvalue--value-only kc-episode__info">
          <div class="kc-episode__released">
            <dt>Recorded</dt>
            <dd>
              <time datetime="Sun 12 April 8:30 am" class="ko-datetime">
                {{episodeDetail.releasedLocal | moment("ddd Do MMM, YYYY")}} <span
                  class="kl-dt-separator">{{episodeDetail.releasedLocal | moment("h:mm a")}}</span></time>
            </dd>
          </div>
          <div class="kc-episode__location">
            <dt>Location</dt>
            <dd>
              <span v-if="episodeDetail.location"
                class=" ko-badge ko-badge--location">{{episodeDetail.location.title}}</span>
            </dd>
          </div>
          <div class="kc-episode__duration">
            <dt>Duration</dt>
            <dd>
              <i class="ki-clock"></i> {{episodeDetail.duration | convertSecondsToHoursMinutes}}
            </dd>
          </div>
          <!-- <div class="kc-episode__done kc-episode__done--false">
            <dt>Listened</dt>
            <dd>
              <i class="ki-headphones"></i><span class="ku-show-sr">false</span>
            </dd>
          </div> -->
        </dl>
      </header>
      <div class="kc-series__media">
        <audio id="player" class="ko-player--audio" controls>
          <source v-if="episodeDetail.audio" v-bind:src="episodeDetail.audio.url"
            type="audio/mpeg" />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5
              video</a>
          </p>
        </audio>
      </div>
      <div class="ko-toolbar">
        <button class="ko-toolbar__btn"><i class="ki-prayer ko-toolbar__ico"></i><span
            class="ko-toolbar__txt">Prayer</span></button>
        <button class="ko-toolbar__btn"><i class="ki-connect ko-toolbar__ico"></i> <span
            class="ko-toolbar__txt">Connect</span></button>
        <button class="ko-toolbar__btn"><i class="ki-cross ko-toolbar__ico"></i> <span
            class="ko-toolbar__txt">Respond</span></button>
        <button class="ko-toolbar__btn"><i class="ki-give ko-toolbar__ico"></i> <span
            class="ko-toolbar__txt">Give</span></button>
        <button class="ko-toolbar__btn"><i class="ki-share ko-toolbar__ico"></i> <span
            class="ko-toolbar__txt">Share</span></button>
        <a v-if="episodeDetail.audio" v-bind:href="episodeDetail.audio.url" class="ko-toolbar__btn"
          download=""><i class="ki-download ko-toolbar__ico"></i> <span
            class="ko-toolbar__txt">Download</span></a>
      </div>
      <div class="kc-episode__bdy">
        <p v-html:bind="episodeDetail.content"></p>
        <ul class="kc-episode__notes">
          <li v-for="attachment in episodeDetail.attachments"><a v-bind:href="attachment.url"><i
                class="ki-download"></i>{{attachment.title}}</a></li>
        </ul>
      </div>
      <div v-if="episodeDetail.authors" v-for="author in episodeDetail.authors"
        class="kc-episode__authors">
        <div class="ko-author">
          <div class="ko-author__img-wrp">
            <img v-bind:src="author.imageUrl" v-bind:alt="author.imageUrl" class="ko-author__img">
          </div>
          <div class="ko-author__info">
            <h2 class="ko-author__name">{{author.title}}</h2>
            <div class="ko-author__profile">
              <p>{{author.summary}}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  import Plyr from 'plyr';
  const player = new Plyr('#player');

  export default {
    name: 'EpisodeDetailMain',
    props: ["episodeDetail"],
    mounted() {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const players = Array.from(document.querySelectorAll('.ko-player--audio')).map(p =>
          new Plyr(
            p, {
              controls: [
                'rewind',
                'play',
                'fast-forward',
                'progress',
                'current-time',
                'settings',
                'airplay'
              ],
              seekTime: 15
            }));

        players.forEach(player => {
          player.on('play', () => {
            player.elements.container.classList.add('player-expand');
            players.forEach(otherPlayer => {
              if (otherPlayer !== player && otherPlayer.playing) {
                otherPlayer.pause();
              }
            });
            // player.toggleControls('progress');
          });
          player.on('pause', () => {
            if (!player.seeking) {
              player.elements.container.classList.remove('player-expand');
            }
          });
        });

        // When play button clicked - find and show the closest player.
        const playButtons = document.querySelectorAll('.play-button');
        playButtons.forEach(playButton => {
          playButton.addEventListener('click', event => {
            event.preventDefault();
            console.log(playButton.parentNode.querySelector('.audio-player'));
            const player = playButton.parentNode.querySelector('.plyr');
            player.style.display = 'block';
            playButton.style.opacity = 0;
          });
        });
      }
    }
  };

</script>
