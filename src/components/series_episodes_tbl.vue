<template>
  <table class="ko-episode-tbl">
    <thead>
      <tr>
        <th>
          Episode number
        </th>
        <th>
          Title / Author
        </th>
        <th>
          Recorded on
        </th>
        <th>
          Duration
        </th>
        <th>
          Listened
        </th>
      </tr>
    </thead>
    <tbody>
      <tr onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='episode.html'">
        <td class="ko-episode-tbl__num">
          00
        </td>
        <td class="ko-episode-tbl__title">
          Faith in the Dark - Ps Andrew Scott
        </td>
        <td class="ko-episode-tbl__date">
          <time datetime="Sun 12 April 8:30 am" class="ko-datetime">
            Sun 12 April <span class="kl-dt-separator">8:30 am</span>
          </time>
        </td>
        <td class="ko-episode-tbl__time">
          <i class="ki-clock"></i> 33 min
        </td>
        <td class="ko-episode-tbl__done ko-episode-tbl__done--false">
          <i class="ki-headphones"></i><span class="ku-show-sr">false</span>
        </td>
      </tr>
      <tr onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='episode.html'">
        <td class="ko-episode-tbl__num">
          01
        </td>
        <td class="ko-episode-tbl__title">
          Walk on Water - Ps Joey White
        </td>
        <td class="ko-episode-tbl__date">
          <time datetime="Sun 12 April 8:30 am" class="ko-datetime">
            Sun 12 April <span class="kl-dt-separator">8:30 am</span>
          </time>
        </td>
        <td class="ko-episode-tbl__time">
          <i class="ki-clock"></i> 28 min
        </td>
        <td class="ko-episode-tbl__done ko-episode-tbl__done--true">
          <i class="ki-headphones"></i><span class="ku-show-sr">true</span>
        </td>
      </tr>
      <tr onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='episode.html'">
        <td class="ko-episode-tbl__num">
          02
        </td>
        <td class="ko-episode-tbl__title">
          Breakthrough - Tom Hanks
        </td>
        <td class="ko-episode-tbl__date">
          <time datetime="Sun 12 April 8:30 am" class="ko-datetime">
            Sun 12 April <span class="kl-dt-separator">8:30 am</span>
          </time>
        </td>
        <td class="ko-episode-tbl__time">
          <i class="ki-clock"></i> 30 min
        </td>
        <td class="ko-episode-tbl__done ko-episode-tbl__done--false">
          <i class="ki-headphones"></i><span class="ku-show-sr">false</span>
        </td>
      </tr>
      <tr onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='episode.html'">
        <td class="ko-episode-tbl__num">
          03
        </td>
        <td class="ko-episode-tbl__title">
          Faith in the Dark - Ps Andrew Scott
        </td>
        <td class="ko-episode-tbl__date">
          <time datetime="Sun 12 April 8:30 am" class="ko-datetime">
            Sun 12 April <span class="kl-dt-separator">8:30 am</span>
          </time>
        </td>
        <td class="ko-episode-tbl__time">
          <i class="ki-clock"></i> 33 min
        </td>
        <td class="ko-episode-tbl__done ko-episode-tbl__done--true">
          <i class="ki-headphones"></i><span class="ku-show-sr">true</span>
        </td>
      </tr>
      <tr onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='episode.html'">
        <td class="ko-episode-tbl__num">
          04
        </td>
        <td class="ko-episode-tbl__title">
          Faith in the Dark - Ps Andrew Scott
        </td>
        <td class="ko-episode-tbl__date">
          <time datetime="Sun 12 April 8:30 am" class="ko-datetime">
            Sun 12 April <span class="kl-dt-separator">8:30 am</span>
          </time>
        </td>
        <td class="ko-episode-tbl__time">
          <i class="ki-clock"></i> 33 min
        </td>
        <td class="ko-episode-tbl__done ko-episode-tbl__done--false">
          <i class="ki-headphones"></i><span class="ku-show-sr">false</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'SeriesEpisodesTbl',
  };

</script>
