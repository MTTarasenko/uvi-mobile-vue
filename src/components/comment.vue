<template>
  <div class="video-comment">
    <div class="video-comment-user">
      <img
          :src="comment.user.photoUrl"
          alt=" ">
    </div>
    <div class="video-comment-content">
      <h3>{{ comment.user.name }}</h3>
      <p class="truncate" v-bind:class="{'d-block' : commentExpanded}">
        {{ comment.comment }}
      </p>
      <button class="read-more-btn bb-0 p-0"
              v-if="comment.comment.length > 124"
              v-on:click="commentExpanded = !commentExpanded">
        <template v-if="!commentExpanded">
          Читать дальше
        </template>
        <template v-if="commentExpanded">
          Скрыть
        </template>
      </button>
      <div class="controls">
        <div class="d-flex mr-auto mt-2">
          <div class="d-flex align-items-center mr-2">
            <div class="icon-block">
              <img src="~@/assets/img/icons/message-icon-thin.svg" alt=" ">
            </div>
            <span>{{ comment.repliesArray.length }}</span>
          </div>
          <div class="d-flex align-items-center mr-2">
            <div class="icon-block" v-on:click="commentLiked = !commentLiked">
              <ThumbsUp v-if="!commentLiked"/>
              <ThumbsUpActive v-if="commentLiked"/>
            </div>
            <span>{{  comment.likes }}</span>
          </div>
          <div class="d-flex align-items-center mr-2">
            <div class="icon-block" v-on:click="commentDisliked = !commentDisliked">
              <ThumbsDown v-if="!commentDisliked"/>
              <ThumbsDownActive v-if="commentDisliked"/>
            </div>
            <span>{{ comment.dislikes }}</span>
          </div>
        </div>
        <div class="d-flex align-items-center mt-2">
          <span>15 часов назад</span>
        </div>
      </div>
      <div class="show-replays-btn">
        <button>Показать ответы {{ comment.repliesArray.length }}</button>
      </div>
      <div class="replies">
        <div class="video-comment" v-for="reply in comment.repliesArray" v-bind:key="reply.index">
          <div class="video-comment-user">
            <img
                :src="reply.user.photoUrl"
                alt=" ">
          </div>
          <div class="video-comment-content">
            <h3>{{ reply.user.name }}</h3>
            <p>{{ reply.comment }}</p>
            <div class="controls">
              <div class="d-flex mr-auto mt-2">
                <div class="d-flex align-items-center mr-2">
                  <div class="icon-block">
                    <img src="~@/assets/img/icons/message-icon-thin.svg" alt=" ">
                  </div>
                  <span>{{ reply.repliesArray.length }}</span>
                </div>
                <div class="d-flex align-items-center mr-2">
                  <div class="icon-block" v-on:click="commentLiked = !commentLiked">
                    <ThumbsUp v-if="!commentLiked"/>
                    <ThumbsUpActive v-if="commentLiked"/>
                  </div>
                  <span>{{ reply.likes }}</span>
                </div>
                <div class="d-flex align-items-center mr-2">
                  <div class="icon-block" v-on:click="commentDisliked = !commentDisliked">
                    <ThumbsDown v-if="!commentDisliked"/>
                    <ThumbsDownActive v-if="commentDisliked"/>
                  </div>
                  <span>{{ reply.dislikes }}</span>
                </div>
              </div>
              <div class="d-flex align-items-center mt-2">
                <span>15 часов назад</span>
              </div>
            </div>
<!--            <div class="show-replays-btn">-->
<!--              <button>Показать ответы (197)</button>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import ThumbsUp from '@/components/icons/thumbs-up'
import ThumbsUpActive from '@/components/icons/thumbs-up-active'
import ThumbsDown from '@/components/icons/thumbs-down'
import ThumbsDownActive from '@/components/icons/thumbs-down-active'

export default {
  name: "comment",
  components: {
    ThumbsUp,
    ThumbsDown,
    ThumbsUpActive,
    ThumbsDownActive,
  },
  props: {
    comment: {
      type: Object,
    }
  },
  data() {
    return {
      commentLiked: false,
      commentDisliked: false,
      commentExpanded: false,
    }
  },
  created() {
    // console.log(this.comment.comment, this.comment.comment.length);
  }
}
</script>

<style scoped lang="scss">

.video-comment {
  display: flex;
  margin-bottom: 20px;

  &-user {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 44px;
    min-width: 44px;
    max-height: 44px;
    min-height: 44px;
    border-radius: 50%;
    overflow: auto;
    margin-right: 12px;

    img {
      width: 100%;
    }
  }

  &-content {
    color: #333333;

    h3 {
      max-width: 100%;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* number of lines to show */
      -webkit-box-orient: vertical;
    }

    p {
      color: #606060;
      font-size: 15px;

      &.truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }

    .read-more-btn {
      color: #7157B3;
      font-size: 15px;
    }

    .controls {
      display: flex;
      flex-wrap: wrap-reverse;
      //margin-top: 10px;

      .icon-block {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 20px;
        min-width: 20px;
        max-height: 16px;
        min-height: 16px;
        margin-right: 7px;

        img {

        }
      }

      span {
        color: #606060;
        font-size: 14px;
        line-height: 14px;
      }
    }

    .show-replays-btn {
      margin-top: 15px;

      button {
        background-color: unset;
        border: unset;
        color: #7157B3;
        font-weight: 600;
        padding: 0;
      }
    }

    .replies {
      padding-top: 20px;

      & > div {

      }
    }
  }
}

</style>
