<template>
  <div class="login">
    <div class="login-logo">
      <div>
        <img src="~@/assets/img/UVI-logo.svg" alt=" ">
      </div>
    </div>
    <div class="login-title">
      <p>Рады Вас видеть!</p>
    </div>
    <div class="login-form">
      <div class="login-form__field">
        <label for="name">Имя пользователя</label>
        <input type="text" id="name" placeholder="Введите имя пользователя" autocomplete="off">
        <span v-if="!isFormValid">Введите имя пользователя</span>
      </div>
      <div class="login-form__field">
        <label for="pass">Пароль</label>
        <div class="position-relative overflow-hidden">
          <input :type="type" id="pass" placeholder="Введите пароль" autocomplete="off">
          <div class="eye-img" v-on:click="togglePassVisibility">
            <img src="~@/assets/img/icons/eye.svg" alt=" ">
          </div>
        </div>
        <span v-if="!isFormValid">Введите пароль</span>
      </div>
      <div class="warning" v-show="!isFormValid">
        <div>
          <img src="~@/assets/img/icons/info-red.svg" alt=" ">
          <p>Неправильное имя пользователя или пароль</p>
        </div>
      </div>
      <div class="login-form__options">
        <div class="d-flex">
          <button class="fb mr-3">
            <img src="~@/assets/img/icons/logos_facebook.svg" alt=" ">
          </button>
          <button class="fb mr-3">
            <img src="~@/assets/img/icons/apple-logo.svg" alt=" ">
          </button>
          <button class="fb mr-3">
            <img src="~@/assets/img/icons/google-logo.svg" alt=" ">
          </button>
        </div>
        <div>
          <b-link v-bind:to="'/forgot-pass'">Забыли пароль?</b-link>
        </div>
      </div>
      <div class="login-form__button">
        <b-link v-bind:to="'/main'">Войти</b-link>
      </div>
      <div class="login-form__reg-offer">
        <p>Нет аккаунта?  <b-link v-bind:to="'/register'">Зарегистрироваться</b-link> </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      isFormValid: true,
      type: 'password',
    }
  },
  methods: {
    togglePassVisibility() {
      if (this.type === 'password') {
        this.type = 'text'
      } else if (this.type === 'text') {
        this.type = 'password'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #333333;
  background-image: url("~@/assets/img/circles-login-page.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;

  &-logo {
    margin: 87px auto 0;
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
    margin-top: 40px;
    margin-bottom: 30px;

    p {
      font-family: 'Fira Sans Medium', sans-serif;
      color: #505050;
      font-size: 36px;
      font-weight: 500;
      text-align: center;
    }
  }

  &-form {
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    height: 100%;

    &__field {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      label {
        color: #333333;
        font-size: 14px;
        margin-bottom: 3px;
      }

      input {
        width: 100%;
        border: 1px solid #DADADA;
        border-radius: 4px;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
      }

      span {
        color: #E53B06;
        font-size: 13px;
        margin-top: 5px;
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
    }

    &__options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      .fb {
        background: #FFFFFF;
        box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        border: none;
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        text-decoration-line: underline;
        color: #2F80ED;
        font-weight: 600;
      }
    }

    &__button {
      text-align: center;
      margin-top: 30px;

      a {
        display: block;
        background: linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
        box-shadow: 0 6px 10px rgba(235, 125, 47, 0.4);
        border-radius: 100px;
        border: none;
        color: #FFFFFF;
        font-weight: 600;
        font-size: 18px;
        width: 100%;
        height: 55px;
        line-height: 55px;
      }
    }

    &__reg-offer {
      margin: 30px 0 20px;
      text-align: center;

      p {
        color: #606060;

        a {
          text-decoration-line: underline;
          color: #2F80ED;
          font-weight: 600;
        }
      }
    }

    .warning {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;

      div {
        display: flex;
        align-items: flex-start;
        max-width: 290px;
        background: #FFFFFF;
        box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        padding: 10px;

        p {
          color: #E53B06;
          font-size: 15px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
