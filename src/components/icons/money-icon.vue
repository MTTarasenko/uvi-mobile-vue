<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8333 7.5H7.49998C6.57951 7.5 5.83331 8.24619 5.83331 9.16667V14.1667C5.83331 15.0871 6.57951 15.8333 7.49998 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V9.16667C17.5 8.24619 16.7538 7.5 15.8333 7.5Z" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.6667 13.3333C12.5871 13.3333 13.3333 12.5871 13.3333 11.6667C13.3333 10.7462 12.5871 10 11.6667 10C10.7462 10 10 10.7462 10 11.6667C10 12.5871 10.7462 13.3333 11.6667 13.3333Z" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.1667 7.50001V5.83334C14.1667 5.39131 13.9911 4.96739 13.6785 4.65483C13.366 4.34227 12.942 4.16667 12.5 4.16667H4.16667C3.72464 4.16667 3.30072 4.34227 2.98816 4.65483C2.67559 4.96739 2.5 5.39131 2.5 5.83334V10.8333C2.5 11.2754 2.67559 11.6993 2.98816 12.0118C3.30072 12.3244 3.72464 12.5 4.16667 12.5H5.83333" :stroke="iconColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: "money-icon",
  props: {
    iconColor: {
      type: String,
      default : '#2C3E50'
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
