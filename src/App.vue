<template>
  <div id="app">
    <PageHeader
        v-if="this.$router.currentRoute.path !== '/'
        && this.$router.currentRoute.path !== '/register'
        && this.$router.currentRoute.path !== '/forgot-pass'"
    />
    <router-view></router-view>
    <div class="custom-nav-tabs"
         v-if="this.$router.currentRoute.path !== '/'
        && this.$router.currentRoute.path !== '/register'
        && this.$router.currentRoute.path !== '/forgot-pass'">
      <NavTabs v-bind:currentRouterPath="currentRoutePath"/>
    </div>
  </div>
</template>

<script>

import PageHeader from "@/components/page-header";
import NavTabs from '@/components/nav-tabs'


import Vue from 'vue'
import VueRouter from 'vue-router'
import {BootstrapVue} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(VueRouter)


export default {
  name: 'App',
  data() {
    return {
      currentRoutePath: {
        Type: String
      }
    }
  },
  components: {
    PageHeader,
    NavTabs
  },
  watch: {
    $route() {
      // this is listening for route changes
      this.currentRoutePath = this.$router.currentRoute.path;
      // console.log(this.$router.currentRoute.path, this.$router);
    }
  },
  mounted() {
    this.currentRoutePath = this.$router.currentRoute.path;
  },
}
</script>

<style lang="scss">

@import 'assets/css/fonts.css';


h1 {
  color: #505050;
}

#app {
  font-family: 'Fira Sans Regular', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  //background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.custom-nav-tabs {
  z-index: 100;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

}

::v-deep {
  .modal-dialog {
    font-family: 'Fira Sans Regular', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

.custom-modal-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
  font-size: 20px;
  font-weight: 600;

  button {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -10px;
    top: -10px;
    background: none;
    border: none;
  }
}

.global-modal-class {
  font-family: 'Fira Sans Regular', sans-serif;
  .modal-dialog {
    margin-right: 16px;
    margin-left: 16px;
  }
}

.full-screen-modal {
  font-family: 'Fira Sans Regular', sans-serif;

  .modal-dialog {
    margin: 0;
    height: 100%;
    min-height: unset;

    .modal-content {

      .modal-body {
        padding: 0;
      }
    }
  }
}

button, input, textarea, li, div {
  outline: none !important;
  resize: none !important;
}

p {
  margin-bottom: 0;
}

.bb-0 {
  border: none;
  background: none;
}

.custom-radio-button {

  label {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border: 2px solid #7157B3;
      border-radius: 50%;
    }
  }

  input[type='radio']:checked ~ label span:after {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #7157B3;
  }

}

.search-ac {

  &-input {
    height: 44px;
    line-height: 44px;
    padding-left: 10px !important;
    border: 1px solid #DADADA !important;
    background: #FFFFFF !important;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15) !important;
    box-sizing: border-box !important;
    border-radius: 4px !important;
    width: 100%;
    outline: none;

    //&[aria-expanded='true'] {
    //  border-bottom: none !important;
    //  border-bottom-left-radius: unset !important;
    //  border-bottom-right-radius: unset !important;
    //}

  }

  &-result-list {
    background-color: #ffffff;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0;
    margin-top: 5px;
    list-style: none;

    .search-ac-result {
      color: #333333;
      padding: 15px;
      border-bottom: 1px solid #E8E8E8;

      &:last-child {
        border-bottom: 0;
      }

      &:active {
        background-color: #E8E6EF;
      }
    }
  }
}

.search-ac-40 {

  &-input {
    height: 40px;
    line-height: 40px;
    padding-left: 10px !important;
    border: none;
    background: #FFFFFF !important;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);
    box-sizing: border-box !important;
    border-radius: 4px !important;
    width: 100%;
    outline: none;

  }

  &-result-list {
    width: 150% !important;
    background-color: #ffffff;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0;
    margin-top: 5px;
    list-style: none;

    .search-ac-40-result {
      color: #333333;
      padding: 15px;
      border-bottom: 1px solid #E8E8E8;

      &:last-child {
        border-bottom: 0;
      }

      &:active {
        background-color: #E8E6EF;
      }
    }
  }
}


</style>
