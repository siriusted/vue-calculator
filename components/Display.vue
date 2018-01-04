<template>
  <!-- For a component to work with v-model and two-way data binding
  it should accept a value prop and emit an input event with the new value -->
  <input id="display"  
    :value="value" 
    @keyup.enter="$emit('compute')"
    @input="$emit('input', $event.target.value)">
</template>

<script>
  export default {
    name: 'display',
    props: {
      value: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  #display {
    width: 98%;
    min-height: 50px;
    margin: 1%;
    text-align: right;
    font-size: 30px;
  }

  #display:focus {
    /* border: 1px #ccc;
    outline: #ccc;
    cursor: pointer; */
  }
</style>