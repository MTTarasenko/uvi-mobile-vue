<template>
  <div class="complaint">
    <div class="custom-modal-header">
      <p>Пожаловаться</p>
      <button @click="$emit('close')">
        <img src="~@/assets/img/icons/close-icon-black.svg" alt="">
      </button>
    </div>
    <div class="complaint-text">
      <p>Пожалуйста, сообщите нам о нарушении правил UVI</p>
    </div>
    <div class="complaint-field">
      <textarea name="" id="" rows="4" placeholder="Сообщение"></textarea>
    </div>
    <div class="complaint-send">
      <button>Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "complaint"
}
</script>

<style scoped lang="scss">

.complaint {

  &-text {
    font-size: 15px;
    text-align: center;
    padding: 0 28px;
    margin-top: 20px;
  }
  
  &-field {
    margin-top: 15px;

    textarea {
      width: 100%;
      border: 1px solid #DADADA;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 10px;
    }
  }

  &-send {
    margin-top: 20px;
    text-align: center;
    button {
      border: none;
      background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
      box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
      border-radius: 100px;
      padding: 12px 50px;
      color: #ffffff;

    }
  }

}
</style>
