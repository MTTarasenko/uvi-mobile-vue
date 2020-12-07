<template>
  <svg width="22" height="21" viewBox="0 0 22 21" :fill="fill" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M10.9998 16.75L4.82784 19.995L6.00684 13.122L1.00684 8.255L7.90684 7.255L10.9928 1.002L14.0788 7.255L20.9788 8.255L15.9788 13.122L17.1578 19.995L10.9998 16.75Z"
        :stroke="strokeColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: "star",
  props: {
    fill: {
      type: String,
      default: "none"
    },
    strokeColor: {
      type: String,
      default: '#606060'
    }
  }
}
</script>

<style scoped>

</style>
