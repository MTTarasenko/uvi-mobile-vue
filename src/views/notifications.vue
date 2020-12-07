<template>
  <div class="notifications">
    <div class="notifications-header">
      <p>Уведомления</p>
    </div>
    <template v-if="arrayWithNotifs">
      <div class="notifications-content">
        <div>
          <div class="notifications-content__item"
               v-for="notif in arrayWithNotifs"
               v-bind:key="notif.index">
            <div class="user">
              <img v-if="notif.userPhoto"
                   :src="notif.userPhoto"
                   alt="">
              <img v-else src="~@/assets/img/logo.svg" style="width: 20px" alt="">
            </div>
            <div>
              <p>
                <b>{{ notif.userName }}</b>
                {{ notif.action }}
                <span>{{ notif.videoName }}</span>
              </p>
              <p class="time-ago d-flex align-items-center">
                <!--           TODO icon names are:-->
                <!--            message-icon-thin-->
                <!--            megaphone-->
                <!--            shield-->
                <!--            thumbs-up-->
                <!--            user-plus-->
                <!--            video-icon-->
                <img alt="" class="mr-2"
                     :src="require(`@/assets/img/icons/${notif.iconName}.svg`)">
                4 часа назад</p>
            </div>
            <div class="video-preview" v-if="notif.videoPreview">
              <img :src="notif.videoPreview" alt="">
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="h-100 d-flex justify-content-center align-items-center">
        <img src="~@/assets/img/no-notifications.svg" alt="">
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "notifications",
  data() {
    return {
      iconName: 'thumbs-up',
      arrayWithNotifs: [
        {
          userPhoto: 'https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60',
          userName: 'Елена Таргоний',
          action: 'прокомментировал(а) ваше видео',
          videoName: '“Природа в Кракове”',
          videoPreview: 'https://images.unsplash.com/photo-1606280854140-7acb739100e7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTB8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
          iconName: 'thumbs-up',
        },
        {
          userName: 'UVI',
          action: 'прокомментировал(а) ваше видео',
          videoName: '“Природа в Кракове”',
          iconName: 'message-icon-thin',
        },
        {
          userPhoto: 'https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60',
          userName: 'Елена Таргоний',
          action: 'прокомментировал(а) ваше видео',
          videoName: '“Природа в Кракове”',
          videoPreview: 'https://images.unsplash.com/photo-1606280854140-7acb739100e7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTB8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
          iconName: 'megaphone',
        },
        {
          userPhoto: 'https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60',
          userName: 'Елена Таргоний',
          action: 'прокомментировал(а) ваше видео',
          videoName: '“Природа в Кракове”',
          iconName: 'shield',
        },
        {
          userPhoto: 'https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60',
          userName: 'Елена Таргоний',
          action: 'прокомментировал(а) ваше видео',
          videoName: '“Природа в Кракове”',
          iconName: 'user-plus',
        },
        {
          userPhoto: 'https://images.unsplash.com/photo-1606023192662-7780952d8af5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60',
          userName: 'Елена Таргоний',
          action: 'прокомментировал(а) ваше видео',
          videoName: '“Природа в Кракове”',
          iconName: 'video-icon',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.notifications {
  display: flex;
  flex-direction: column;
  //background-color: #F5F5F5;
  background-image: url("~@/assets/img/high-blue-bg.svg");
  background-repeat: no-repeat;
  background-position-y: -58px;
  background-size: 100%;
  height: 100%;

  &-header {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-top: 10px;
  }

  &-content {
    background: #FFFFFF;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 5px 15px 10px;
    margin: 16px 16px 120px;
    height: 100%;
    overflow: scroll;

    &__item {
      display: flex;
      border-bottom: 1px solid #E3E3E3;
      padding-top: 10px;
      padding-bottom: 10px;

      &:last-child {
        border-bottom: none;
      }

      .user {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;
        max-width: 42px;
        min-width: 42px;
        max-height: 42px;
        min-height: 42px;
        margin-right: 12px;
        background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);

        img {
          width: 100%;
        }

      }

      p {
        font-size: 15px;

        span {
          color: #7157B3;
        }

        &.time-ago {
          color: #606060;
          font-size: 14px;
        }
      }

      .video-preview {
        border-radius: 3px;
        max-width: 75px;
        height: max-content;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
        }
      }
    }
  }
}

</style>
