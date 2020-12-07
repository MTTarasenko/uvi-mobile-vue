<template>
  <div class="custom-nav d-flex justify-content-between">
    <div class="custom-nav-item" v-on:click="navigateTo('/main')">
      <template v-if="currentRouterPath === '/main'">
        <HomeIcon v-bind:icon-color="'#7157B3'"
                  v-bind:stroke-width="'2'"/>
        <p class="active">Главная</p>
      </template>
      <template v-else>
        <HomeIcon v-bind:icon-color="'#2C3E50'"
                  v-bind:stroke-width="'1.25'"/>
        <p>Главная</p>
      </template>
    </div>
    <div class="custom-nav-item" v-on:click="navigateTo('/subscriptions')">
      <template v-if="currentRouterPath === '/subscriptions'">
        <SubsIcon v-bind:icon-color="'#7157B3'"
                  v-bind:stroke-width="'2'"/>
        <p class="active">Подписки</p>
      </template>
      <template v-else>
        <SubsIcon v-bind:icon-color="'#2C3E50'"
                  v-bind:stroke-width="'1.25'"/>
        <p>Подписки</p>
      </template>
    </div>
    <div class="custom-nav-item mid"
         v-on:click="navigateTo('/add-video')"
         v-bind:class="{'active' : currentRouterPath === '/add-video'}">
      <div class="">
        <img src="~@/assets/img/icons/video.svg" alt="home1">
      </div>
    </div>
    <div class="custom-nav-item" v-on:click="navigateTo('/notifications')">
      <template v-if="currentRouterPath === '/notifications'">
        <BellIcon v-bind:icon-color="'#7157B3'"
                  v-bind:stroke-width="'2'"/>
        <p class="active">Уведомления</p>
      </template>
      <template v-else>
        <BellIcon v-bind:icon-color="'#2C3E50'"
                  v-bind:stroke-width="'1.25'"/>
        <p>Уведомления</p>
      </template>
    </div>
    <div class="custom-nav-item" v-on:click="navigateTo('/balance')">
      <template v-if="currentRouterPath === '/balance'">
        <MoneyIcon v-bind:icon-color="'#7157B3'"
                   v-bind:stroke-width="'2'"/>
        <p class="active">Баланс</p>
      </template>
      <template v-else>
        <MoneyIcon v-bind:icon-color="'#2C3E50'"
                   v-bind:stroke-width="'1.25'"/>
        <p>Баланс</p>
      </template>
    </div>
  </div>

</template>

<script>
import HomeIcon from "@/components/icons/home-icon";
import SubsIcon from "@/components/icons/subs-icon";
import BellIcon from "@/components/icons/bell-icon";
import MoneyIcon from "@/components/icons/money-icon";

export default {
  name: "nav-tabs",
  components: {
    HomeIcon,
    SubsIcon,
    BellIcon,
    MoneyIcon,
  },
  props: {
    currentRouterPath: {
      Type: String
    }
  },
  methods: {
    navigateTo(pageName) {
      if (pageName !== this.currentRouterPath) {
        this.$router.push({path: pageName})
      }
    }
  },
  mounted() {
    // console.log('from tabs ',this.$router.currentRoute.path, this.$router);
  },
}
</script>

<style scoped lang="scss">

.custom-nav {
  display: flex;
  height: 57px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  //background-color: #ffffff;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.16));
  //background-image: url("~@/assets/img/Surface.svg");
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='134'%3E%3Cpath d='M291.64,0a10,10,0,0,0-9.84,8.24A134,134,0,0,1,150,118,134,134,0,0,1,18.2,8.24,10,10,0,0,0,8.36,0H0V134H300V0Z' fill='%23FFFFFF'/%3E%3C/svg%3E"),
  radial-gradient(circle at 50% 4px, transparent 33px, #FFFFFF 36px);
  background-size: 100%, 100%;
  background-repeat: no-repeat;
  background-position: center top;

  &-item {
    flex: 1 1 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 11px;
      font-weight: 500;

      &.active {
        color: #7157B3;
        font-weight: 600;
      }
    }

    &.mid {
      min-width: 50px;
      max-width: 50px;
      min-height: 50px;
      max-height: 50px;
      background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      transform: translateY(-20px);

      &.active {
        background: linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
      }
    }
  }
}
</style>
