<template>
  <div class="balance">
    <div class="balance-header">
      <button class="bb-0 mr-2" v-on:click="$router.go(-1)">
        <img src="~@/assets/img/icons/arrow-back.svg" alt="">
      </button>
      <p>Партнерство</p>
      <div class="balance-header__history-btn" v-on:click="goToHistory()">
        <img src="~@/assets/img/icons/history-icon.svg" alt="" style="width: 20px; height: 20px">
        История
      </div>
    </div>
    <div class="balance-content">
      <div class="balance-content__statistics" style="padding-left: 14px; padding-right: 14px;">
        <h5 class="d-flex align-items-center">
          <img class="mr-2" src="~@/assets/img/icons/info-black.svg" alt="">
          Информация</h5>
        <div>
          <p class="replenish-text pr-5">
            Заказать выплату, полученную в виде реферального вознаграждения можно, если сумма вознаграждения превышает
            <b>210 ₴</b>
          </p>
          <div class="replenish-card">
            <div class="mask-top"></div>
            <div class="mask-bot"></div>
            <div class="primary-part d-flex align-items-center justify-content-between">
              <div>
                <p>Реферальный баланс</p>
                <p>12,367,64 ₴</p>
              </div>
              <div>
                <img src="~@/assets/img/icons/cc-card-chip.svg" alt="">
              </div>
            </div>
            <div class="secondary-part">
              <div class="">
                <p>Ваш ID для приглашения</p>
                <div class="d-flex">
                  <button class="id mr-3">ID 2358</button>
                  <button class="copy">
                    <img src="~@/assets/img/icons/frames-icon.svg" alt="">
                    Скопировать</button>
                </div>
              </div>
            </div>
          </div>
          <div class="replenish-button">
            <button>Заказать выплату</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "partnership",
  methods: {
    goToHistory() {
      this.$router.push('/partnership-history');
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
    display: flex;
    align-items: center;
    position: relative;
    color: #FFFFFF;
    text-align: center;
    padding: 15px 16px;

    p {
      font-size: 24px;
      font-weight: 600;
    }


    &__history-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(255, 255, 255, 0.7);
      box-sizing: border-box;
      border-radius: 4px;
      padding: 0 10px;
      margin-left: auto;
      height: 30px;
      line-height: 30px;
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

          p {
            font-size: 14px;
            opacity: 0.8;
            margin-bottom: 10px;
          }
          button {
            border-radius: 4px;
            border: none;
            height: 32px;
            line-height: 32px;
            padding: 0 10px;
            min-width: 90px;
            color: #FFFFFF;
            font-size: 15px;
            
            &.id {
              background: rgba(255, 255, 255, 0.2);
            }
            &.copy {
              background: rgba(0, 0, 0, 0.3);
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
