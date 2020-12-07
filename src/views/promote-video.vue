<template>
  <div class="promote">
    <div class="promote-header">
      <h3>Продвигать видео</h3>
      <button v-on:click="$router.go(-1)">
        <img src="~@/assets/img/icons/arrow-back.svg" alt=" ">
      </button>
    </div>
    <div class="promote-content">
      <div class="promote-content__form">
        <div class="video-info">
          <div class="d-flex flex-column">
            <div class="vid">
              <img
                  src="https://images.unsplash.com/photo-1606851182342-20036a8b64f2?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, eius minima modi nesciunt omnis quis
              velit. Animi distinctio est, laborum natus nisi nobis perspiciatis provident, quam, quia sunt tempora
              ut.</h5>
          </div>
        </div>
        <div class="desc-from-field">
          <label for="price">Цена за 1 просмотр</label>
          <input id="price" type="text" placeholder="Введите значение">
        </div>
        <div class="desc-from-field">
          <label for="views">Общее количество показов</label>
          <input id="views" type="text" placeholder="Введите значение">
        </div>
        <p class="px-3 pb-3">Итоговая стоимость рекламной компании: 100 UAH</p>
        <div class="add-info">
          <div class="desc-from-field">
            <label>Количество показов</label>
            <div class="position-relative">
              <input type="text" placeholder="День" class="mb-2">
              <input type="text" placeholder="В месяц">
            </div>
          </div>
          <div class="desc-from-field">
            <label for="percent">Процент просмотра</label>
            <div class="position-relative">
              <input id="percent" type="text" placeholder="Введите процент">
            </div>
          </div>
          <div class="desc-from-field">
            <label>Дата размещения</label>
            <div class="position-relative">
              <input type="date" placeholder="Старт" class="mb-2">
              <input type="date" placeholder="Конец">
            </div>
          </div>
          <div class="desc-from-field">
            <label>Возрастная аудитория</label>
            <div class="d-flex align-items-center">
              <input type="text" placeholder="от 6" class="mr-2">
              <input type="text" placeholder="до 70">
            </div>
          </div>
          <div class="desc-from-field">
            <label for="gender">Половые признаки</label>
            <div class="position-relative">
              <input id="gender" type="text" placeholder="Не имеет значения">
              <span class="position-absolute">
                <img src="~@/assets/img/icons/select-arrow-down.svg" alt="">
              </span>
            </div>
          </div>
          <div class="desc-from-field">
            <label for="location">Местоположение</label>
            <div class="position-relative">
              <input id="location" type="text" placeholder="Весь мир">
              <span class="position-absolute">
                <img src="~@/assets/img/icons/select-arrow-down.svg" alt="">
            </span>
            </div>
          </div>
          <div class="confirm">
            <button v-on:click="$router.push('/promote-pay')">Продвигать</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "promote-video"
}
</script>

<style scoped lang="scss">

.promote {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url("~@/assets/img/high-blue-bg.svg");
  background-repeat: no-repeat;
  background-position-y: -58px;
  background-size: 100%;
  overflow: scroll;
  padding-bottom: 70px;

  &-header {
    position: relative;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 600;
    text-align: center;

    button {
      position: absolute;
      left: 10px;
      top: 0;
      background: none;
      border: none;

    }
  }

  &-content {
    padding: 15px 16px;

    &__form {
      background: #FFFFFF;
      box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 15px 15px 0;

    }
  }
}

.desc-from-field {
  padding-bottom: 20px;

  label {
    font-size: 14px;
    margin-bottom: 6px;
  }

  input {
    height: 40px;
    line-height: 40px;
  }

  input, textarea {
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 4px;
    padding-left: 10px;
    resize: none;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    right: 10px;
    top: 0;
    bottom: 0;
  }
}

p {
  font-weight: 600;
  text-align: center;
}

.add-info {
  background: linear-gradient(0deg, #EBF5FD, #EBF5FD), #FFFFFF;
  padding: 20px 16px;
  margin-left: -15px;
  margin-right: -15px;


  .confirm {
    text-align: center;

    button {
      border: none;
      background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
      box-shadow: 0px 6px 10px rgba(110, 98, 195, 0.4);
      border-radius: 100px;
      padding: 16px 60px;
      color: #ffffff;
      font-size: 18px;
      font-weight: 600;

    }
  }
}

.video-info {
  border-bottom: 1px solid #EFEFEF;
  margin-bottom: 15px;

  & > div {
    max-width: 166px;

    .vid {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      max-height: 98px;
      overflow: hidden;
      border-radius: 3px;
      margin-bottom: 10px;

      img {
        width: 100%;
      }
    }

    h5 {
      color: #333333;
      font-size: 15px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }
}

</style>
