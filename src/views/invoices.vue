<template>
  <div class="history">
    <div class="history-header">
      <p>Счета на оплату</p>
      <a v-on:click="$router.go(-1)">
        <img src="~@/assets/img/icons/arrow-back.svg" alt=" ">
      </a>
    </div>
    <div class="history-content">
      <div class="history-content__item">
        <div class="head-part">
          <div>
            <p>Рекламное видео "Гуриев - пенсионная реформа, демедведизация, доллар.</p>
          </div>
        </div>
        <div class="list-part">
          <div class="d-flex align-items-center justify-content-between">
            <div>Время</div>
            <div>11:28:56 • 23-10-2020</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Количество просмотров</div>
            <div>900</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Сумма за один просмотр</div>
            <div>14 ₴</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Сумма</div>
            <div>12,600.00 ₴</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Оплатить / Отменить</div>
            <div>
              <button class="pay">Оплатить</button>
            </div>
          </div>
        </div>
      </div>
      <div class="history-content__item">
        <div class="head-part">
          <div>
            <p>Рекламное видео "Гуриев - пенсионная реформа, демедведизация, доллар.</p>
          </div>
        </div>
        <div class="list-part">
          <div class="d-flex align-items-center justify-content-between">
            <div>Время</div>
            <div>11:28:56 • 23-10-2020</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Количество просмотров</div>
            <div>900</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Сумма за один просмотр</div>
            <div>14 ₴</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Сумма</div>
            <div>12,600.00 ₴</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Оплатить / Отменить</div>
            <div class="status-green">
              Оплачен
            </div>
          </div>
        </div>
      </div>
      <div class="history-content__item">
        <div class="head-part">
          <div>
            <p>Рекламное видео "Гуриев - пенсионная реформа, демедведизация, доллар.</p>
          </div>
        </div>
        <div class="list-part">
          <div class="d-flex align-items-center justify-content-between">
            <div>Время</div>
            <div>11:28:56 • 23-10-2020</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Количество просмотров</div>
            <div>900</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Сумма за один просмотр</div>
            <div>14 ₴</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Сумма</div>
            <div>12,600.00 ₴</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Оплатить / Отменить</div>
            <div class="status-red">
              Отменен
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "invoices"
}
</script>

<style scoped lang="scss">

.history {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url("~@/assets/img/high-blue-bg.svg");
  background-repeat: no-repeat;
  background-position-y: -58px;
  background-size: 100%;

  &-header {
    position: relative;
    text-align: center;
    color: #FFFFFF;
    font-size: 24px;

    a {
      position: absolute;
      left: 16px;
      top: 0;
    }
  }

  &-content {
    height: 100%;
    overflow: scroll;
    padding: 0 16px 137px;
    margin-top: 20px;

    &__item {
      background: #FFFFFF;
      box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 8px 16px 10px;
      margin-bottom: 10px;
    }
  }
}

.history-content__item {

  .head-part {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    p {
      color: #333333;
      font-weight: 600;

    }
  }

  .list-part {
    color: #606060;
    font-size: 15px;

    & > div {
      padding: 5px 0;
      border-top: 1px solid #F5F5F5;
    }
    .status-red {
      color: #FF5C5D;
    }
    .status-green {
      color: #34A853;
    }
    button {
      border-radius: 5px;
      border: none;
      color: #ffffff;
      padding: 6px 10px;

      &.pay {
        background: #34A853;
      }
      &.cancel {
        background: #FF5C5D;
      }
    }
  }
}

</style>
