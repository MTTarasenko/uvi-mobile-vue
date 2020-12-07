<template>
  <div class="channel-stat">
    <div class="channel-stat-content">
      <div class="stat-item">
        <ul>
          <li class="pt-0">
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
            <img class="w-100"
                 src="https://images.unsplash.com/photo-1606670446561-a850c4fb2e25?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                 alt="">
          </div>
          <div class="d-flex flex-column">
            <p>Гуриев - пенсионная реформа, демедведи...</p>
          </div>
        </div>
        <div class="stat-item-comment">
          <div class="video-comment">
            <div class="video-comment-user">
              <img
                  src="https://images.unsplash.com/photo-1500897975290-fa277274fdb2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=" ">
            </div>
            <div class="video-comment-content">
              <h3>Username</h3>
              <span>15 часов назад</span>
              <p class="truncate" v-bind:class="{'d-block' : commentExpanded}">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam animi autem
                dolorem ea error, incidunt ipsam ipsum numquam, odio officiis quae, quidem sit temporibus. Molestias
                quam sapiente ut!
              </p>
              <button class="read-more-btn bb-0 p-0"
                      v-on:click="commentExpanded = !commentExpanded">
                <template v-if="!commentExpanded">
                  Читать дальше
                </template>
                <template v-if="commentExpanded">
                  Скрыть
                </template>
              </button>
              <div class="controls">
                <div class="d-flex mr-auto mt-2">
                  <div class="d-flex align-items-center mr-2">
                    <div class="icon-block">
                      <img src="~@/assets/img/icons/thumbs-up.svg" alt="">
                    </div>
                    <span>53</span>
                  </div>
                  <div class="d-flex align-items-center mr-2">
                    <div class="icon-block">
                      <img src="~@/assets/img/icons/thumbs-down.svg" alt="">
                    </div>
                    <span>23</span>
                  </div>
                  <div class="d-flex align-items-center mr-2">
                    <div class="icon-block">
                      <img src="~@/assets/img/icons/basket.svg" alt="">
                    </div>
                  </div>
                </div>
                <!--                <div class="d-flex align-items-center mt-2">-->
                <!--                  <span>15 часов назад</span>-->
                <!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-item-head">
          <div>
            <img class="w-100"
                 src="https://images.unsplash.com/photo-1606670446561-a850c4fb2e25?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                 alt="">
          </div>
          <div class="d-flex flex-column">
            <p>Гуриев - пенсионная реформа, демедведи...</p>
          </div>
        </div>
        <div class="stat-item-comment">
          <div class="video-comment">
            <div class="video-comment-user">
              <img
                  src="https://images.unsplash.com/photo-1500897975290-fa277274fdb2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=" ">
            </div>
            <div class="video-comment-content">
              <h3>Username</h3>
              <span>15 часов назад</span>
              <p class="truncate" v-bind:class="{'d-block' : commentExpanded}">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam animi autem
                dolorem ea error, incidunt ipsam ipsum numquam, odio officiis quae, quidem sit temporibus. Molestias
                quam sapiente ut!
              </p>
              <button class="read-more-btn bb-0 p-0"
                      v-on:click="commentExpanded = !commentExpanded">
                <template v-if="!commentExpanded">
                  Читать дальше
                </template>
                <template v-if="commentExpanded">
                  Скрыть
                </template>
              </button>
              <div class="controls">
                <div class="d-flex mr-auto mt-2">
                  <div class="d-flex align-items-center mr-2">
                    <div class="icon-block">
                      <img src="~@/assets/img/icons/thumbs-up.svg" alt="">
                    </div>
                    <span>53</span>
                  </div>
                  <div class="d-flex align-items-center mr-2">
                    <div class="icon-block">
                      <img src="~@/assets/img/icons/thumbs-down.svg" alt="">
                    </div>
                    <span>23</span>
                  </div>
                  <div class="d-flex align-items-center mr-2">
                    <div class="icon-block">
                      <img src="~@/assets/img/icons/basket.svg" alt="">
                    </div>
                  </div>
                </div>
                <!--                <div class="d-flex align-items-center mt-2">-->
                <!--                  <span>15 часов назад</span>-->
                <!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comments-statistics",
  data() {
    return {
      commentExpanded: false,
    }
  }
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

      &-comment {
        padding-top: 10px;
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

.video-comment {
  display: flex;
  margin-bottom: 20px;

  &-user {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 44px;
    min-width: 44px;
    max-height: 44px;
    min-height: 44px;
    border-radius: 50%;
    overflow: auto;
    margin-right: 12px;

    img {
      width: 100%;
    }
  }

  &-content {
    color: #333333;

    h3 {
      max-width: 100%;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* number of lines to show */
      -webkit-box-orient: vertical;
    }


    span {
      color: #606060;
      font-size: 13px;
    }

    p {
      color: #606060;
      font-size: 15px;

      &.truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }

    .read-more-btn {
      color: #7157B3;
      font-size: 15px;
    }

    .controls {
      display: flex;
      flex-wrap: wrap-reverse;
      //margin-top: 10px;

      .icon-block {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 20px;
        min-width: 20px;
        max-height: 16px;
        min-height: 16px;
        margin-right: 7px;

        img {

        }
      }

      span {
        color: #606060;
        font-size: 14px;
        line-height: 14px;
      }
    }

    .show-replays-btn {
      margin-top: 15px;

      button {
        background-color: unset;
        border: unset;
        color: #7157B3;
        font-weight: 600;
        padding: 0;
      }
    }

    .replies {
      padding-top: 20px;

      & > div {

      }
    }
  }
}


</style>
