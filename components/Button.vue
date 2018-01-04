<template>
  <button>{{text}}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },

  methods: {
    doClick(v) {
      this.$emit('btnclick', v.target.textContent);
    }
  }
}
</script>

<style scoped>
  button {
    margin: 1%;
    width: 20%;
    height: 50px;
    font-size: 20px;
    color: #00C185;
    color: #32485F;
  }
</style>


