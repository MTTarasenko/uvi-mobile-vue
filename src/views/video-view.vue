<template>
  <div class="overflow-auto h-100">
    <div class="view">
<!--      <div class="p-2">-->
<!--        <button v-on:click="$router.go(-1)">Back(временная кнопка)</button>-->
<!--      </div>-->
      <div class="player">
        <div class="player-body">
          <vue-plyr>
            <div class="plyr__video-embed">
              <iframe
                  src="https://www.youtube.com/embed/bTqVqk7FSmY?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
              ></iframe>
            </div>
          </vue-plyr>
        </div>
      </div>
      <div class="video-title">
        <div class="video-title__main">
          <p>Title</p>
          <!--          <p>{{ video.videoTitle }}</p>-->
        </div>
        <div class="video-title__category d-flex">
          <img src="~@/assets/img/icons/label.svg" alt=" ">
          <p>Категория: <a href="#">путешествия и события</a></p>
        </div>
      </div>
      <div class="video-stats">
        <div class="video-stats__numbers">
          <p><span>12,378 просмотров</span></p>
          <p>сегодня в 14:20</p>
        </div>
        <div class="d-flex">
          <div class="d-flex flex-column align-items-center justify-content-center mx-3" v-on:click="likeVideo">
            <ThumbsUp v-if="!liked"/>
            <ThumbsUpActive v-if="liked"/>
            <span>23 тыс.</span>
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center mx-3" v-on:click="dislikeVideo">
            <ThumbsDown v-if="!disliked"/>
            <ThumbsDownActive v-if="disliked"/>
            <span>436</span>
          </div>
        </div>
      </div>
      <div class="video-user">
        <div class="video-user__name">
          <div class="image">
            <img
                src="https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="">
          </div>
          <div>
            <p class="username">Елена Таргоний</p>
            <p class="subs">8,1 млн подписчиков</p>
          </div>
        </div>
        <div class="video-user__subscribe">
          <button v-bind:class="{'subscribed': subscribed}"
                  v-on:click="subscribed = !subscribed">
            <span>{{ subscribed ? 'Отписаться' : 'Подписаться' }}</span>
          </button>
        </div>
      </div>
      <div class="video-options">
        <div>
          <button v-b-modal.share-modal>
            <img src="~@/assets/img/icons/share-icon.svg" alt="">
            <span>Поделиться</span>
          </button>
          <b-modal id="share-modal" modal-class="global-modal-class" centered hide-header hide-footer>
            <ShareModal
                v-on:close="closeModal('share-modal')"
            />
          </b-modal>
        </div>
        <div>
          <button v-on:click="inFavorite = !inFavorite">
            <div class="d-flex justify-content-center align-items-center">
              <Star v-if="!inFavorite" v-bind:fill="'none'" v-bind:stroke-color="'#606060'"/>
              <Star v-if="inFavorite" v-bind:fill="'#7158B5'" v-bind:stroke-color="'#7158B5'"/>
            </div>
            <!--            <img src="~@/assets/img/icons/star-icon.svg" alt="">-->
            <span v-bind:class="{'favorite' : inFavorite}">В избранное</span>
          </button>
        </div>
        <div>
          <button v-b-modal.complaint-modal>
            <img src="~@/assets/img/icons/warning-icon.svg" alt="">
            <span>Пожаловаться</span>
          </button>
          <b-modal id="complaint-modal" modal-class="global-modal-class" centered hide-header hide-footer>
            <ComplaintModal
                v-on:close="closeModal('complaint-modal')"
            />
          </b-modal>
        </div>
      </div>
      <div class="desc-coms-tabs position-relative">
        <b-tabs content-class="video-tabs mt-3 position-relative">
          <b-tab title="Описание" active>
            <div class="desc-tab">
              <p v-bind:class="{'truncate-10' : !descriptionToggle}">Румтур по моему домашнему офису. Как выглядит
                продуктивное рабочее место
                программиста.

                Все вещи из видео: <a href="#">https://kit.co/seniorsoftwarevlogger/...</a>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab animi assumenda atque ducimus fugit id
                incidunt laudantium magni maxime odio perspiciatis possimus qui quisquam quos rem soluta voluptas
                voluptatem!</p>

              <button v-on:click="descriptionToggle = !descriptionToggle">Показать больше</button>
            </div>
          </b-tab>
          <b-tab title="Комментарии 46 тыс">
            <div class="comments-tab">
              <div class="comments-tab-input">
                <div class="user-photo">
                  <img
                      src="https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="">
                </div>
                <div class="type-comment">
                  <input type="text" placeholder="Оставить комментарий">
                </div>
              </div>
              <div class="comments-tab-list">
                <div class="p-0">
                  <Comment v-for="comment in commentsArray"
                           v-bind:key="comment.index"
                           v-bind:comment="comment"/>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>

import Comment from '@/components/comment'
import ShareModal from '@/components/modals/share'
import ComplaintModal from '@/components/modals/complaint'

import ThumbsUp from '@/components/icons/thumbs-up'
import ThumbsUpActive from '@/components/icons/thumbs-up-active'
import ThumbsDown from '@/components/icons/thumbs-down'
import ThumbsDownActive from '@/components/icons/thumbs-down-active'
import Star from '@/components/icons/star'

import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

Vue.use(VuePlyr, {
  plyr: {}
})

export default {
  name: "video-view",
  components: {
    Comment,
    ShareModal,
    ComplaintModal,
    ThumbsUp,
    ThumbsDown,
    ThumbsUpActive,
    ThumbsDownActive,
    Star
  },
  props: {
    video: {
      Type: Object,
    }
  },
  data() {
    return {
      volumeRange: 0,
      liked: false,
      disliked: false,
      subscribed: false,
      inFavorite: false,
      descriptionToggle: false,
      commentsArray: [
        {
          user: {
            name: 'Мир IT с Антоном Павленко',
            photoUrl: 'https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          },
          comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti iste minus molestiae placeat praesentium quia quis?dasd',
          likes: '1,297',
          dislikes: '221  ',
          repliesArray: [
            {
              user: {
                name: 'Елена Балакина',
                photoUrl: 'https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              },
              comment: 'Ты лютый перфекционист)',
              likes: '12',
              dislikes: '0',
              repliesArray: []
            }
          ]
        },
        {
          user: {
            name: 'Никита Рябов',
            photoUrl: 'https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          },
          comment: 'Классно надеюсь и я когда-нибудь обзаведусь чисто своей комнатой и обставлю как хочу ее. Классно надеюсь и я когда-нибудь обзаведусь чисто своей комнатой и обставлю как хочу ее.',
          likes: '1,297',
          dislikes: '221  ',
          repliesArray: [
            {
              user: {
                name: 'Елена Балакина',
                photoUrl: 'https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              },
              comment: 'Ты лютый перфекционист)',
              likes: '12',
              dislikes: '0',
              repliesArray: []
            },
            {
              user: {
                name: 'Елена Балакина',
                photoUrl: 'https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              },
              comment: 'Ты лютый перфекционист)',
              likes: '12',
              dislikes: '0',
              repliesArray: []
            },
            {
              user: {
                name: 'Елена Балакина',
                photoUrl: 'https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              },
              comment: 'Ты лютый перфекционист)',
              likes: '12',
              dislikes: '0',
              repliesArray: []
            },
            {
              user: {
                name: 'Елена Балакина',
                photoUrl: 'https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              },
              comment: 'Ты лютый перфекционист)',
              likes: '12',
              dislikes: '0',
              repliesArray: []
            },
            {
              user: {
                name: 'Елена Балакина',
                photoUrl: 'https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              },
              comment: 'Ты лютый перфекционист)',
              likes: '12',
              dislikes: '0',
              repliesArray: []
            },
          ]
        },
        {
          user: {
            name: 'Мир IT с Антоном Павленко',
            photoUrl: 'https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          },
          comment: 'Классно надеюсь и я когда-нибудь обзаведусь чисто своей комнатой и обставлю как хочу ее.',
          likes: '1,297',
          dislikes: '221  ',
          repliesArray: [
            {
              user: {
                name: 'Елена Балакина',
                photoUrl: 'https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              },
              comment: 'Ты лютый перфекционист)',
              likes: '12',
              dislikes: '0',
              repliesArray: []
            }
          ]
        },
        {
          user: {
            name: 'Мир IT с Антоном Павленко',
            photoUrl: 'https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          },
          comment: 'Классно надеюсь и я когда-нибудь обзаведусь чисто своей комнатой и обставлю как хочу ее.',
          likes: '1,297',
          dislikes: '221  ',
          repliesArray: [
            {
              user: {
                name: 'Елена Балакина',
                photoUrl: 'https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              },
              comment: 'Ты лютый перфекционист)',
              likes: '12',
              dislikes: '0',
              repliesArray: []
            }
          ]
        },
        {
          user: {
            name: 'Мир IT с Антоном Павленко',
            photoUrl: 'https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          },
          comment: 'Классно надеюсь и я когда-нибудь обзаведусь чисто своей комнатой и обставлю как хочу ее.',
          likes: '1,297',
          dislikes: '221  ',
          repliesArray: [
            {
              user: {
                name: 'Елена Балакина',
                photoUrl: 'https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              },
              comment: 'Ты лютый перфекционист)',
              likes: '12',
              dislikes: '0',
              repliesArray: []
            }
          ]
        },
        {
          user: {
            name: 'Мир IT с Антоном Павленко',
            photoUrl: 'https://images.unsplash.com/photo-1604317760880-f172bd259320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          },
          comment: 'Классно надеюсь и я когда-нибудь обзаведусь чисто своей комнатой и обставлю как хочу ее.',
          likes: '1,297',
          dislikes: '221  ',
          repliesArray: [
            {
              user: {
                name: 'Елена Балакина',
                photoUrl: 'https://images.unsplash.com/photo-1603217149748-5890cb3dcd4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              },
              comment: 'Ты лютый перфекционист)',
              likes: '12',
              dislikes: '0',
              repliesArray: []
            }
          ]
        },
      ]
    }
  },
  mounted() {
    // console.log(this.video);
  },
  methods: {
    likeVideo() {
      this.liked = !this.liked;
    },
    dislikeVideo() {
      this.disliked = !this.disliked;
    },
    closeModal(modal) {
      this.$bvModal.hide(modal)
    }
  }
}
</script>

<style scoped lang="scss">

.view {
  background: #FBFBFB;
  overflow: auto;
  padding-bottom: 125px;

  .video-title {
    display: flex;
    flex-direction: column;
    padding: 15px 16px 10px;
    border-bottom: 1px solid #EAEAEA;

    &__main {
      color: #333333;
      font-size: 18px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }

    &__category {
      margin-top: 10px;
      display: flex;
      align-items: center;
      color: #333333;
      font-size: 15px;

      img {
        margin-right: 10px;
      }

      a {
        text-decoration: none;
        color: #7158B5;
      }
    }
  }

  .video-stats {
    display: flex;
    justify-content: space-between;
    padding: 13px 16px 12px;
    border-bottom: 1px solid #EAEAEA;

    &__numbers {
      p {
        color: #606060;
        font-size: 14px;

        span {
          font-weight: 600;
        }
      }
    }
  }

  .video-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 16px 12px;
    border-bottom: 1px solid #EAEAEA;

    &__name {
      display: flex;
      align-items: center;

      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        overflow: hidden;
        max-width: 34px;
        min-width: 34px;
        max-height: 34px;
        min-height: 34px;
        margin-right: 10px;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .username {
        color: #333333;
        font-size: 16px;
        font-weight: 600;
      }

      .subs {
        color: #333333;
        font-size: 14px;
      }
    }

    &__subscribe {

      button {
        background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
        box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
        border-radius: 100px;
        border: none;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 600;
        padding: 2px;
        overflow: hidden;
        width: 130px;

        span {
          display: block;
          height: 100%;
          width: 100%;
          padding: 10px 0;
          border-radius: 100px;
          background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
        }

        &.subscribed {
          color: #333333;
          box-shadow: none;
          background: linear-gradient(90deg, #ED6F9F 0%, #ED7D85 47.15%, #EC8B6A 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), #34A853;

          span {
            background-color: #ffffff;
            //background-image: none;
            background-image: linear-gradient(90deg, rgba(237, 111, 159, 0.1) 0%, rgba(237, 125, 133, 0.1) 47.15%, rgba(236, 139, 106, 0.1) 100%);
          }
        }
      }
    }
  }

  .video-options {
    display: flex;
    justify-content: space-between;
    padding: 7px 11px 10px;

    div {

      button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: none;
        border: none;
        min-height: 52px;

        &:active {
          background: #ECECEC;
          border-radius: 4px;
        }

        img, div {
          max-height: 24px;
          min-height: 24px;
          max-width: 24px;
          min-width: 24px;
        }

        span {
          color: #606060;
          font-size: 14px;

          &.favorite {
            color: #7158B5;
          }
        }
      }
    }
  }
}

.player {

  &-body {
    position: relative;
    color: #FFFFFF;

  }
}

.desc-coms-tabs {
  background: #FBFBFB;

  .desc-tab {
    padding: 15px 16px;

    p {
      color: #333333;

      &.truncate-10 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7; /* number of lines to show */
        -webkit-box-orient: vertical;
      }

      a {
        color: #7158B5;
      }
    }

    button {
      border: unset;
      background: #ECECEC;
      border-radius: 4px;
      padding: 8px 30px;
      color: #333333;
      font-size: 14px;
      font-weight: 600;
      margin-top: 28px;
    }
  }

  .comments-tab {

    &-input {
      display: flex;
      border-bottom: 1px solid #EAEAEA;
      padding: 0 16px 20px;

      .user-photo {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 44px;
        min-width: 44px;
        max-height: 44px;
        min-height: 44px;
        border-radius: 50%;
        overflow: auto;

        img {
          width: 100%;
        }
      }

      .type-comment {
        margin-left: 10px;
        width: 100%;

        input {
          height: 44px;
          line-height: 44px;
          width: 100%;
          border: 1px solid #DADADA;
          box-sizing: border-box;
          border-radius: 4px;
          padding-left: 10px;
          padding-right: 10px;
        }
      }
    }

    &-list {
      padding: 20px 16px;

    }
  }
}


::v-deep {

  .plyr--video {

    .plyr__control.plyr__control--overlaid {
      background-color: rgba(255, 255, 255, 0.9);
      background-image: url("~@/assets/img/play-purple.svg");
      background-repeat: no-repeat;
      background-position-y: center;
      background-position-x: calc(50% + 2px);

      svg {
        opacity: 0;
      }
    }
  }

  --plyr-color-main: #7C42DE;

  .tabs {
    & > div:first-child {

      .nav-tabs {
        flex-wrap: nowrap;

        .nav-item {
          width: 100%;

          .nav-link {
            position: relative;
            background-color: unset;
            border: none;
            color: #606060;
            text-align: center;

            &.active {
              color: #333333;
              font-weight: 600;

              &:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 1px;
                background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
              }
            }
          }
        }
      }
    }
  }

}


</style>
