<template>
  <div class="category">
    <div class="category-list">
      <label class="d-flex align-items-center justify-content-between">
        <div>
          <p>Не имеет значения</p>
        </div>
        <div class="custom-radio-button">
          <input type="radio"
                 id="cat1"
                 class="d-none"
                 name="name">
          <label for="cat1">
            <span></span>
          </label>
        </div>
      </label>
      <label class="d-flex align-items-center justify-content-between">
        <div>
          <p>Развлечения</p>
        </div>
        <div class="custom-radio-button">
          <input type="radio"
                 id="cat2"
                 class="d-none"
                 name="name">
          <label for="cat2">
            <span></span>
          </label>
        </div>
      </label>
      <label class="d-flex align-items-center justify-content-between">
        <div>
          <p>Блогеры</p>
        </div>
        <div class="custom-radio-button">
          <input type="radio"
                 id="cat3"
                 class="d-none"
                 name="name">
          <label for="cat3">
            <span></span>
          </label>
        </div>
      </label>
    </div>
    <div class="category-buttons">
      <button class="category-buttons__cancel" v-on:click="$emit('closeCatModal')">
        Отмена
      </button>
      <button class="category-buttons__confirm">
        Выбрать
      </button>
    </div>
  </div>
</template>

<script>
export default {
name: "select-category"
}
</script>

<style scoped lang="scss">

.category {
  font-family: 'Fira Sans Regular', sans-serif;

  &-list {

    & > label {
      border-bottom: 1px solid #F8F8F8;
      padding-bottom: 10px;
    }
  }

  &-buttons {
    display: flex;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-radius: 100px;
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      font-weight: 600;
    }

    &__cancel {
      border: 2px solid #7157B3;
      background: none;
      margin-right: 8px;
      color: #7157B3;
    }

    &__confirm {
      border: none;
      background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), #5C94F0;
      margin-left: 8px;
      color: #FFFFFF;
    }
  }
}

</style>
