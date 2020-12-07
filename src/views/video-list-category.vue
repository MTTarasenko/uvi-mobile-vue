<template>
  <div class="categories">
    <div class="categories-content">
      <div class="categories-content__header">
        <button v-on:click="$router.go(-1)">
          <img src="~@/assets/img/icons/arrow-back.svg" alt="">
        </button>
        <h5>Путешествия и события</h5>
      </div>
      <div class="categories-content__sort">
        <div class="w-100">
          <autocomplete
              :search="search"
              placeholder="Поиск"
              aria-label="Search for a country"
              base-class="search-ac-40"
          ></autocomplete>
        </div>
        <div>
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
      <div class="categories-content__list">
        <Video v-for="video in testArrayWithVideos"
               v-bind:video="video"
               v-bind:key="video.index"/>
      </div>
    </div>
  </div>
</template>

<script>


import Autocomplete from "@trevoreyre/autocomplete-vue";
import Video from "@/components/video";
import FiltersIcon from "@/components/icons/filters-icon";
import FiltersModal from "@/components/modals/filters";
import SelectCategory from "@/components/modals/select-category";

export default {
  name: "video-list-category",
  components: {
    Autocomplete,
    Video,
    FiltersIcon,
    FiltersModal,
    SelectCategory,
  },
  data() {
    return {
      filtersToggle: false,
      exampleArray: ['Apple', 'Apple2', 'Apple3', 'Apple4', 'Apple5dhffffffffffffff fffffffffffffffffffffff fffffffffffffffff', 'Apple6', 'Google', 'Facebook', 'HP', 'Asus', 'Razer', 'Huawei', 'Samsung'],
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
    search(input) {
      console.log('searching');
      if (input.length < 1) {
        return []
      }
      return this.exampleArray.filter(item => {
        return item.toLowerCase()
            .startsWith(input.toLowerCase())
      })
    },
    toggleFilters() {
      this.filtersToggle = !this.filtersToggle;
    },
    closeModal(modal) {
      this.$bvModal.hide(modal);
    },
    openCategoryModal() {
      this.$bvModal.show('category-modal')
    },
  }
}
</script>

<style scoped lang="scss">

.search-ac {
  &-input {
    height: 40px;
    line-height: 40px;
  }
}

.categories {
  display: flex;
  flex-direction: column;
  height: 100%;
  //padding-bottom: 120px;
  overflow: scroll;


  &-content {
    display: flex;
    flex-direction: column;
    //height: 100%;
    background-image: url("~@/assets/img/global-bg-image.svg");
    background-repeat: no-repeat;
    background-position-y: -75px;
    background-size: 100%;


    &__header {
      display: flex;
      align-items: center;
      margin: 10px 0 20px;
      padding-left: 12px;

      h5 {
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 0;
      }
      button {
        background: none;
        border: none;
        margin-right: 20px;
      }
    }

    &__sort {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;

      input {
        height: 40px;
        line-height: 40px;
      }

      button {
        //width: 100%;
        background: #FFFFFF;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        border: none;
        height: 40px;
        line-height: 40px;
        white-space: nowrap;
        padding: 0 15px;
        margin-left: 10px;
      }
    }

    &__list {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-grow: 1;
      justify-content: space-between;
      padding: 15px 15px 100px;
    }
  }

}

</style>
