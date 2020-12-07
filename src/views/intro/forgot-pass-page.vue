<template>
  <div class="register">
    <div class="back-button">
      <button @click="goBack">
        <img src="~@/assets/img/icons/arrow-back.svg" alt=" ">
      </button>
    </div>
    <div class="register-logo">
      <div>
        <img src="~@/assets/img/UVI-logo.svg" alt="">
      </div>
    </div>

    <div class="register-title">
      <p>Не можете войти?</p>
    </div>
    <div class="register-form">
      <div class="register-form__field">
        <label for="email">E-mail</label>
        <input type="text" placeholder="Введите email" id="email">
        <p v-if="!isFormValid">Введите email</p>
      </div>
      <div class="register-form__button">
        <button>Отправить</button>
      </div>
      <div class="register-form__log-offer">
        <p>Есть аккаунт?   <b-link :to="'/'">Войти</b-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "forgot-pass-page",
  data() {
    return {
      isFormValid: true
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">

.register {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  color: #333333;
  background-image: url("~@/assets/img/forgot-pass-circles.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  //padding-top: 85px;

  .back-button {
    position: fixed;
    top: 20px;
    left: 20px;

    button {
      background: none;
      border: none;
      width: 40px;
      height: 40px;
    }
  }

  &-logo {
    margin: 87px auto 80px;
    text-align: center;
    width: max-content;

    div {
      background: #FFFFFF;
      box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 20px;

      img {
        min-width: 86px;
        max-width: 86px;
        min-height: 40px;
        max-height: 40px;
      }

    }
  }


  &-title {
    text-align: center;

    p {
      font-family: 'Fira Sans Medium', sans-serif;
      color: #333333;
      font-size: 30px;
      font-weight: 500;
    }
  }

  &-form {
    padding: 20px 25px 20px;
    display: flex;
    flex-direction: column;
    height: 100%;

    &__field {
      margin-bottom: 20px;

      label {
        font-size: 14px;
        margin-bottom: 6px;
      }

      input {
        width: 100%;
        border: 1px solid #DADADA;
        border-radius: 4px;
        background-color: unset;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
      }

      .eye-img {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(47, 128, 237, 0.1);
        min-width: 40px;
      }

      p {
        color: #E53B06;
        font-size: 13px;
        margin-top: 5px;
      }
    }

    &__button {
      text-align: center;
      margin-top: 10px;

      button {
        width: 100%;
        height: 55px;
        line-height: 55px;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
        box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
        border-radius: 100px;
      }
    }

    &__log-offer {
      text-align: center;
      margin-top: auto;
      padding-top: 20px;

      p {
        color: #606060;

        a {
          font-family: 'Fira Sans Medium', sans-serif;
          text-decoration: underline;
          color: #2F80ED;
        }
      }
    }
  }
}


</style>
