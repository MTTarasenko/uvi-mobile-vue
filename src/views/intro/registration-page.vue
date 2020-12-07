<template>
  <div class="register">
    <div class="back-button">
      <button @click="goBack">
        <img src="~@/assets/img/icons/arrow-back.svg" alt=" ">
      </button>
    </div>
    <div class="register-title">
      <p>Добро пожаловать!</p>
    </div>
    <div class="register-form">
      <div class="register-form__field">
        <label for="username">Имя пользователя</label>
        <input type="text" id="username" placeholder="Введите имя пользователя">
        <p v-if="!isFormValid">Введите имя пользователя</p>
      </div>
      <div class="register-form__field">
        <label for="email">E-mail</label>
        <input type="text" id="email" placeholder="Введите email">
        <p v-if="!isFormValid">Введите email</p>
      </div>
      <div class="register-form__field">
        <div class="position-relative overflow-hidden">
          <label for="pass">Пароль</label>
          <div class="position-relative">
            <input type="text" id="pass" placeholder="Введите пароль">
            <div class="eye-img">
              <img src="~@/assets/img/icons/eye.svg" alt=" ">
            </div>
          </div>
        </div>
        <p v-if="!isFormValid">Введите пароль</p>
      </div>
      <div class="register-form__field">
        <div class="position-relative overflow-hidden">
          <label for="pass-conf">Повторите пароль</label>
          <div class="position-relative">
            <input type="text" id="pass-conf" placeholder="Подтвердите пароль">
            <div class="eye-img">
              <img src="~@/assets/img/icons/eye.svg" alt=" ">
            </div>
          </div>
        </div>
        <p v-if="!isFormValid">Введите пароль</p>
      </div>
      <div class="register-form__rules">
        <div>
          <input type="checkbox" id="rules" class="d-none">
          <label for="rules">
            <span></span>
          </label>
        </div>
        <div>
          <p>Создавая учётную запись, Вы соглашаетесь с <a href="#">Политикой конфиденциальности</a></p>
        </div>
      </div>
      <div class="register-form__button">
        <button>Зарегистрироваться</button>
      </div>
      <div class="register-form__log-offer">
        <p>Есть аккаунт?   <b-link :to="'/'">Войти</b-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registration-page",
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
  background-image: url("~@/assets/img/circles-reg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  padding-top: 80px;

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
      margin-bottom:20px;

      label {
        font-size: 14px;
        margin-bottom: 5px;
        line-height: 17px;
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

    &__rules {
      display: flex;
      margin-bottom: 25px;

      label {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;
          border: 2px solid #2F80ED;
          border-radius: 50%;
        }
      }
      input[type='checkbox']:checked ~ label span:after {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #2F80ED;
      }
      p {
        color: #333333;
        font-size: 14px;
        margin-left: 5px;

        a {
          text-decoration-line: underline;
          color: #2F80ED;
        }
      }
    }

    &__button {
      text-align: center;

      button {
        width: 100%;
        height: 55px;
        line-height: 55px;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        background: linear-gradient(90deg, #26A8E1 0%, #3495E6 47.15%, #4283EA 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
        box-shadow: 0px 6px 10px rgba(52, 148, 230, 0.4);
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
          text-decoration: underline;
          color: #2F80ED;
        }
      }
    }
  }
}

</style>
