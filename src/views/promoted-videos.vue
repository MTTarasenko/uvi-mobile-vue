<template>
  <div class="account">
    <div class="account-head">
      <div class="account-head__back">
        <button class="bb-0" v-on:click="$router.go(-1)">
          <img src="~@/assets/img/icons/arrow-back.svg" alt="">
        </button>
      </div>
      <div>
        <p>Продвигаемые видео</p>
      </div>
    </div>
    <div class="video-item">
      <div class="thumbnail">
        <div class="price-label">
          <span>4 ₴</span>
        </div>
        <img
            src="https://images.unsplash.com/photo-1606847993410-27c7ba6beeb8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=" ">
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ducimus eveniet expedita fugiat minus odit quis
        suscipit! Aliquam blanditiis, dolore dolorum enim esse explicabo laudantium magni numquam obcaecati, omnis
        possimus.</p>
      <router-link to="/advertising-report">
        Рекламный отчет
      </router-link>
      <div class="info">
        <div class="d-flex align-items-center justify-content-between">
          <span>Показов / Просмотров</span>
          <span>17 / 289</span>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <span>Лайков</span>
          <span>217</span>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <span>Управление видео</span>
          <span></span>
        </div>
      </div>
      <div class="buttons">
        <button class="play" v-if="isPlaying" v-on:click="isPlaying = !isPlaying">
          <img src="~@/assets/img/icons/play.svg" alt="">
          Старт
        </button>
        <button class="pause" v-if="!isPlaying" v-on:click="isPlaying = !isPlaying">
          <img src="~@/assets/img/icons/pause.svg" alt="">
          Пауза
        </button>
        <button class="edit mx-2">
          <img src="~@/assets/img/icons/gear-white-smaller.svg" alt="">
          Редактировать
        </button>
        <button class="replenish" v-b-modal.replenish-modal>
          <img src="~@/assets/img/icons/money-white.svg" alt="">
          Пополнить
        </button>

        <b-modal id="replenish-modal" modal-class="global-modal-class" centered hide-header hide-footer>
          <ReplenishModal
              v-on:close="closeModal('replenish-modal')"
          />
        </b-modal>

      </div>
    </div>
  </div>
</template>

<script>

import ReplenishModal from '@/components/modals/replenish'

export default {
  name: "promoted-videos",
  components: {
    ReplenishModal
  },
  data() {
    return {
      isPlaying: true
    }
  },
  methods: {
    closeModal(modal) {
      this.$bvModal.hide(modal)
    }
  }
}
</script>

<style scoped lang="scss">

.account {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url("~@/assets/img/high-blue-bg.svg");
  background-repeat: no-repeat;
  background-position-y: -58px;
  background-size: 100%;
  overflow: scroll;
  padding-bottom: 70px;

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

  .video-item {
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 20px 16px 15px;
    padding: 15px 16px;

    .thumbnail {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 3px;
      max-height: 183px;
      min-height: 183px;

      img {
        height: 100%;
      }

      .price-label {
        transform: rotate(-45deg);
        position: absolute;
        top: -20px;
        left: -60px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 140px;
        height: 74px;
        background: linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), #FFD569;
        padding-bottom: 5px;

        span {
          display: block;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 600;
          line-height: 16px;
        }
      }

    }

    p {
      color: #333333;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
      margin: 10px 0;
    }

    a {
      width: max-content;
      background: linear-gradient(90deg, #26A8E1 0%, #3495E6 47.15%, #4283EA 100%);
      border-radius: 100px;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 600;
      padding: 10px 30px;
    }

    .info {
      margin-top: 15px;
      color: #606060;
      font-size: 15px;

      & > div {
        border-top: 1px solid #F5F5F5;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        border: none;
        padding: 8px 12px;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 600;

        &.play {
          background: linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), #34A853;
        }

        &.pause {
          background: linear-gradient(90deg, #ED6F9F 0%, #ED7D85 47.15%, #EC8B6A 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), #34A853;
        }

        &.edit {
          background: linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), #FFD569;
        }

        &.replenish {
          background: linear-gradient(90deg, #26A8E1 0%, #3495E6 47.15%, #4283EA 100%), #5C94F0;
        }
      }
    }
  }

}


</style>
