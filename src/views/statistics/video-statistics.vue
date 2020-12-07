<template>
  <div class="channel-stat">
    <div class="channel-stat-content">
      <div class="stat-item">
        <div class="stat-item-head">
          <div>
            <img class="w-100" src="https://images.unsplash.com/photo-1606670446561-a850c4fb2e25?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
          </div>
          <p>Гуриев - пенсионная реформа, демедведи...</p>
        </div>
        <ul>
          <li>
            <div class="d-flex align-items-center">
              <img class="mr-2" src="~@/assets/img/icons/message-icon-thin.svg" alt="">
              <p>Всего комментариев</p>
            </div>
            <div>
              <span>21</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <img class="mr-2" src="~@/assets/img/icons/thumbs-up.svg" alt="">
              <p>Всего лайков</p>
            </div>
            <div>
              <span>21</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <img class="mr-2" src="~@/assets/img/icons/thumbs-down.svg" alt="">
              <p>Всего дизлайков</p>
            </div>
            <div>
              <span>21</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <img class="mr-2" src="~@/assets/img/icons/thumbs-down.svg" alt="">
              <p>Всего дизлайков</p>
            </div>
            <div>
              <span>21</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="stat-item">
        <div class="stat-item-head">
          <div>
            <img class="w-100" src="https://images.unsplash.com/photo-1606670446561-a850c4fb2e25?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
          </div>
          <p>Гуриев - пенсионная реформа, демедведи...</p>
        </div>
        <ul>
          <li>
            <div class="d-flex align-items-center">
              <img class="mr-2" src="~@/assets/img/icons/message-icon-thin.svg" alt="">
              <p>Всего комментариев</p>
            </div>
            <div>
              <span>21</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <img class="mr-2" src="~@/assets/img/icons/thumbs-up.svg" alt="">
              <p>Всего лайков</p>
            </div>
            <div>
              <span>21</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <img class="mr-2" src="~@/assets/img/icons/thumbs-down.svg" alt="">
              <p>Всего дизлайков</p>
            </div>
            <div>
              <span>21</span>
            </div>
          </li>
          <li>
            <div class="d-flex align-items-center">
              <img class="mr-2" src="~@/assets/img/icons/thumbs-down.svg" alt="">
              <p>Всего дизлайков</p>
            </div>
            <div>
              <span>21</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "video-statistics"
}
</script>

<style scoped lang="scss">

.channel-stat {

  &-content {
    padding: 0 16px;

    .stat-item {
      background: #FFFFFF;
      box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      padding: 15px 15px 5px;
      margin-bottom: 12px;

      &-head {
        display: flex;
        align-content: center;
        border-bottom: 1px solid #F5F5F5;
        //margin-bottom: 10px;
        padding-bottom: 10px;

        & > div {
          display: flex;
          align-content: center;
          justify-content: center;
          max-width: 120px;
          min-width: 120px;
          max-height: 70px;
          min-height: 70px;
          overflow: hidden;
          border-radius: 3px;
        }

        p {
          color: #333333;
          font-size: 16px;
          font-weight: 600;
          //margin-bottom: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* number of lines to show */
          -webkit-box-orient: vertical;
          margin: auto 0;
          padding-left: 12px;

        }

      }


      ul {
        padding-left: 0;
        list-style: none;
        margin-bottom: 0;

        li {
          display: flex;
          align-content: center;
          justify-content: space-between;
          border-bottom: 1px solid #F5F5F5;
          padding: 5px 0;

          &:last-child {
            border-bottom: 0;
          }

          p {
            color: #606060;
            font-size: 15px;
          }
          span {
            color: #606060;
            font-size: 15px;
            font-weight: 600;
          }
          img {
            width: 20px;
          }
        }
      }
    }
  }
}

</style>
