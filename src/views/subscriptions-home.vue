<template>
  <div class="subscriptions d-flex flex-column">
    <template v-if="testArrayWithVideos.length > 0">
      <div class="subscriptions-carousel">
        <div class="d-flex flex-row flex-nowrap">
          <div class="d-flex flex-column">
            <div class="sub">
              <img
                  src="https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <span>Марина</span>
          </div>
          <div class="d-flex flex-column">
            <div class="sub">
              <img
                  src="https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <span>Марина</span>
          </div>
          <div class="d-flex flex-column">
            <div class="sub">
              <img
                  src="https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <span>Марина</span>
          </div>
          <div class="d-flex flex-column">
            <div class="sub">
              <img
                  src="https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <span>Марина</span>
          </div>
          <div class="d-flex flex-column">
            <div class="sub">
              <img
                  src="https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <span>Марина</span>
          </div>
          <div class="d-flex flex-column">
            <div class="sub">
              <img
                  src="https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <span>Марина</span>
          </div>
          <div class="d-flex flex-column">
            <div class="sub">
              <img
                  src="https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <span>Марина</span>
          </div>
          <div class="d-flex flex-column">
            <div class="sub">
              <img
                  src="https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <span>Марина</span>
          </div>
          <div class="d-flex flex-column">
            <div class="sub">
              <img
                  src="https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <span>Марина</span>
          </div>
          <div class="d-flex flex-column">
            <div class="sub">
              <img
                  src="https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <span>Марина</span>
          </div>
        </div>
        <div class="all-btn">
          <button v-on:click="goToAllSubs()">Все</button>
        </div>
      </div>
      <div class="subscriptions-videos flex-grow-0 overflow-auto">
        <div class="video-grid">
          <Video
              v-for="video in testArrayWithVideos"
              v-bind:video="video"
              v-bind:key="video.index"
          />
        </div>
      </div>
    </template>
    <template v-else>
      <div class="no-subs">
        <div>
          <img src="~@/assets/img/no-subs-image.svg" alt=" ">
        </div>
        <p>У вас пока нет подписок...</p>
      </div>
    </template>
  </div>
</template>

<script>

import Video from '@/components/video'

export default {
  name: "subscriptions-home",
  components: {
    Video
  },
  data() {
    return {
      testArrayWithVideos: [
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Title2",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Title 3",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "title 4",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Title 5",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
      ],
    }
  },
  methods: {
    goToAllSubs() {
      this.$router.push({name: 'subs-list'})
    }
  }
}
</script>

<style scoped lang="scss">
.subscriptions {
  height: 100%;
  background-image: url("~@/assets/img/global-bg-image.svg");
  background-repeat: no-repeat;
  background-position-y: -58px;
  background-size: 100%;

  &-carousel {
    display: flex;
    flex-direction: row;
    padding: 12px 16px;

    & > div:first-child {
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-y: scroll;
      max-width: 100%;
      margin-right: 10px;

      span {
        max-width: 46px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #ffffff;
        font-size: 12px;
      }

    }

    .all-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;

      button {
        background: none;
        border: none;
        color: #ffffff;
        font-weight: 600;
      }
    }

    .sub {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.3);
      overflow: hidden;
      max-width: 46px;
      min-width: 46px;
      max-height: 46px;
      min-height: 46px;
      margin-right: 12px;

      img {
        width: 100%;
      }
    }
  }

  &-videos {
    padding: 15px 16px 130px;
    background-color: #F5F5F5;

    .video-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  .no-subs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100% - 120px);
    background-color: #F5F5F5;

    p {
      color: #606060;
      margin-top: 20px;
    }
  }

}
</style>
