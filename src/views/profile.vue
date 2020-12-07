<template>
  <div class="profile">
    <div class="profile-header">
      <div class="profile-group-picture">
        <img src="~@/assets/img/profile-group.svg" alt="">
      </div>
      <button v-on:click="$router.go(-1)">
        <img src="~@/assets/img/icons/arrow-back.svg" alt="">
      </button>
    </div>
    <div class="profile-subheader">
      <div class="user-photo">
        <img class="w-100"
             src="https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2MHx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
             alt="">
      </div>
      <div class="d-flex flex-column justify-content-center">
        <h5>Елена Таргоний</h5>
        <p><span v-if="!isMyProfile" class="mr-2">ПОДПИСАТЬСЯ</span>8,1 млн подписчиков</p>
      </div>
      <div class="ml-auto" v-if="isMyProfile">
        <button v-on:click="$router.push('/video-settings')">
          <!--         TODO finish with gradient-->
          <img src="~@/assets/img/icons/gear-gradient.svg" alt="">
        </button>
      </div>
    </div>
    <div class="profile-info">
      <p>Елена Таргоний - предприниматель из Канады, который хочет помочь предпринимателям со всего мира и тем
        самым решать проблемы нашего мира. Наша цель состоит в том, чтобы помочь вам найти мотивацию и советы
        для бизнеса, чтобы стать успешным. <span>Читать дальше</span></p>
    </div>
    <div class="profile-tabs">
      <div class="">
        <b-tabs content-class="mt-3">
          <b-tab title="Видео" active>
            <template v-if="testArrayWithMyVideos">
              <div class="my-videos">
                <!--            TODO  вывести циклом VideoMy если смотрим "мои" видео и Video если "чужие"-->
                <VideoMy v-for="video in testArrayWithMyVideos"
                         v-bind:key="video.index"
                         v-bind:video="video"
                         v-bind:canEdit="false"/>
              </div>
            </template>
            <template v-else>
              <div class="no-videos">
                <img src="~@/assets/img/icons/channel-bigger.svg" alt="">
                <p>У вас пока нет ваших видео...</p>
              </div>
            </template>
          </b-tab>
          <b-tab title="Избранное">
            <template v-if="testArrayWithVideos">
              <div class="my-videos">
                <Video v-for="video in testArrayWithVideos"
                       v-bind:key="video.index"
                       v-bind:video="video"/>
              </div>
            </template>
            <template v-else>
              <div class="no-videos">
                <img src="~@/assets/img/icons/stars.svg" alt="">
                <p>У вас пока нет избранных видео...</p>
              </div>
            </template>
          </b-tab>
          <b-tab title="Понравившиеся">
            <template v-if="testArrayWithVideos">
              <div class="my-videos">
                <Video v-for="video in testArrayWithVideos"
                       v-bind:key="video.index"
                       v-bind:video="video"/>
              </div>
            </template>
            <template v-else>
              <div class="no-videos">
                <img src="~@/assets/img/icons/like-bigger.svg" alt="">
                <p>У вас пока нет понравившихся видео...</p>
              </div>
            </template>
          </b-tab>
          <!--          <b-tab title="Информация">-->
          <!--            <template v-if="true">-->
          <!--              <div class="user-info">-->
          <!--                <div>-->
          <!--                  <p>Елена Таргоний - предприниматель из Канады, который хочет помочь предпринимателям со всего мира и тем-->
          <!--                    самым решать проблемы нашего мира. Наша цель состоит в том, чтобы помочь вам найти мотивацию и советы-->
          <!--                    для бизнеса, чтобы стать успешным.</p>-->
          <!--                  <div class="d-flex justify-content-center align-items-center pt-2 pb-3">-->
          <!--                    <button><img src="~@/assets/img/icons/fb-icon.svg" alt=""></button>-->
          <!--                    <button><img src="~@/assets/img/icons/twitter-icon.svg" alt=""></button>-->
          <!--                    <button><img src="~@/assets/img/icons/instagram-icon.svg" alt=""></button>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </template>-->
          <!--            <template v-else>-->
          <!--              <div class="no-videos">-->
          <!--                <img src="~@/assets/img/icons/info.svg" alt="">-->
          <!--                <p>У вас нет информации о себе в разделе "Настройки аккаунта"</p>-->
          <!--              </div>-->
          <!--            </template>-->
          <!--          </b-tab>-->
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>

import VideoMy from '@/components/video-my'
import Video from '@/components/video'

export default {
  name: "profile",
  components: {
    VideoMy,
    Video
  },
  data() {
    return {
      isMyProfile: true,
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
      testArrayWithMyVideos: [
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356,
          isPromoted: true
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
          comments: 356,
          isPromoted: true
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
          comments: 356,
          isPromoted: false
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
          comments: 356,
          isPromoted: true
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
          comments: 356,
          isPromoted: true
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
          comments: 356,
          isPromoted: false
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
          comments: 356,
          isPromoted: true
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
          comments: 356,
          isPromoted: true
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

::v-deep {
  .tabs {

    .nav-tabs {
      display: flex;
      flex-wrap: nowrap;
      border: none;
      overflow-x: scroll;
      overflow-y: hidden;
      box-shadow: 0 7px 8px rgba(0, 0, 0, 0.08);
      background: #ffffff;

      .nav-item {
        width: 100%;

        .nav-link {
          position: relative;
          border: none;
          color: #909090;

          &.active {
            color: #7157B3;
            font-weight: 600;

            &:after {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 1px;
              height: 2px;
              background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
            }
          }
        }
      }
    }
  }
}

.profile {
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
  height: 100%;
  overflow: scroll;
  background-color: #F5F5F5;

  &-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("~@/assets/img/profile-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 25px 0;

    .profile-group-picture {
      img {
        height: 90px;
      }
    }

    button {
      position: absolute;
      left: 15px;
      top: 15px;
      background-color: unset;
      border: none;

    }
  }

  &-subheader {
    background: #FFFFFF;
    display: flex;
    padding: 16px;
    color: #333333;

    .user-photo {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 50%;
      max-width: 60px;
      min-width: 60px;
      max-height: 60px;
      min-height: 60px;
      margin-right: 12px;
    }

    h5 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    p {
      color: #606060;
      font-size: 15px;

      span {
        font-family: 'Fira Sans Medium', sans-serif;
        color: #EC8232;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      background: none;
      border: 2px solid #7157B3;
      padding: 7px 10px;
    }
  }

  &-info {
    padding: 0 16px;
    background: #ffffff;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }

}

.my-videos {
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
  justify-content: space-between;
}

.no-videos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 65px;
  text-align: center;

  img {
    //width: 42px;
  }
}

.user-info {
  padding: 0 16px 20px;

  & > div {
    background: #FFFFFF;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    color: #333333;
    font-size: 15px;

    p {
      padding: 15px 15px 10px;
      border-bottom: 1px solid #EAEAEA;
    }

    button {
      background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), #E8E8E8;
      border: none;
      border-radius: 50%;
      max-height: 42px;
      min-height: 42px;
      max-width: 42px;
      min-width: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}

</style>
