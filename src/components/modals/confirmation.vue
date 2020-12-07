<template>
  <div class="confirmation">
    <div class="custom-modal-header">
      <p>{{ passedObj.headerText }}</p>
      <button @click="$emit('close')">
        <img src="~@/assets/img/icons/close-icon-black.svg" alt="">
      </button>
    </div>
    <div class="confirmation-text">
      <p>{{ passedObj.confirmText }}</p>
    </div>
    <div class="confirmation-buttons">
      <button class="no" @click="$emit('close')">{{ passedObj.noButton }}</button>
      <button class="yes">{{ passedObj.yesButton }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirmation",
  props: {
    passedObj: {
      Type: Object,
    }
  }
}
</script>

<style scoped lang="scss">

.confirmation {

  &-text {
    color: #333333;
    font-size: 15px;
    text-align: center;
    margin: 20px 0;
  }

  &-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 100%;
      height: 42px;
      //line-height: 42px;
      font-size: 15px;
      font-weight: 600;
      margin-right: 15px;
      margin-left: 15px;
      border-radius: 100px;

      &.yes {
        background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
        box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
        border: none;
        color: #FFFFFF;
      }
      &.no {
        background: #FFFFFF;
        border: 1px solid #333333;
        color: #333333;
      }
    }
  }
}

</style>
