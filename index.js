// document.write('Bitch, Imma own you!');

import Vue from 'vue/dist/vue.min.js';
import App from './App';

window.addEventListener('load', () => {
  new Vue({
      el: '#app',
      template: `<App/>`,
      components: { App }
    });
});