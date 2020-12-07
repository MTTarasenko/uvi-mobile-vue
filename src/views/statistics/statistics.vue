<template>
  <div class="statistics">
    <div class="statistics-head">
      <div class="statistics-head__back">
        <button class="bb-0" v-on:click="$router.go(-1)">
          <img src="~@/assets/img/icons/arrow-back.svg" alt="">
        </button>
      </div>
      <div>
        <p>Статистика</p>
      </div>
    </div>
    <div class="statistics-tabs">
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="По каналу" active>
            <ChannelStatistics/>
          </b-tab>
          <b-tab title="По видео">
            <VideoStatistics/>
          </b-tab>
          <b-tab title="По комментариям">
            <CommentsStatistics/>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelStatistics from '@/views/statistics/channel-statistics'
import VideoStatistics from '@/views/statistics/video-statistics'
import CommentsStatistics from '@/views/statistics/comments-statistics'

export default {
name: "statistics",
  components: {
    ChannelStatistics,
    VideoStatistics,
    CommentsStatistics
  }
}
</script>

<style scoped lang="scss">

::v-deep {
  .tabs {

    .nav-tabs {
      flex-wrap: nowrap;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);

      .nav-item {
        flex-grow: 1;
        text-align: center;

        .nav-link {
          position: relative;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          padding-left: 10px;
          padding-right: 10px;

          &.active {
            color: #FFFFFF;
            font-weight: 600;
            background-color: unset;

            &:after {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 1px;
              height: 2px;
              background: #FFFFFF;
            }
          }
        }
      }
    }
  }
}


.statistics {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url("~@/assets/img/high-blue-bg.svg");
  background-repeat: no-repeat;
  background-position-y: -58px;
  background-size: 100%;
  overflow: scroll;

  &-head {
    position: relative;
    text-align: center;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 600;
    padding: 10px 0;

    &__back {
      position: absolute;
      left: 20px;

    }
  }

  &-tabs {
    padding-bottom: 70px;
  }

}

</style>
