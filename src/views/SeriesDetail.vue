<template>
  <div class="kc-broadcast-app">
    <div class="kc-broadcast-app__inner">
      <PodcastInfo></PodcastInfo>
      <div class="kl-broadcast-detail">
        <div class="kl-broadcast-detail__hdr">
          <router-link
            :to="{ name: 'episode', params: { isGridShow: true , viewGridType: 'Series'}}"
            class="ko-back"><i class="ki-chevron-alt-left"></i>Back to
            list</router-link>
        </div>

        <aside class="kl-broadcast-detail__aside">
          <SubscribeForm></SubscribeForm>
        </aside>
        <div class="kl-broadcast-detail__line"></div>
        <div class="kl-broadcast-detail__main">
          <BroadcastDetailMain></BroadcastDetailMain>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PodcastInfo from '@/components/podcast_info.vue';
  import SubscribeForm from '@/components/subscribe_form.vue';
  import BroadcastDetailMain from '@/components/broadcast_detail_main.vue';

  export default {
    name: 'SeriesDetail',
    components: {
      PodcastInfo,
      SubscribeForm,
      BroadcastDetailMain
    },
    mounted() {
      document.getElementById('app').scrollIntoView();
    },
  };

</script>
