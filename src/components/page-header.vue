<template>
  <div class="header">
    <div class="menu-button">
      <button v-b-toggle.sidebar-1>
        <img src="~@/assets/img/icons/menu.svg" alt=" ">
      </button>
      <b-sidebar id="sidebar-1" backdrop shadow no-header>
        <template #default="{ hide }">
          <SideMenu @hide="hide"/>
        </template>
      </b-sidebar>
    </div>
    <div>
      <button class="promotion-button" v-on:click="goToMyVideos()">Продвижение</button>
    </div>
    <div class="amount-counter">
      <p>12,367,64 ₴</p>
    </div>
    <div class="profile-button">
      <div v-on:click="goToAccount()" v-bind:class="{'border-0' : !userHasProfilePicture}">
        <img v-if="userHasProfilePicture"
            src="https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=" ">
        <img v-if="!userHasProfilePicture" src="~@/assets/img/icons/profile-icon.svg" alt=" ">
      </div>
    </div>
  </div>
</template>

<script>

import SideMenu from '@/components/side-menu'

export default {
  name: "page-header",
  components: {
    SideMenu
  },
  data() {
    return {
      userHasProfilePicture: false,
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/');
    },
    goToAccount() {
      this.$router.push('/account')
    },
    goToMyVideos() {
      this.$router.push('/profile')
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  height: 58px;
  line-height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-image: url("~@/assets/img/high-blue-bg.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;


  .menu-button {
    button {
      background: none;
      border: none;
      padding: 0;
      height: 40px;
      width: 40px;
    }
  }

  .promotion-button {
    background: linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%);
    border-radius: 100px;
    height: 34px;
    line-height: 34px;
    padding: 0 20px;
    border: none;
    color: #FFFFFF;
    font-size: 15px;
  }

  .amount-counter {

    p {
      color: #FFFFFF;
    }
  }

  .profile-button {

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 24px;
      min-width: 24px;
      max-height: 24px;
      min-height: 24px;
      border-radius: 50%;
      overflow: hidden;
      line-height: unset;
      background: none;
      border: 3px solid rgba(255, 255, 255, 0.2);
      padding: 0;
      box-sizing: content-box;

      img {
        height: 24px;
      }
    }
  }
}
</style>
