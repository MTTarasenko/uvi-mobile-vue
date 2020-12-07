<template>
  <div>
    <input type="radio"
           :id="id"
           class="d-none"
           :name="name"
           :checked="checked" v-on:change="$emit('change')">
    <label :for="id">
      <span :style="cssVars"></span>
    </label>
  </div>
</template>

<script>
export default {
name: "custom-radio-button",
  props: {
    name: {
      Type: String,
    },
    id: {
      Type: String,
    },
    color: {
      Type: String,
    },
    checked: {
      Type: Boolean,
    }
  },
  computed: {
    cssVars() {
      return {
        '--color': this.color,
      }
    }
  }
}
</script>

<style scoped lang="scss">

label {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: 2px solid var(--color);
    border-radius: 50%;
  }
}

input[type='radio']:checked ~ label span:after {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color);
}


</style>
