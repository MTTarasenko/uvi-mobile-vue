<template>
  <div class="promote">
    <div class="promote-header">
      <h3>Оплата рекламы</h3>
      <button v-on:click="$router.go(-1)">
        <img src="~@/assets/img/icons/arrow-back.svg" alt=" ">
      </button>
    </div>
    <div class="promote-content">
      <div class="promote-content__form">
        <div class="video-info">
          <div class="d-flex flex-column">
            <div class="vid">
              <img
                  src="https://images.unsplash.com/photo-1606851182342-20036a8b64f2?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="">
            </div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, eius minima modi nesciunt omnis quis
              velit. Animi distinctio est, laborum natus nisi nobis perspiciatis provident, quam, quia sunt tempora
              ut.</h5>
          </div>
        </div>
        <div class="summary">
          <label>Итого:</label>
          <p>Количество просмотров: <span>100</span></p>
          <p>Сумма за один просмотр (грн): <span>1.00 ₴</span></p>
          <p>К оплате: <span>100₴</span></p>
        </div>
        <div class="pay-type">
          <label>Способ оплаты</label>
          <div>
            <img src="~@/assets/img/logo-liqpay.svg" alt="">
          </div>
        </div>
      </div>
    </div>

<!--    TODO удалить эти элементы после подключения модалок-->
    <small class="text-center">временные кнопки для показа модалок</small>
    <div class="d-flex align-items-center justify-content-between p-3">
      <button v-b-modal.success>Success modal</button>
      <button v-b-modal.reject>Reject modal</button>
    </div>


<!--    TODO модалка успешной оплаты-->
    <b-modal id="success" modal-class="full-screen-modal" hide-header hide-footer hide-backdrop>
      <div class="pay-status-modal">
        <button v-on:click="closeModal('success')">
          <img src="~@/assets/img/icons/close-icon-black.svg" alt="">
        </button>
        <img src="~@/assets/img/success-pay.svg" alt="">
        <h4 class="success">Оплата прошла успешно!</h4>
        <p>Спасибо за оплату, мы к вашему видео уже подключили рекламу, хороших просмотров!</p>
      </div>
    </b-modal>



    <!--    TODO модалка неуспешной оплаты-->
    <b-modal id="reject" modal-class="full-screen-modal" hide-header hide-footer hide-backdrop>
      <div class="pay-status-modal">
        <button v-on:click="closeModal('reject')">
          <img src="~@/assets/img/icons/close-icon-black.svg" alt="">
        </button>
        <img src="~@/assets/img/reject-pay.svg" alt="">
        <h4 class="reject">Оплата не прошла!</h4>
        <p>Оплата не прошла, платеж не прошел из-за технической ошибки, попробуйте пополнить карту, или оплатите другой
          картой, спасибо!</p>
      </div>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: "promote-video",
  methods: {
    closeModal(modal) {
      this.$bvModal.hide(modal);
    }
  }
}
</script>

<style scoped lang="scss">

.promote {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url("~@/assets/img/high-blue-bg.svg");
  background-repeat: no-repeat;
  background-position-y: -58px;
  background-size: 100%;
  overflow: scroll;
  padding-bottom: 70px;

  &-header {
    position: relative;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 600;
    text-align: center;

    button {
      position: absolute;
      left: 10px;
      top: 0;
      background: none;
      border: none;

    }
  }

  &-content {
    padding: 15px 16px;

    &__form {
      background: #FFFFFF;
      box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 15px;

    }
  }
}

.video-info {
  border-bottom: 1px solid #EFEFEF;
  margin-bottom: 15px;

  & > div {
    max-width: 166px;

    .vid {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      max-height: 98px;
      overflow: hidden;
      border-radius: 3px;
      margin-bottom: 10px;

      img {
        width: 100%;
      }
    }

    h5 {
      color: #333333;
      font-size: 15px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }
}

.summary {
  border-bottom: 1px solid #EFEFEF;
  margin-bottom: 15px;
  padding-bottom: 10px;
  color: #333333;

  label {
    font-size: 18px;
    font-weight: 600;
  }

  span {
    font-weight: 600;
  }
}

.pay-type {
  label {
    font-size: 18px;
    font-weight: 600;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 35px 30px;
    width: max-content;
  }
}

.pay-status-modal {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
  }

  & > img {
    margin-bottom: 30px;
  }

  h4 {
    font-size: 20px;
    font-weight: 600;

    &.success {
      color: #34A853;
    }

    &.reject {
      color: #FE5B5C;
    }
  }

  p {
    color: #606060;
    font-size: 15px;
    padding: 0 36px;
  }
}

</style>
