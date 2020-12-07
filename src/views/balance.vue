<template>
  <div class="balance">
    <div class="balance-header">
      <p>Баланс</p>
      <div class="balance-header__history-btn" v-on:click="goToHistory()">
        <img src="~@/assets/img/icons/history-icon.svg" alt="">
      </div>
    </div>
    <div class="balance-subheader">
      <div>
        <p>12,367,64 ₴</p>
      </div>
      <div class="position-relative">
        <input type="text" value="За все время" readonly>
        <img src="~@/assets/img/icons/select-arrow-down-white.svg" alt="">
      </div>
    </div>
    <div class="balance-content">
      <div class="balance-content__statistics">
        <h5>История вашего заработка</h5>
        <div>
          <div class="stat-item d-flex align-items-center justify-content-between">
            <p class="d-flex align-items-center">
              <img src="~@/assets/img/icons/eye-icon-thin.svg" alt="" class="mr-2">
              Я посмотрел видео</p>
            <span><b>325</b></span>
          </div>
          <div class="stat-item d-flex align-items-center justify-content-between">
            <p class="d-flex align-items-center">
              <img src="~@/assets/img/icons/dollar-icon.svg" alt="" class="mr-2">
              Заработали за просмотры</p>
            <span><b>325</b></span>
          </div>
          <div class="stat-item d-flex align-items-center justify-content-between">
            <p class="d-flex align-items-center">
              <img src="~@/assets/img/icons/channel-dark.svg" alt="" class="mr-2">
              Показав ваших видео</p>
            <span><b>325</b></span>
          </div>
          <div class="stat-item d-flex align-items-center justify-content-between">
            <p class="d-flex align-items-center">
              <img src="~@/assets/img/icons/dollar-icon.svg" alt="" class="mr-2">
              Заработали c ваших видео</p>
            <span><b>325</b></span>
          </div>
          <div class="stat-item d-flex align-items-center justify-content-between">
            <p class="d-flex align-items-center">
              <img src="~@/assets/img/icons/partners-dark.svg" alt="" class="mr-2">
              Вы привели рефералов</p>
            <span><b>325</b></span>
          </div>
          <div class="stat-item d-flex align-items-center justify-content-between">
            <p class="d-flex align-items-center">
              <img src="~@/assets/img/icons/dollar-icon.svg" alt="" class="mr-2">
              Заработали c рефералов</p>
            <span><b>325</b></span>
          </div>
        </div>
      </div>
      <div class="balance-content__statistics" style="padding-left: 14px; padding-right: 14px;">
        <h5 class="d-flex align-items-center">
          <img class="mr-2" src="~@/assets/img/icons/money-icon-black.svg" alt="">
          Вывести средства</h5>
        <div>
          <p class="replenish-text">Минимальный запрос на изъятие средств составляет
            <b>210 ₴</b>
          </p>
          <div class="replenish-card">
            <div class="mask-top"></div>
            <div class="mask-bot"></div>
            <div class="primary-part d-flex align-items-center justify-content-between">
              <div>
                <p>Ваш баланс</p>
                <p>12,367,64 ₴</p>
              </div>
              <div>
                <img src="~@/assets/img/icons/cc-card-chip.svg" alt="">
              </div>
            </div>
            <div class="secondary-part d-flex align-items-center justify-content-between">
              <div class="">
                <p>Введите номер карты</p>
                <input class="cc-number" type="text" placeholder="0000 0000 0000 0000">
              </div>
              <div>
                <p>Сумма</p>
                <input class="amount" type="text" placeholder="500">
              </div>
            </div>
          </div>
          <div class="replenish-button">
            <button>Отправить запрос</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "balance",
  methods: {
    goToHistory() {
      this.$router.push('/balance/history');
    }
  }
}
</script>

<style scoped lang="scss">

.balance {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url("~@/assets/img/high-blue-bg.svg");
  background-repeat: no-repeat;
  background-position-y: -58px;
  background-size: 100%;

  &-header {
    position: relative;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 600;
    text-align: center;

    &__history-btn {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 10px;
      top: 5px;
    }
  }

  &-subheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 16px;
    color: #FFFFFF;

    p {
      font-size: 28px;
      font-weight: 600;
    }

    input {
      width: 142px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      box-sizing: border-box;
      border-radius: 4px;
      background: transparent;
      padding-left: 15px;
      color: #ffffff;
    }
    img {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }

  &-content {
    height: 100%;
    overflow: scroll;
    padding-bottom: 140px;

    &__statistics {
      background: #FFFFFF;
      box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 15px 16px 5px;
      margin: 0 16px 15px;

      h5 {
        color: #333333;
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 10px;
      }

      .stat-item {
        padding-top: 10px;
        padding-bottom: 10px;
        border-top: 1px solid #F5F5F5;
        color: #606060;
        font-size: 15px;
      }
      .replenish-text {
        color: #333333;
        font-size: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #F5F5F5;
      }

      .replenish-card {
        z-index: 1;
        position: relative;
        background: linear-gradient(177.23deg, #667BE6 -13.49%, #744EA7 109.75%);
        border-radius: 30px;
        padding: 30px 30px 20px;
        margin: 15px 0 20px;
        overflow: hidden;
        color: #FFFFFF;

        .mask-top {
          z-index: -1;
          background-image: url("~@/assets/img/mask-top.svg");
          position: absolute;
          top: 0;
          right: 0;
          width: 180px;
          height: 83px;
        }
        .mask-bot {
          z-index: -1;
          background-image: url("~@/assets/img/mask-bot.svg");
          position: absolute;
          bottom: 0;
          left: 0;
          width: 180px;
          height: 83px;
        }

        .primary-part {
          z-index: 10;
          margin-bottom: 20px;

          p:first-child {
            opacity: 0.8;
            font-size: 14px;
          }
          p:last-child {
            font-size: 28px;
          }
        }

        .secondary-part {
          z-index: 10;

          & > div {
            padding-bottom: 5px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.7);
          }

          p {
            font-size: 14px;
            margin-bottom: 10px;
          }
          input {
            background: none;
            border: none;
            letter-spacing: 0.5px;
            color: rgba(255, 255, 255, 0.7);
            padding: 0;

            &::placeholder {
              color: rgba(255, 255, 255, 0.7);
            }

            &.cc-number {
              width: 165px;
            }
            &.amount {
              width: 53px;
            }
          }
        }
      }

      .replenish-button {
        text-align: center;
        margin-bottom: 10px;

        button {
          background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
          box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
          border-radius: 100px;
          border: none;
          color: #FFFFFF;
          padding: 10px 30px;
        }
      }
    }
  }
}

</style>
