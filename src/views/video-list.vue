<template>
  <div class="overflow-auto h-100">
    <div class="home-page">
      <div>
        <b-carousel
            class="home-carousel"
            id="carousel-1"
            v-model="slide"
            :interval="0"
            indicators
            background="#ababab"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
          <b-carousel-slide v-for="news in testArrayWithNews" v-bind:key="news.index">
            <template #img>
              <div class="carousel-content position-relative h-100">
                <div class="h-100 d-flex justify-content-center align-items-center overflow-hidden">
                  <img
                      class="d-block img-fluid"
                      :src="news.photoUrl"
                      alt="image slot"
                  >
                </div>
                <div class="news-description position-absolute">
                  <h3 class="text-truncate">{{ news.title }}</h3>
                  <p>{{ news.text }}</p>
                </div>
                <div class="mask-for-gradient position-absolute"></div>
              </div>
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="home-page-sorting">
        <div class="position-relative flex-grow-1" v-b-modal.search-modal>
          <input type="text"
                 class="shadow-item"
                 placeholder="Поиск"
                 readonly>
          <img class="position-absolute"
               src="~@/assets/img/icons/magnifier-icon.svg"
               alt=" " style="left: 10px; top: 10px">
        </div>

        <b-modal id="search-modal" modal-class="full-screen-modal" hide-header hide-footer hide-backdrop>
          <SearchModal v-on:close-modal="closeModal('search-modal')"/>
        </b-modal>


        <div class="flex-grow-1 ml-3">
          <button class="shadow-item" v-on:click="toggleFilters" v-b-modal.filters-modal>
            Фильтры
            <FiltersIcon v-if="filtersToggle" v-bind:icon-color="'#4283EA'"/>
            <FiltersIcon v-else v-bind:icon-color="'#ffffff'"/>
          </button>
          <b-modal id="filters-modal" modal-class="full-screen-modal"
                   centered hide-header hide-footer hide-backdrop>
            <FiltersModal v-on:close-modal="closeModal('filters-modal')"
                          v-on:inputClick="openCategoryModal()"/>
          </b-modal>
          <b-modal id="category-modal" centered hide-header hide-footer>
            <SelectCategory v-on:closeCatModal="closeModal('category-modal')"/>
          </b-modal>
        </div>
      </div>
      <div class="home-page-body">
        <div class="home-page-body__grid">
          <!--          <router-link to="/main/video-view">Watch Video</router-link>-->
          <Video v-for="video in testArrayWithVideos"
                 v-bind:video="video"
                 v-bind:key="video.index"
                 v-on:goToVideo="watchVideo(video)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FiltersIcon from '@/components/icons/filters-icon'
import Video from '@/components/video'
import FiltersModal from '@/components/modals/filters'
import SelectCategory from '@/components/modals/select-category'
import SearchModal from '@/components/modals/video-search'

export default {
  name: "home",
  components: {
    FiltersIcon,
    Video,
    FiltersModal,
    SelectCategory,
    SearchModal
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      filtersToggle: false,
      passedVideoFromChild: {},
      testArrayWithNews: [
        {
          photoUrl: "https://images.unsplash.com/photo-1605025954486-9bb893ee1897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, natus.",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur doloremque earum excepturi, inventore ipsam maxime nobis, nostrum nulla quam quasi rem voluptatem! Doloremque est impedit nemo nisi repellat sit."
        },
        {
          photoUrl: "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, natus.",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur doloremque earum excepturi, inventore ipsam maxime nobis, nostrum nulla quam quasi rem voluptatem! Doloremque est impedit nemo nisi repellat sit."
        },
        {
          photoUrl: "https://images.unsplash.com/photo-1593331169537-e54caf51251a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, natus.",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur doloremque earum excepturi, inventore ipsam maxime nobis, nostrum nulla quam quasi rem voluptatem! Doloremque est impedit nemo nisi repellat sit."
        },
        {
          photoUrl: "https://images.unsplash.com/photo-1604559258419-124e23c102e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, natus.",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur doloremque earum excepturi, inventore ipsam maxime nobis, nostrum nulla quam quasi rem voluptatem! Doloremque est impedit nemo nisi repellat sit."
        },
        {
          photoUrl: "https://images.unsplash.com/photo-1604559258419-124e23c102e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, natus.",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur doloremque earum excepturi, inventore ipsam maxime nobis, nostrum nulla quam quasi rem voluptatem! Doloremque est impedit nemo nisi repellat sit."
        },
        {
          photoUrl: "https://images.unsplash.com/photo-1604559258419-124e23c102e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, natus.",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur doloremque earum excepturi, inventore ipsam maxime nobis, nostrum nulla quam quasi rem voluptatem! Doloremque est impedit nemo nisi repellat sit."
        },
        {
          photoUrl: "https://images.unsplash.com/photo-1604559258419-124e23c102e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, natus.",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur doloremque earum excepturi, inventore ipsam maxime nobis, nostrum nulla quam quasi rem voluptatem! Doloremque est impedit nemo nisi repellat sit."
        },
        {
          photoUrl: "https://images.unsplash.com/photo-1604559258419-124e23c102e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, natus.",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur doloremque earum excepturi, inventore ipsam maxime nobis, nostrum nulla quam quasi rem voluptatem! Doloremque est impedit nemo nisi repellat sit."
        },
      ],
      testArrayWithVideos: [
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
        {
          thumbUrl: "https://images.unsplash.com/photo-1588715703712-2a8d1b0c9619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1004&q=80",
          watchPrice: 4,
          duration: "1:58",
          userPhoto: "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          videoTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, hic.",
          views: 15437,
          likes: 57568,
          date: '12.12.12',
          comments: 356
        },
      ]
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    toggleFilters() {
      this.filtersToggle = !this.filtersToggle;
    },
    watchVideo(value) {
      if (this.$router.currentRoute.path !== '/main/video-view') {
        this.$router.push({name: 'video'});
        // TODO пытался передать обьект value как video как параметры но не получилось
        console.log(value);
      } else {
        console.log('already at view');
      }
    },
    openCategoryModal() {
      this.$bvModal.show('category-modal')
    },
    closeModal(modal) {
      this.$bvModal.hide(modal);
    }
  }
}
</script>

<style scoped lang="scss">

.home-page {
  background-color: #F5F5F5;
  background-image: url("~@/assets/img/global-bg-image.svg");
  background-repeat: no-repeat;
  background-position-y: -58px;
  background-size: 100%;

}

::v-deep {
  .home-carousel {

    .carousel-inner {

      .carousel-item {
        height: 230px;

        .carousel-content {

          .news-description {
            z-index: 11;
            width: 100%;
            top: 50%;
            color: #FFFFFF;
            padding: 0 16px;

            h3 {
              font-weight: 600;
              font-size: 20px;
            }

            p {
              font-size: 15px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2; /* number of lines to show */
              -webkit-box-orient: vertical;
            }
          }

          .mask-for-gradient {
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 10;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
          }
        }
      }
    }

    .carousel-indicators {
      align-items: center;
      justify-content: start;
      margin-left: 16px;

      li {
        min-width: 6px;
        max-width: 6px;
        min-height: 6px;
        max-height: 6px;
        border-radius: 50%;
        border: none;

        &.active {
          background-color: #6D64C6;
          border: 2px solid #FFFFFF;
        }
      }
    }
  }

}

.home-page-sorting {
  display: flex;
  padding: 15px 16px 0;

  .shadow-item {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    border: none;
    height: 40px;
    line-height: 40px;
  }

  input {
    padding-left: 37px;
  }

  button {
    white-space: nowrap;
    padding: 0 15px;
  }
}


.home-page-body {
  padding: 15px 16px 130px;

  &__grid {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;

  }
}

.video-grid-item {
  flex: 0 0 48%;
  width: 100%;
  margin-bottom: 15px;

  &-thumbnail {
    position: relative;
    overflow: hidden;
    border-radius: 3px;

    .img-block {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 100%;
      max-height: 98px;
      min-height: 98px;

      img {
        width: 100%;
      }
    }

    .price-label {
      transform: rotate(-45deg);
      position: absolute;
      top: -20px;
      left: -39px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 85px;
      height: 57px;
      background: linear-gradient(90deg, #26ACDE 0%, #31C5BE 47.15%, #3EE099 100%), linear-gradient(90deg, #F4CB60 0%, #EC8232 47.15%, #E53B06 100%), #FFD569;
      padding-bottom: 5px;

      span {
        display: block;
        color: #FFFFFF;
        font-size: 16px;
        line-height: 16px;
      }
    }

    .duration-label {
      position: absolute;
      bottom: 5px;
      right: 5px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 2px;
      padding: 1px 3px;
      color: #FFFFFF;
      font-size: 10px;
    }
  }
}

.video-grid-item-title {
  display: flex;
  padding: 10px 0;

  .user-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 30px;
    min-width: 30px;
    max-height: 30px;
    min-height: 30px;
    border-radius: 50%;
    overflow: hidden;

    img {
      height: 100%;
    }
  }

  .video-title {
    margin-left: 10px;

    p {
      color: #333333;
      font-size: 15px;
      line-height: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;

    }
  }
}

.video-grid-item-numbers {
  div {

  }
}

</style>
