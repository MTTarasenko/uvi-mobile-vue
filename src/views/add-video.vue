<template>
  <div class="h-100 overflow-auto">
    <div class="new-vid">
      <div class="title">
        <h3>Загрузить новое видео</h3>
      </div>
      <div class="new-vid-info">
        <div class="d-flex align-items-center mb-2">
          <img class="mr-2" src="~@/assets/img/icons/info-black.svg" alt="">
          <span>Информация</span>
        </div>
        <p>
          В связи с техническими работами, временно ограничен объём загружаемых файлов. Максимальный размер 1GB.
          <br><br>
          Минимальная продолжительность ролика должна быть не менее 15 секунд.
        </p>
      </div>
      <template v-if="!isVideoSelected">
        <div class="confirm mt-4">
          <button v-on:click="isVideoSelected = true">Загрузить видео</button>
        </div>
      </template>
      <template v-if="isVideoSelected">
        <div class="new-vid-progress d-flex align-items-center">
          <div class="w-100">
            <b-progress height="4px" :value="value" :max="100"></b-progress>
          </div>
          <div class="ml-2">
            <span>{{ value }} %</span>
          </div>
        </div>
        <div class="new-vid-desc">
          <div class="desc-from-field">
            <label for="title">Название видео</label>
            <input id="title" type="text" placeholder="Введите название">
          </div>
          <div class="desc-from-field">
            <label for="desc">Описание</label>
            <textarea name="" id="desc" rows="5"
                      placeholder="Введите описание"
                      class="pt-2"></textarea>
          </div>
          <div class="desc-from-field">
            <label for="category">Категория</label>
            <div class="position-relative">
              <input id="category" type="text">
              <span class="position-absolute">
              <img src="~@/assets/img/icons/select-arrow-down.svg" alt="">
            </span>
            </div>
          </div>
          <div class="desc-from-field">
            <label for="privacy">Приватность</label>
            <div class="position-relative">
              <input id="privacy" type="text">
              <span class="position-absolute">
              <img src="~@/assets/img/icons/select-arrow-down.svg" alt="">
            </span>
            </div>
          </div>
        </div>
        <div class="new-vid-edit">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <span>Обложка</span>
            </div>
            <div>
              <button class="upl-btn">Загрузить</button>
            </div>
          </div>
          <div class="thumbnail-select">
            <div>
              <b-carousel
                  class="thumbnail-carousel"
                  id="carousel-1"
                  :interval="0"
                  controls
                  indicators
                  background="#ababab"
                  img-width="100%"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
              >
                <b-carousel-slide>
                  <template #img>
                    <div class="d-flex justify-content-center align-items-center overflow-hidden h-100">
                      <img class="w-100"
                           src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                           alt="">
                    </div>
                  </template>
                </b-carousel-slide>

                <b-carousel-slide>
                  <template #img>
                    <div class="d-flex justify-content-center align-items-center overflow-hidden h-100">
                      <img class="d-block img-fluid w-100"
                           src="https://images.unsplash.com/photo-1605722154764-2e3f8deb010a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                           alt="">
                    </div>
                  </template>
                </b-carousel-slide>

                <b-carousel-slide>
                  <template #img>
                    <div class="d-flex justify-content-center align-items-center overflow-hidden h-100">
                      <img class="w-100"
                           src="https://images.unsplash.com/photo-1605719125065-3dd9e3f79057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                           alt="">
                    </div>
                  </template>
                </b-carousel-slide>

                <b-carousel-slide>
                  <template #img>
                    <div class="d-flex justify-content-center align-items-center overflow-hidden h-100">
                      <img class="w-100"
                           src="https://images.unsplash.com/photo-1605737310757-2c893c0b4293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                           alt="">
                    </div>
                  </template>
                </b-carousel-slide>

                <b-carousel-slide>
                  <template #img>
                    <div class="d-flex justify-content-center align-items-center overflow-hidden h-100">
                      <img class="w-100"
                           src="https://images.unsplash.com/photo-1605781643274-40e75f02ff2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                           alt="">
                    </div>
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
            <div class="rotate-btns d-flex align-items-center justify-content-center">
              <button class="bb-0"><img src="~@/assets/img/icons/rounded-arrow-left.svg" alt=""></button>
              <button class="bb-0"><img src="~@/assets/img/icons/rounded-arrow-right.svg" alt=""></button>
            </div>
            <div class="range-slicer">
              <p>Обрезать видео</p>
              <b-form-input type="range" min="0" max="100"></b-form-input>
            </div>
            <div class="video-sound">
              <p>Звук в видео</p>
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center mx-2">
                  <!--                  для радио кнопки атрибут name должен быть одинаковый для обоих-->
                  <!--                  id должен быт таким же как и for у label под ним-->
                  <CustomRadioButton v-on:change="selectedRadio('on')"
                                     v-bind:name="'sound'"
                                     v-bind:id="'on'"
                                     v-bind:color="'#7157B3'"
                                     v-bind:checked="true"/>
                  <label class="ml-2 mb-0" v-bind:class="{'active': isSoundOn}" for="on">Включить</label>
                </div>
                <div class="d-flex align-items-center mx-2">
                  <CustomRadioButton v-on:change="selectedRadio('off')"
                                     v-bind:name="'sound'"
                                     v-bind:id="'off'"
                                     v-bind:color="'#7157B3'"
                                     v-bind:checked="false"/>
                  <label class="ml-2 mb-0" v-bind:class="{'active': !isSoundOn}" for="off">Выключить</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="add-info">
          <div class="desc-from-field">
            <label for="promote">Продвигать видео</label>
            <div class="position-relative">
              <input id="promote" type="text">
              <span class="position-absolute">
                <img src="~@/assets/img/icons/select-arrow-down.svg" alt="">
              </span>
            </div>
          </div>
          <div class="desc-from-field">
            <label for="price">Цена за 1 просмотр</label>
            <div class="position-relative">
              <input id="price" type="text">
            </div>
          </div>
          <div class="desc-from-field">
            <label for="views">Общее количество показов</label>
            <div class="position-relative">
              <input id="views" type="number">
            </div>
          </div>
          <p class="px-3 pb-3">Итоговая стоимость рекламной компании: 100 UAH</p>
          <div class="desc-from-field">
            <label>Количество показов</label>
            <div class="position-relative">
              <input type="text" placeholder="День" class="mb-2">
              <input type="text" placeholder="В месяц">
            </div>
          </div>
          <div class="desc-from-field">
            <label for="percent">Процент просмотра</label>
            <div class="position-relative">
              <input id="percent" type="text" placeholder="Введите процент">
            </div>
          </div>
          <div class="desc-from-field">
            <label>Дата размещения</label>
            <div class="position-relative">
              <input type="date" placeholder="Старт" class="mb-2">
              <input type="date" placeholder="Конец">
            </div>
          </div>
          <div class="desc-from-field">
            <label>Возрастная аудитория</label>
            <div class="d-flex align-items-center">
              <input type="text" placeholder="от 6" class="mr-2">
              <input type="text" placeholder="до 70">
            </div>
          </div>
          <div class="desc-from-field">
            <label for="gender">Половые признаки</label>
            <div class="position-relative">
              <input id="gender" type="text" placeholder="Не имеет значения">
              <span class="position-absolute">
                <img src="~@/assets/img/icons/select-arrow-down.svg" alt="">
              </span>
            </div>
          </div>
          <div class="desc-from-field">
            <label for="location">Местоположение</label>
            <div class="position-relative">
              <input id="location" type="text" placeholder="Весь мир">
              <span class="position-absolute">
                <img src="~@/assets/img/icons/select-arrow-down.svg" alt="">
            </span>
            </div>
          </div>
          <div class="confirm">
            <button>Опубликовать</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

import CustomRadioButton from '@/components/custom-radio-button'

export default {
  name: "add-video",
  components: {
    CustomRadioButton
  },
  data() {
    return {
      value: 25,
      range: [20, 100],
      isSoundOn: true,
      isVideoSelected: false
    }
  },
  methods: {
    selectedRadio(sound) {
      console.log(sound);
      this.isSoundOn = sound === 'on';
    }
  }
}
</script>

<style scoped lang="scss">

.desc-from-field {
  padding-bottom: 20px;

  label {
    font-size: 14px;
    margin-bottom: 6px;
  }

  input {
    height: 40px;
    line-height: 40px;
  }

  input, textarea {
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 4px;
    padding-left: 10px;
    resize: none;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    right: 10px;
    top: 0;
    bottom: 0;
  }
}


.new-vid {
  background-image: url("~@/assets/img/high-blue-bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: -57px;
  background-position-x: center;
  background-color: #F5F5F5;
  color: #333333;
  padding-bottom: 80px;
  min-height: 100%;
  //overflow: scroll;

  .title {
    padding-top: 15px;
    margin-bottom: 20px;

    h3 {
      color: #FFFFFF;
      font-size: 36px;
      font-weight: 600;
      text-align: center;
    }
  }

  &-info {
    background: #FFFFFF;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 0 16px 10px;
    padding: 15px;

    & > div {

      span {
        font-size: 18px;
        font-weight: 600;
      }
    }

    p {
      font-size: 15px;
    }
  }

  &-progress {
    padding: 10px 16px 20px;

    span {
      white-space: nowrap;
      color: #333333;
      font-weight: 600;
    }
  }

  &-desc {
    padding: 0 16px 20px;

  }

  &-edit {
    background: #FFFFFF;
    padding: 20px 16px;

    .upl-btn {
      border: none;
      background: linear-gradient(90deg, #26A8E1 0%, #3495E6 47.15%, #4283EA 100%), #5C94F0;
      border-radius: 100px;
      padding: 12px 36px;
      color: #FFFFFF;
      font-weight: 600;
      font-size: 15px;
    }

    .thumbnail-select {
      margin-top: 20px;
      margin-bottom: 20px;

      .rotate-btns {
        margin-top: 13px;
        border-bottom: 1px solid #EFEFEF;
        padding-bottom: 20px;

        button {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          width: 34px;
          height: 34px;
          margin: 0 7px;
        }
      }

      .range-slicer {
        margin-top: 20px;
        border-bottom: 1px solid #EFEFEF;
        padding-bottom: 20px;

        p {
          margin-bottom: 40px;
        }
      }

      .video-sound {
        padding-top: 20px;

        p {
          margin-bottom: 20px;
        }

        label {
          color: #909090;

          &.active {
            color: #333333;
            font-weight: 600;
          }
        }
      }
    }
  }

  .add-info {
    background: linear-gradient(0deg, #EBF5FD, #EBF5FD), #FFFFFF;
    padding: 20px 16px;

    p {
      font-weight: 600;
      text-align: center;
    }

  }

}
.confirm {
  text-align: center;

  button {
    border: none;
    background: linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #667DE8 0%, #6E63C5 47.15%, #754DA5 100%);
    box-shadow: 0 6px 10px rgba(110, 98, 195, 0.4);
    border-radius: 100px;
    padding: 16px 60px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;

  }
}

::v-deep {
  .progress {

    .progress-bar {
      background: linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), #C4C4C4;
    }
  }

  .thumbnail-carousel {

    .carousel-inner {

      .carousel-item {
        height: 200px;

        & > div {
          border: 1px dashed #909090;
          box-sizing: border-box;
          border-radius: 4px;
        }
      }
    }
  }
}

</style>
