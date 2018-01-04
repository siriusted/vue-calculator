<template>
  <section id="keypad">
    <div class="btn-group" v-for="row in buttons">
      <Button v-for="button in row" :text="button" @click.native="$emit('btnclick', $event.target.textContent)"/>
    </div>
  </section>
</template>

<script>
  import Button from './Button';

  export default {
    data() {
      return {
        buttons: [
          ['7', '8', '9', 'C', '⌫'],
          ['4', '5', '6', '+', '-'],
          ['1', '2', '3', '×', '÷'], 
          ['.', '0', '(', ')', '=']
        ]
      }
    },
    components: { Button }
  }
</script>

<style scoped>
  #keypad {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }

  .btn-group {
    display: flex;
    justify-content: space-around;
  }
</style>

