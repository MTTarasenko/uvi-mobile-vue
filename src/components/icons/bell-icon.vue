<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.33334 4.16667C8.33334 3.72464 8.50894 3.30072 8.8215 2.98816C9.13406 2.67559 9.55798 2.5 10 2.5C10.442 2.5 10.866 2.67559 11.1785 2.98816C11.4911 3.30072 11.6667 3.72464 11.6667 4.16667C12.6237 4.61919 13.4395 5.32361 14.0267 6.20442C14.6139 7.08523 14.9504 8.10923 15 9.16667V11.6667C15.0627 12.1848 15.2462 12.6809 15.5357 13.1151C15.8252 13.5493 16.2126 13.9095 16.6667 14.1667H3.33334C3.78746 13.9095 4.17485 13.5493 4.46433 13.1151C4.75381 12.6809 4.9373 12.1848 5.00001 11.6667V9.16667C5.04964 8.10923 5.38609 7.08523 5.9733 6.20442C6.56051 5.32361 7.37634 4.61919 8.33334 4.16667" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.5 14.1667V15C7.5 15.663 7.76339 16.2989 8.23223 16.7678C8.70107 17.2366 9.33696 17.5 10 17.5C10.663 17.5 11.2989 17.2366 11.7678 16.7678C12.2366 16.2989 12.5 15.663 12.5 15V14.1667" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: "bell-icon",
  props: {
    iconColor: {
      type: String,
      default : '#2C3E50'
    },
    strokeWidth: {
      type: String,
      default : '1.25'
    }
  },
}
</script>

<style scoped>

</style>
