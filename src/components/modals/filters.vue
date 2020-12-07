<template>
  <div class="filters-modal">
    <div class="filters-modal-header d-flex justify-content-between align-items-center">
      <p>Фильтры</p>
      <div v-on:click="$emit('close-modal')">
        <img src="~@/assets/img/icons/close-icon-white.svg" alt="">
      </div>
    </div>
    <div class="filters-modal-content">
      <div class="filters-form-group">
        <label>По категории</label>
        <div class="position-relative" v-on:click="$emit('inputClick')">
          <input type="text">
          <img src="~@/assets/img/icons/select-arrow-down.svg" alt=" ">
        </div>
      </div>
      <div class="filters-form-group">
        <label>Упорядочить</label>
        <div class="position-relative">
          <input type="text">
          <img src="~@/assets/img/icons/select-arrow-down.svg" alt=" ">
        </div>
      </div>
      <div class="filters-form-group">
        <label>Тип</label>
        <div class="position-relative">
          <input type="text">
          <img src="~@/assets/img/icons/select-arrow-down.svg" alt=" ">
        </div>
      </div>
      <div class="filters-form-group">
        <label>По дате загрузки</label>
        <div class="position-relative">
          <input type="text">
          <img src="~@/assets/img/icons/select-arrow-down.svg" alt=" ">
        </div>
      </div>
      <div class="filters-form-group">
        <label>Длительность</label>
        <div class="position-relative">
          <input type="text">
          <img src="~@/assets/img/icons/select-arrow-down.svg" alt=" ">
        </div>
      </div>
      <div class="filters-form-group">
        <label>По количесву просмотров</label>
        <div class="position-relative">
          <input type="text">
          <img src="~@/assets/img/icons/select-arrow-down.svg" alt=" ">
        </div>
      </div>
      <div class="filters-form-group">
        <label>По количесву комментариев</label>
        <div class="position-relative">
          <input type="text">
          <img src="~@/assets/img/icons/select-arrow-down.svg" alt=" ">
        </div>
      </div>
      <div class="filters-modal-content__button">
        <button>Применить фильтр</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "filters"
}
</script>

<style scoped lang="scss">

.filters-modal {
  background-image: url("~@/assets/img/global-bg-image.svg");
  background-repeat: no-repeat;
  //background-position: top;
  background-position-y: -58px;
  background-size: 100%;
  height: 100vh;

  &-header {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 600;
    padding: 18px;

    p {
      line-height: 22px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 22px;
    }
  }

  &-content {
    padding: 10px 16px 20px;
    background: #FBFBFB;

    &__button {
      text-align: center;

      button {
        height: 44px;
        line-height: 44px;
        padding: 0 50px;
        margin-top: 10px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 600;
        background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
        box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
        border-radius: 100px;
        border: none;
      }
    }
  }
}

.filters-form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 5px;
  }
  input {
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 4px;
    padding-left: 10px;
    height: 40px;
    line-height: 47px;
    width: 100%
  }
  img {
    position: absolute;
    right: 10px;
    top: 16px;
  }
}

</style>
