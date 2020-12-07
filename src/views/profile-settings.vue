<template>
  <div class="account">
    <div class="account-head">
      <div class="account-head__back">
        <button class="bb-0" v-on:click="$router.go(-1)">
          <img src="~@/assets/img/icons/arrow-back.svg" alt="">
        </button>
      </div>
      <div>
        <p>Настройки аккаунта</p>
      </div>
    </div>
    <div class="account-content">
      <div class="account-content__head">
        <div class="big-circle">
          <div class="small-circle"></div>
        </div>
        <button class="bg-edit-btn">
          <img src="~@/assets/img/icons/edit-icon.svg" alt="">
        </button>
      </div>
      <div class="account-content__photo">
        <div>
          <img
              src="https://images.unsplash.com/photo-1603775282359-6796b6c9e40b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4OXx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="">
        </div>
        <button>
          <img src="~@/assets/img/icons/edit-photo-icon.svg" alt="">
        </button>
      </div>
      <div class="account-content__tabs">
        <b-tabs>
          <b-tab title="Общие">
            <div class="account-form-group">
              <label for="username">Имя пользователя</label>
              <input id="username" class="readonly" readonly type="text" value="Doblest">
            </div>
            <div class="account-form-group">
              <label for="mail">E-mail</label>
              <input id="mail" type="text" value="doblest.mail.gmail.com">
            </div>
            <div class="account-form-group">
              <label for="name">Имя</label>
              <input id="name" type="text" value="Елена">
            </div>
            <div class="account-form-group">
              <label for="surname">Фамилия</label>
              <input id="surname" type="text" value="Таргоний">
            </div>
            <div class="account-form-group">
              <label for="info">Информация</label>
              <textarea name="" id="info" rows="4">
                Мы создаем качественные и емкие обзоры техники, стараясь обозревать не только самые последние гаджеты, но и интересные инновационные продукты.
              </textarea>
            </div>
            <div class="account-form-group">
              <label for="fb">Facebook</label>
              <input id="fb" type="text" placeholder="Ссылка на профиль">
            </div>
            <div class="account-form-group">
              <label for="tw">Twitter</label>
              <input id="tw" type="text" placeholder="Ссылка на профиль">
            </div>
            <div class="account-form-group">
              <label for="inst">Instagram</label>
              <input id="inst" type="text" placeholder="Ссылка на профиль">
            </div>
            <div class="account-form-group d-flex justify-content-center">
              <button>Сохранить изменения</button>
            </div>
          </b-tab>
          <b-tab title="Пароль">
            <div class="account-form-group">
              <label for="cur-pass">Текущий пароль</label>
              <div class="position-relative">
                <input id="cur-pass" type="text" placeholder="Введите текущий пароль">
                <span>
                  <img src="~@/assets/img/icons/eye.svg" alt="">
                </span>
              </div>
            </div>
            <div class="account-form-group">
              <label for="new-pass">Новый пароль</label>
              <div class="position-relative">
                <input id="new-pass" type="text" placeholder="Введите новый пароль">
                <span>
                  <img src="~@/assets/img/icons/eye.svg" alt="">
                </span>
              </div>
            </div>
            <div class="account-form-group">
              <label for="new-pass-ag">Подтвердите новый пароль</label>
              <div class="position-relative">
                <input id="new-pass-ag" type="text" placeholder="Подтвердите пароль">
                <span>
                  <img src="~@/assets/img/icons/eye.svg" alt="">
                </span>
              </div>
            </div>
            <div class="account-form-group d-flex justify-content-center">
              <button>Сохранить изменения</button>
            </div>
          </b-tab>
          <b-tab title="Удаление">
            <div class="account-form-group">
              <label for="cur-pass-ag">Текущий пароль</label>
              <div class="position-relative">
                <input id="cur-pass-ag" type="text" placeholder="Введите текущий пароль">
                <span>
                  <img src="~@/assets/img/icons/eye.svg" alt="">
                </span>
              </div>
            </div>
            <div class="account-form-group d-flex justify-content-center">
              <button class="delete">Удалить аккаунт</button>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account"
}
</script>

<style scoped lang="scss">
.account {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url("~@/assets/img/high-blue-bg.svg");
  background-repeat: no-repeat;
  background-position-y: -58px;
  background-size: 100%;
  overflow: scroll;
  padding-bottom: 70px;

  &-head {
    position: relative;
    text-align: center;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 600;
    padding: 10px 0;

    &__back {
      position: absolute;
      left: 20px;

    }
  }

  &-content {
    background: #FFFFFF;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 15px 16px;
    padding: 15px 16px;

    &__head {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 133px;
      background-image: url("~@/assets/img/profile-bg.png");
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;

      .big-circle {
        position: relative;
        bottom: -70px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 120px;
        max-width: 120px;
        min-height: 120px;
        max-height: 120px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
      }

      .small-circle {
        position: relative;
        //bottom: -70px;
        min-width: 100px;
        max-width: 100px;
        min-height: 100px;
        max-height: 100px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
      }

      .bg-edit-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        border: none;
        border-radius: 50%;
        max-width: 34px;
        min-width: 34px;
        max-height: 34px;
        min-height: 34px;
      }
    }

    &__photo {
      position: relative;
      display: flex;
      justify-content: center;

      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 89px;
        min-width: 89px;
        max-height: 89px;
        min-height: 89px;
        border-radius: 50%;
        overflow: hidden;
        margin-top: -46px;
        z-index: 100;

        img {
          width: 100%;
        }
      }

      button {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        border: none;
        border-radius: 50%;
        max-width: 34px;
        min-width: 34px;
        max-height: 34px;
        min-height: 34px;
        left: calc(50% + 25px);
        z-index: 101;
        top: 10px;
      }
    }

    &__tabs {
      margin-top: 20px;
    }
  }

}

.account-form-group {
  margin-top: 15px;

  label {
    color: #333333;
    font-size: 14px;
    margin-bottom: 6px;
  }

  input {
    border: 1px solid #DADADA;
    border-radius: 4px;
    width: 100%;
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    color: #606060;
    font-size: 15px;

    &.readonly {
      background: #F5F5F5;
    }
  }

  span {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(47, 128, 237, 0.1);
    width: 40px;
  }

  textarea {
    border: 1px solid #DADADA;
    border-radius: 4px;
    width: 100%;
    padding-left: 10px;
    color: #606060;
    font-size: 15px;
  }

  button {
    background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
    box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
    border-radius: 100px;
    border: none;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 600;
    padding: 12px 30px;
    margin-top: 5px;

    &.delete {
      background: linear-gradient(90deg, #ED6F9F 0%, #ED7D85 47.15%, #EC8B6A 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
    }
  }
}

::v-deep {
  .tabs {

    .nav-tabs {
      display: flex;
      flex-wrap: nowrap;
      border: none;
      overflow-x: scroll;
      overflow-y: hidden;
      background: #ffffff;
      border-bottom: 1px solid rgba(183, 183, 183, 0.5);

      .nav-item {
        flex-grow: 1;
        margin-bottom: 0;

        .nav-link {
          position: relative;
          border: none;
          color: #909090;

          &.active {
            color: #7157B3;
            font-weight: 600;

            &:after {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              height: 2px;
              background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
            }
          }
        }
      }
    }
  }
}


</style>
