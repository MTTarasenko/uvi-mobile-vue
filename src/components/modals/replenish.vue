<template>
  <div class="replenish">
    <div class="custom-modal-header">
      <p>Пополнить</p>
      <button @click="$emit('close')">
        <img src="~@/assets/img/icons/close-icon-black.svg" alt="">
      </button>
    </div>
    <div class="replenish-content">
      <p>Укажите количество просмотров на которое хотите пополнить</p>
      <input type="number" placeholder="Ввведите кол-во просмотров"
             v-on:input="calculatePrice($event)">

      <div class="calc" v-if="calculatedPrice">
        Итого к оплате - <b>{{ calculatedPrice }} ₴</b>
      </div>
      <p v-if="calculatedPrice"> После пополнения, общее количество просмотров увеличится на <b>{{ amountOfViews }}.</b></p>
      <button>Создать счет</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "replenish",
  data() {
    return {
      amountOfViews: Number,
      calculatedPrice: 0
    }
  },
  methods: {
    calculatePrice($event) {
      this.amountOfViews = $event.target.value;
      this.calculatedPrice = $event.target.value * 14;
    }
  }
}
</script>

<style scoped lang="scss">

.replenish {
  font-family: 'Fira Sans Regular', sans-serif;

  &-content {
    padding-top: 15px;

    p {
      color: #333333;
      font-size: 15px;
      text-align: center;
    }

    input {
      border: 1px solid #DADADA;
      box-sizing: border-box;
      border-radius: 4px;
      height: 40px;
      line-height: 40px;
      width: 100%;
      color: #333333;
      font-size: 15px;
      padding-left: 10px;
      margin-top: 20px;
    }

    .calc {
      background: rgba(103, 121, 227, 0.1);
      border-radius: 4px;
      width: max-content;
      padding: 0 10px;
      margin: 15px auto;
    }

    button {
      display: block;
      color: #FFFFFF;
      font-size: 15px;
      font-weight: 600;
      padding: 12px 43px;
      background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
      box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
      border-radius: 100px;
      border: none;
      margin: 20px auto 0;
    }
  }
}

</style>
