<template #default="{ hide }">
  <div class="sidebar">
    <div class="sidebar-close" @click="$emit('hide')">
      <img src="~@/assets/img/icons/close-icon-white.svg" alt="close">
    </div>
    <div class="sidebar-logo">
      <div>
        <img src="~@/assets/img/UVI-logo.svg" alt=" ">
      </div>
    </div>
    <div class="sidebar-list">
      <router-link to="/video-list-category">
        <div>
          <img src="~@/assets/img/icons/new-label.svg" alt=" ">
        </div>
        Новые
      </router-link>
      <router-link to="/video-list-category">
        <div>
          <img src="~@/assets/img/icons/medal.svg" alt=" ">
        </div>
        Лучшие
      </router-link>
      <router-link to="/video-list-category">
        <div>
          <img src="~@/assets/img/icons/growth.svg" alt=" ">
        </div>
        Хайп
      </router-link>
      <router-link to="/video-list-category" v-b-toggle:categories>
        <div>
          <img src="~@/assets/img/icons/label.svg" alt=" ">
        </div>
        Категории
        <img class="collapse-arrow ml-2" v-bind:class="{'rotated': arrowIsUp}"
             src="~@/assets/img/icons/small-grey-arrow-down.svg" alt=" ">
      </router-link>
      <b-collapse id="categories" class="mt-2" @show="toggleArrow()" @hide="toggleArrow()">
        <ul class="categories-list">
          <li>
            <router-link to="/video-list-category">Развлечения</router-link>
          </li>
          <li>
            <router-link to="/video-list-category">Блогеры</router-link>
          </li>
          <li>
            <router-link to="/video-list-category">Красота</router-link>
          </li>
          <li>
            <router-link to="/video-list-category">Наука и техника</router-link>
          </li>
          <li>
            <router-link to="/video-list-category">Путешествия и события</router-link>
          </li>
          <li>
            <router-link to="/video-list-category">Новости и политика</router-link>
          </li>
          <li>
            <router-link to="/video-list-category">Музыка</router-link>
          </li>
          <li>
            <router-link to="/video-list-category">Мультфильмы</router-link>
          </li>
          <li>
            <router-link to="/video-list-category">Видеоигры</router-link>
          </li>
          <li>
            <router-link to="/video-list-category">Разное</router-link>
          </li>
        </ul>
      </b-collapse>
      <router-link to="/video-list-category">
        <div>
          <img src="~@/assets/img/icons/page.svg" alt=" ">
        </div>
        Политика конфиденциальности
      </router-link>
      <router-link to="/video-list-category">
        <div>
          <img src="~@/assets/img/icons/surface.svg" alt=" ">
        </div>
        Правила
      </router-link>
      <router-link to="/video-list-category">
        <div>
          <img src="~@/assets/img/icons/rules.svg" alt=" ">
        </div>
        Публичная оферта
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "side-menu",
  data() {
    return {
      arrowIsUp: false
    }
  },
  methods: {
    toggleArrow() {
      this.arrowIsUp = !this.arrowIsUp;
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  background-image: url("~@/assets/img/Frame 3.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;

  &-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-logo {
    margin: 0 auto;
    padding-top: 60px;
    text-align: center;
    width: max-content;

    div {
      background: #FFFFFF;
      box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 12px 20px;

      img {
        min-width: 86px;
        max-width: 86px;
        min-height: 40px;
        max-height: 40px;
      }
    }
  }

  &-list {
    //padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    a {
      display: flex;
      align-items: center;
      padding: 0 16px;
      margin-bottom: 10px;
      height: 40px;
      line-height: initial;
      text-decoration: none;
      color: #333333;
      font-weight: 600;

      &:active {
        background: rgba(113, 87, 179, 0.1);
      }

      div {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 16px;
      }
    }

    .categories-list {
      list-style: none;
      padding: 0;

      li {
        color: #333333;
        line-height: 40px;

        a {
          padding-left: 50px;
          font-weight: 400;
        }
      }
    }
  }
}

.collapse-arrow {
  transition: all 300ms ease-in-out;

  &.rotated {
    transition: all 300ms ease-in-out;
    transform: rotate(180deg);
  }
}
</style>
