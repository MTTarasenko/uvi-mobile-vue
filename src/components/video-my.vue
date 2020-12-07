<template>
  <div class="video-grid-item"
       v-on:click="$emit('goToVideo')">
    <div class="video-grid-item-thumbnail">
      <div class="img-block">
        <img :src="video.thumbUrl" alt="">
      </div>
      <div class="price-label">
        <span>{{ video.watchPrice }} ₴</span>
      </div>
      <div class="duration-label">
        <span>{{ video.duration }}</span>
      </div>
    </div>
    <div class="video-grid-item-title">
<!--      <div class="user-photo">-->
<!--        <img :src="video.userPhoto" alt="">-->
<!--      </div>-->
      <div class="video-title">
        <p>
          index is {{ video.index }}
          {{ video.videoTitle }}
        </p>
      </div>
    </div>
    <div class="video-grid-item-numbers">
      <div class="d-flex">
        <div class="mr-2">
          <img class="mr-1" src="~@/assets/img/icons/eye-icon-light.svg" alt="">
          <span>{{ video.views }}</span>
        </div>
        <div>
          <img class="mr-1" src="~@/assets/img/icons/heart-icon.svg" alt="">
          <span>{{ video.likes }}</span>
        </div>
      </div>
      <div class="d-flex">
        <div class="mr-2">
          <img class="mr-1" src="~@/assets/img/icons/time-icon.svg" alt="">
          <span>{{ video.date }}</span>
        </div>
        <div>
          <img class="mr-1" src="~@/assets/img/icons/message-icon.svg" alt="">
          <span>{{ video.comments }}</span>
        </div>
      </div>
    </div>
    <template v-if="!canEdit">
      <div class="video-grid-item-button" v-if="!video.isPromoted">
        <button v-on:click="goToPromoteVideo()">
          <img src="~@/assets/img/icons/megaphone-white.svg" alt="">
          Продвигать</button>
      </div>
      <div class="video-grid-item-promoting" v-else>
        <p>Продвигается до 23.10.2020</p>
      </div>
    </template>
    <template v-if="canEdit">
      <div class="video-grid-item-edit">
        <button><img src="~@/assets/img/icons/edit-icon-dark.svg" alt=""></button>
        <button><img src="~@/assets/img/icons/stairs-dark.svg" alt=""></button>
        <button v-on:click="openConfirmModal(video)"><img src="~@/assets/img/icons/basket-dark.svg" alt=""></button>

<!--        у каждой модалки свой id, присваеваем id как id объекта с видео-->
        <b-modal :id="'confirm-delete-modal' + video.id" modal-class="global-modal-class" centered hide-header hide-footer>
          <ConfirmationModal v-bind:videoID="video.id"
                             v-bind:passedObj="{headerText: 'Удалить',
                             confirmText: 'Вы действительно хотите удалить это видео?',
                             noButton: 'Нет', yesButton: 'Да'}"
                             v-on:close="closeModal('confirm-delete-modal' + video.id)"/>
        </b-modal>

      </div>
    </template>
  </div>
</template>

<script>

import ConfirmationModal from '@/components/modals/confirmation'

export default {
  name: "video",
  components: {
    ConfirmationModal
  },
  data() {
    return {
      isPromoted: true,
    }
  },
  props: {
    video: {
      Type: Object,
    },
    canEdit: {
      Type: Boolean,
    }
  },
  methods: {
    goToPromoteVideo() {
      this.$router.push('/promote');
    },
    closeModal(modal) {
      this.$bvModal.hide(modal);
    },
    openConfirmModal(video) {
      this.$bvModal.show('confirm-delete-modal' + video.id)
    }
  }
}
</script>

<style scoped lang="scss">

.video-grid-item {
  flex: 0 0 48%;
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  overflow: hidden;
  background-color: #ffffff;

  &-thumbnail {
    position: relative;
    overflow: hidden;
    border-radius: 3px;

    .img-block {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      max-height: 98px;
      min-height: 98px;

      img {
        width: 100%;
      }
    }

    .price-label {
      transform: rotate(-45deg);
      position: absolute;
      top: -20px;
      left: -39px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 85px;
      height: 57px;
      background: linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), #FFD569;
      padding-bottom: 5px;

      span {
        display: block;
        color: #FFFFFF;
        font-size: 16px;
        line-height: 16px;
      }
    }

    .duration-label {
      position: absolute;
      bottom: 5px;
      right: 5px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 2px;
      padding: 1px 3px;
      color: #FFFFFF;
      font-size: 10px;
    }
  }

  &-button {
    text-align: center;
    padding: 10px 0;

    button {
      background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
      box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
      border-radius: 100px;
      border: none;
      padding: 6px 16px;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 600;

      img {
        height: 27px;
      }
    }
  }

  &-promoting {
    background: linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), #C4C4C4;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    padding: 7px;
    margin-top: 10px;
  }

  &-edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    margin: 10px 10px 0;
    border-top: 1px solid #E3E3E3;

    button {
      background: none;
      border: none;
    }
  }
}

.video-grid-item-title {
  display: flex;
  padding: 10px 0;

  .user-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 30px;
    min-width: 30px;
    max-height: 30px;
    min-height: 30px;
    border-radius: 50%;
    overflow: hidden;

    img {
      height: 100%;
    }
  }

  .video-title {
    //margin-left: 10px;
    padding: 0 10px;

    p {
      color: #333333;
      font-size: 15px;
      line-height: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;

    }
  }
}

.video-grid-item-numbers {
  padding: 0 10px;

  div {

  }
}

</style>
