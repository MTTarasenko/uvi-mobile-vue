<template>
  <div class="search">
    <div class="search-header d-flex justify-content-between align-items-center">
      <p>Поиск</p>
      <div v-on:click="$emit('close-modal')">
        <img src="~@/assets/img/icons/arrow-back.svg" alt="">
      </div>
    </div>
    <div class="search-field">
      <autocomplete
          :search="search"
          placeholder="Search for a country"
          aria-label="Search for a country"
          base-class="search-ac"
      ></autocomplete>
    </div>
    <div class="search-responses">
      <Video v-for="video in testArrayWithVideos"
             v-bind:video="video"
             v-bind:key="video.index"/>
    </div>
  </div>
</template>

<script>

import Autocomplete from '@trevoreyre/autocomplete-vue'
import Video from '@/components/video'

export default {
  name: "video-search",
  components: {
    Autocomplete,
    Video
  },
  data() {
    return {
      exampleArray: ['Apple','Apple2','Apple3','Apple4','Apple5dhffffffffffffff fffffffffffffffffffffff fffffffffffffffff','Apple6', 'Google', 'Facebook', 'HP', 'Asus', 'Razer', 'Huawei', 'Samsung'],
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
      if (input.length < 1) { return [] }
      return this.exampleArray.filter(item => {
        return item.toLowerCase()
            .startsWith(input.toLowerCase())
      })
    }

  }
}
</script>

<style scoped lang="scss">

.search {
  background-image: url("~@/assets/img/global-bg-image.svg");
  background-repeat: no-repeat;
  //background-position: top;
  background-position-y: 0;
  background-size: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;

  &-header {
    position: relative;
    padding: 15px 0;

    p {
      color: #FFFFFF;
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      width: 100%;
    }

    & > div {
      position: absolute;
      left: 10px;
      top: 16px;
    }
  }

  &-field {
    padding: 0 16px;
  }

  &-responses {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
    padding: 15px;
  }
}



</style>
