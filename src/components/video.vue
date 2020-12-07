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
      <div class="user-photo">
        <img :src="video.userPhoto" alt="">
      </div>
      <div class="video-title">
        <p>
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
  </div>
</template>

<script>
export default {
  name: "video",
  props: {
    video: {
      Type: Object,
    }
  }
}
</script>

<style scoped lang="scss">
.video-grid-item {
  flex: 0 0 48%;
  width: 100%;
  margin-bottom: 15px;

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
    margin-left: 10px;

    p {
      font-family: 'Fira Sans Medium', sans-serif;
      color: #333333;
      font-size: 15px;
      font-weight: 500;
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
  div {
    font-size: 12px;
  }
}

</style>
