<template>
  <div class="account">
    <div class="account-head">
      <div class="account-head__back">
        <button class="bb-0" v-on:click="$router.go(-1)">
          <img src="~@/assets/img/icons/arrow-back.svg" alt="">
        </button>
      </div>
      <div>
        <p>Аккаунт</p>
      </div>
    </div>
    <div class="account-content">
      <div>
        <router-link to="/profile">
          <img class="mr-2" src="~@/assets/img/icons/channel.svg" alt=" ">
          <p>Мой канал</p>
          <img class="ml-auto" src="~@/assets/img/icons/arrow-right-thin.svg" alt="">
        </router-link>
        <router-link to="">
          <img class="mr-2" src="~@/assets/img/icons/star.svg" alt=" ">
          <p>Избранное видео</p>
          <img class="ml-auto" src="~@/assets/img/icons/arrow-right-thin.svg" alt="">
        </router-link>
        <router-link to="/statistics">
          <img class="mr-2" src="~@/assets/img/icons/stairs.svg" alt=" ">
          <p>Статистика</p>
          <img class="ml-auto" src="~@/assets/img/icons/arrow-right-thin.svg" alt="">
        </router-link>
        <router-link to="/promoted-videos">
          <img class="mr-2" src="~@/assets/img/icons/speaker.svg" alt=" ">
          <p>Продвигаемые видео</p>
          <img class="ml-auto" src="~@/assets/img/icons/arrow-right-thin.svg" alt="">
        </router-link>
        <router-link to="/partnership">
          <img class="mr-2" src="~@/assets/img/icons/partners.svg" alt=" ">
          <p>Партнерство</p>
          <img class="ml-auto" src="~@/assets/img/icons/arrow-right-thin.svg" alt="">
        </router-link>
        <router-link to="/invoices">
          <img class="mr-2" src="~@/assets/img/icons/invoices-icon.svg" alt=" ">
          <p>Cчета на оплату</p>
          <img class="ml-auto" src="~@/assets/img/icons/arrow-right-thin.svg" alt="">
        </router-link>
        <router-link to="/profile-settings">
          <img class="mr-2" src="~@/assets/img/icons/gear.svg" alt=" ">
          <p>Настройки аккаунта</p>
          <img class="ml-auto" src="~@/assets/img/icons/arrow-right-thin.svg" alt="">
        </router-link>
        <router-link to="/">
          <img class="mr-2" src="~@/assets/img/icons/logout.svg" alt=" ">
          <p>Выйти</p>
          <img class="ml-auto" src="~@/assets/img/icons/arrow-right-thin.svg" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "account"
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

  &-content {
    background: #FFFFFF;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 40px 16px 15px;

    a {
      display: flex;
      align-items: center;
      color: #606060;
      text-decoration: none;
      border-bottom: 1px solid #F5F5F5;
      padding: 15px 16px;

      &:last-child {
        border-bottom: none;
      }
      &:active {
        background: #F8F6FB;
      }
    }
  }

}
</style>
