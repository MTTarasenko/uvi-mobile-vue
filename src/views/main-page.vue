<template>
  <div class="main-page">
    <PageHeader/>
    <b-tabs content-class="custom-tabs"
            fill end lazy
            v-model="tabIndex">
      <b-tab active>
        <template #title>
<!--         TODO improve this-->
          <HomeIcon v-if="tabIndex === 0" v-bind:icon-color="'#7157B3'" v-bind:stroke-width="'2'"/>
          <HomeIcon v-else v-bind:icon-color="'#2C3E50'" v-bind:stroke-width="'1.25'"/>
          <p>Главная</p>
        </template>
        <div>
<!--         TODO page content injects here-->
          <HomePage/>
        </div>
      </b-tab>
      <b-tab>
        <template #title>
<!--         TODO improve this-->
          <SubsIcon v-if="tabIndex === 1" v-bind:icon-color="'#7157B3'" v-bind:stroke-width="'2'"/>
          <SubsIcon v-else v-bind:icon-color="'#2C3E50'" v-bind:stroke-width="'1.25'"/>
          <p>Подписки</p>
        </template>
<!--         TODO page content injects here-->
        <Subscriptions/>
      </b-tab>
      <b-tab :title-link-class="'mid-tab'">
        <template #title>
          <div class="">
            <img src="~@/assets/img/icons/video.svg" alt="home1">
          </div>
        </template>
<!--         TODO page content injects here-->
        <AddVideo/>
      </b-tab>
      <b-tab>
        <template #title>
<!--         TODO improve this-->
          <BellIcon v-if="tabIndex === 3" v-bind:icon-color="'#7157B3'" v-bind:stroke-width="'2'"/>
          <BellIcon v-else v-bind:icon-color="'#2C3E50'" v-bind:stroke-width="'1.25'"/>
          <p>Уведомления</p>
        </template>
<!--         TODO page content injects here-->
        <p>Уведомления</p>
      </b-tab>
      <b-tab>
        <template #title>
          <MoneyIcon v-if="tabIndex === 4" v-bind:icon-color="'#7157B3'" v-bind:stroke-width="'2'"/>
          <MoneyIcon v-else v-bind:icon-color="'#2C3E50'" v-bind:stroke-width="'1.25'"/>
          <p>Баланс</p>
        </template>
<!--         TODO page content injects here-->
        <p>Баланс</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>

// pages
import PageHeader from '@/components/page-header'
import HomePage from '@/views/home'
import AddVideo from '@/views/add-video'
import Subscriptions from '@/views/subscriptions'

// icons
import HomeIcon from '@/components/icons/home-icon'
import SubsIcon from '@/components/icons/subs-icon'
import BellIcon from '@/components/icons/bell-icon'
import MoneyIcon from '@/components/icons/money-icon'

export default {
  name: "main-page",
  components: {
    PageHeader,
    HomePage,
    HomeIcon,
    SubsIcon,
    BellIcon,
    MoneyIcon,
    AddVideo,
    Subscriptions
  },
  data() {
    return {
      tabIndex: 1
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-image: url("~@/assets/img/global-bg-image.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  background-color: #F5F5F5;
}

::v-deep {
  .tabs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .tab-content {
      height: 100%;

      .tab-pane {
        height: 100%;

        & > div {
          height: 100%;
          overflow: scroll;
        }
      }
    }
    & > div:last-child {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 50;

      .nav-tabs {
        height: 60px;
        border: none !important;
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.16));
        //background-image: url("~@/assets/img/Surface.svg");
        background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='134'%3E%3Cpath d='M291.64,0a10,10,0,0,0-9.84,8.24A134,134,0,0,1,150,118,134,134,0,0,1,18.2,8.24,10,10,0,0,0,8.36,0H0V134H300V0Z' fill='%23FFFFFF'/%3E%3C/svg%3E"),
            radial-gradient(circle at 50% 1px, transparent 30px, #FFFFFF 33px);
        background-size: 100%, 100%;
        background-repeat: no-repeat;
        background-position: center top;

        .nav-item {
          flex: 1 1 20%;
          display: flex;
          justify-content: center;

          .nav-link {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: unset;
            border: none !important;
            padding: 0;
            color: #2C3E50;

            p {
              font-size: 11px;
              font-weight: 500;
            }

            &.active {
              color: #7157B3;
              background-color: unset;

              p {
                font-weight: 600;
              }
            }

            &.mid-tab {
              display: flex;
              justify-content: center;
              align-items: center;
              min-width: 50px;
              max-width: 50px;
              min-height: 50px;
              max-height: 50px;
              background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 50%;
              transform: translateY(-20px);

              &.active {
                background: linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
              }
            }
          }
        }
      }
    }
  }
}

.mid-tab {
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //min-width: 50px;
  //min-height: 50px;
  //background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //border-radius: 50%;
}

.custom-tabs {
  background-color: #673ab7;
}

.custom-tab-style {
  border: none !important;
  background-color: #673ab7;
  color: #673ab7;
}
</style>
