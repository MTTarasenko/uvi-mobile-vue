<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 3.33333H5.00001C4.07954 3.33333 3.33334 4.07952 3.33334 4.99999V15C3.33334 15.9205 4.07954 16.6667 5.00001 16.6667H15C15.9205 16.6667 16.6667 15.9205 16.6667 15V4.99999C16.6667 4.07952 15.9205 3.33333 15 3.33333Z" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.66666 3.33333V16.6667" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3333 3.33333V16.6667" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.33334 6.66667H6.66668" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.33334 13.3333H6.66668" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.33334 10H16.6667" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3333 6.66667H16.6667" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3333 13.3333H16.6667" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

</template>

<script>
export default {
  name: "subs-icon",
  props: {
    iconColor: {
      type: String,
      default: ''
    },
    strokeWidth:  {
      type: String,
      default: '1.25'
    }
  },
}
</script>

<style scoped>

</style>
