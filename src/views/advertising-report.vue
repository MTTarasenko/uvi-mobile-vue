<template>
  <div class="account">
    <div class="account-head">
      <div class="account-head__back">
        <button class="bb-0" v-on:click="$router.go(-1)">
          <img src="~@/assets/img/icons/arrow-back.svg" alt="">
        </button>
      </div>
      <div>
        <p>Рекламный отчет</p>
      </div>
    </div>

    <div class="statistics-tabs">
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="По видео" active>
            <div class="video-item">
              <div class="thumbnail">
                <div class="price-label">
                  <span>4 ₴</span>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1606847993410-27c7ba6beeb8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=" ">
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ducimus eveniet expedita fugiat minus odit quis
                suscipit! Aliquam blanditiis, dolore dolorum enim esse explicabo laudantium magni numquam obcaecati, omnis
                possimus.</p>
              <div class="sum">
                <p>Баланс по видео: 6,981.24 ₴</p>
                <p>Осталось 278 просмотров по 14 ₴</p>
              </div>
              <div class="info">
                <div class="d-flex align-items-center justify-content-between">
                  <span>Баланс</span>
                  <span>6,981.24 ₴</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>Платных просмотров</span>
                  <span>569</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>Стоимость просмотра</span>
                  <span>14 ₴</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>Возможно просмотров</span>
                  <span>967</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>Общий лимит</span>
                  <span>990</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>Дневной лимит</span>
                  <span>1200</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>Ежемесячный лимит</span>
                  <span>2000</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>Общие показы</span>
                  <span>217</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>Общие просмотры</span>
                  <span>3253</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span>Лайки</span>
                  <span>432</span>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab title="По пользователям">
            <div class="user-list">
              <div class="user">
                <div class="user-info">
                  <div class="avatar">
                    <img src="https://images.unsplash.com/photo-1525875975471-999f65706a10?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
                  </div>
                  <div>
                    <p>Игорь Сидрагунский</p>
                    <label>11:28:56 • 23-10-2020</label>
                  </div>
                </div>
                <div>
                  <span>0.27 ₴</span>
                </div>
              </div>
              <div class="user">
                <div class="user-info">
                  <div class="avatar">
                    <img src="https://images.unsplash.com/photo-1525875975471-999f65706a10?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
                  </div>
                  <div>
                    <p>Игорь Сидрагунский Николаевич</p>
                    <label>11:28:56 • 23-10-2020</label>
                  </div>
                </div>
                <div>
                  <span>0.27 ₴</span>
                </div>
              </div>
              <div class="user">
                <div class="user-info">
                  <div class="avatar">
                    <img src="https://images.unsplash.com/photo-1525875975471-999f65706a10?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
                  </div>
                  <div>
                    <p>Игорь Сидрагунский</p>
                    <label>11:28:56 • 23-10-2020</label>
                  </div>
                </div>
                <div>
                  <span>0.27 ₴</span>
                </div>
              </div>
              <div class="user">
                <div class="user-info">
                  <div class="avatar">
                    <img src="https://images.unsplash.com/photo-1525875975471-999f65706a10?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
                  </div>
                  <div>
                    <p>Игорь Сидрагунский</p>
                    <label>11:28:56 • 23-10-2020</label>
                  </div>
                </div>
                <div>
                  <span>245.45 ₴</span>
                </div>
              </div>
              <div class="user">
                <div class="user-info">
                  <div class="avatar">
                    <img src="https://images.unsplash.com/photo-1525875975471-999f65706a10?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
                  </div>
                  <div>
                    <p>Игорь Сидрагунский</p>
                    <label>11:28:56 • 23-10-2020</label>
                  </div>
                </div>
                <div>
                  <span>0.27 ₴</span>
                </div>
              </div>
              <div class="user">
                <div class="user-info">
                  <div class="avatar">
                    <img src="https://images.unsplash.com/photo-1525875975471-999f65706a10?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
                  </div>
                  <div>
                    <p>Игорь Сидрагунский</p>
                    <label>11:28:56 • 23-10-2020</label>
                  </div>
                </div>
                <div>
                  <span>0.27 ₴</span>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>

    <div class="account-content">

    </div>
  </div>
</template>

<script>
export default {
  name: "advertising-report"
}
</script>

<style scoped lang="scss">

::v-deep {
  .tabs {

    .nav-tabs {
      flex-wrap: nowrap;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);

      .nav-item {
        flex-grow: 1;
        text-align: center;
        width: 100%;

        .nav-link {
          position: relative;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          padding-left: 10px;
          padding-right: 10px;

          &.active {
            color: #FFFFFF;
            font-weight: 600;
            background-color: unset;

            &:after {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 1px;
              height: 2px;
              background: #FFFFFF;
            }
          }
        }
      }
    }
  }
}


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
    margin: 40px 16px 15px;
  }

}

.video-item {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin: 20px 16px 15px;
  padding: 15px 16px 0;

  .thumbnail {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 3px;
    max-height: 183px;
    min-height: 183px;

    img {
      height: 100%;
    }

    .price-label {
      transform: rotate(-45deg);
      position: absolute;
      top: -20px;
      left: -60px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 140px;
      height: 74px;
      background: linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), #FFD569;
      padding-bottom: 5px;

      span {
        display: block;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
      }
    }

  }

  p {
    color: #333333;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    margin: 10px 0;
  }

  a {
    width: max-content;
    background: linear-gradient(90deg, #26A8E1 0%, #3495E6 47.15%, #4283EA 100%);
    border-radius: 100px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 30px;
  }

  .sum {
    padding: 10px 0;
    background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26A8E1 0%, #3495E6 47.15%, #4283EA 100%);
    margin-left: -16px;
    margin-right: -16px;

    p {
      color: #FFFFFF;
      text-align: center;
      margin-top: 0;
      margin-bottom: 5px;

      &:first-child {
        font-size: 18px;
        font-weight: 600;
      }
      &:last-child {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .info {
    margin-top: 5px;
    color: #606060;
    font-size: 15px;

    & > div {
      border-top: 1px solid #F5F5F5;
      padding-top: 10px;
      padding-bottom: 10px;

      &:first-child {
        border-top: 0;
      }
    }
  }
}

.user-list {
  padding: 0 16px;

  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 15px 10px;
    margin-bottom: 10px;

    .user-info {
      display: flex;
      flex-direction: row;

      .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        max-width: 42px;
        min-width: 42px;
        max-height: 42px;
        min-height: 42px;
        border-radius: 50%;
        margin-right: 10px;

        img {
          width: 42px;
          height: 42px;
          object-fit: cover;        }
      }

      p {
        color: #333333;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
      label {
        color: #606060;
        font-size: 15px;
        margin-bottom: 0;
      }
    }
    span {
      background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), #7153AF;
      border-radius: 4px;
      padding: 3px 10px;
      color: #FFFFFF;
      font-weight: 600;
      white-space: nowrap;
    }

  }
}

</style>
