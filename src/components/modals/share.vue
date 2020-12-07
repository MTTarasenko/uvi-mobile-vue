<template>
  <div class="share">
    <div class="custom-modal-header">
      <p>Поделиться</p>
      <button @click="$emit('close')">
        <img src="~@/assets/img/icons/close-icon-black.svg" alt="">
      </button>
    </div>
    <div class="share-link">
      <input type="text" readonly value="https://uvi.ua/v/ZeAL92?referal_id=286">
      <button>
        <img class="mr-2" src="~@/assets/img/icons/link-icon.svg" alt="">
        Скопировать ссылку
      </button>
    </div>
    <div class="share-divider">
      <span>Или</span>
    </div>
    <div class="share-options">
      <button>
        <img src="~@/assets/img/icons/fb-icon.svg" alt="">
      </button>
      <button>
        <img src="~@/assets/img/icons/tg-icon.svg" alt="">
      </button>
      <button>
        <img src="~@/assets/img/icons/vb-icon.svg" alt="">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "share"
}
</script>

<style scoped lang="scss">

.share {
  color: #333333;


  &-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    input {
      background: #F2F2F2;
      border-radius: 4px;
      width: 100%;
      padding: 11px 10px;
      border: none;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
      box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
      border-radius: 100px;
      margin-top: 20px;
      color: #FFFFFF;
      font-size: 15px;
      font-weight: 600;
      padding: 12px 30px;
      width: max-content;
    }
  }

  &-divider {
    border-bottom: 1px solid #E3E3E3;
    text-align: center;
    margin-top: 5px;

    span {
      background: #ffffff;
      color: #606060;
      font-size: 15px;
      position: relative;
      width: max-content;
      bottom: -12px;
      padding: 0 10px;
    }
  }

  &-options {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), #E8E8E8;
      border-radius: 50%;
      max-height: 42px;
      min-height: 42px;
      max-width: 42px;
      min-width: 42px;
      margin: 0 10px;
    }
  }

}
</style>
