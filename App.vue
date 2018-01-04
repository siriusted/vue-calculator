<template>
  <main id="calculator">
    <button @click.prevent><h2>My Vue Calculator</h2></button>
    <p>{{msg}}</p>
    <display :value="val" @compute="computeAnswer" 
    @input="inp => {val = refresh ? inp.slice(-1) : inp; refresh = false;}"/>
    <br/>
    <Keypad @btnclick="addToken"/>
  </main>
</template>

<script>
  import Display from './components/Display';
  import Keypad from './components/Keypad';
  export default {
    data() {
      return {
        msg: 'Some shit typed in by David',
        refresh: true,
        val: '',
        errorMessage: 'Incorrect expression',
      }
    },
    methods: {
      dolog(e) {
        console.log(e);
      },
      addToken(btn) {
        switch (btn) {
          case '=' :
            this.computeAnswer();
            return;
          case 'C' :
            this.val = '';
            break;
          case '⌫' :
            this.val = this.val.slice(0, this.val.length - 1);
            break;
          default :
            this.val = this.refresh ? btn : `${this.val}${btn}`;
            if (this.refresh) this.refresh = false;
        }
        
      },
      computeAnswer() {
        try {
          this.val = this.val.replace('×', '*');
          this.val = this.val.replace('÷', '/');
          this.val = `${eval(this.val)}` || this.errorMessage;
        }
        catch(e) {
          console.dir(e);
          this.val = this.errorMessage;
        }
        finally {
          this.refresh = true;
        }
      }
    },

    components: { Display, Keypad }
  }
  
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }



  #calculator {
    max-width: 400px;
    font: cursive;
    text-align: center;
    margin: 100px auto;
    color: #32485F;
    border: 1px solid grey;
  }

  button {
    width: 100%;
    color: #32485F;
    /* border-radius: 2%; */
  }

  h2 {
    font-size: 30px;
  }
</style>