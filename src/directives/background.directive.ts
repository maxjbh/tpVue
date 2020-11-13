import Vue from 'vue';

const defaultBackgroundColor = 'lightBlue'
const defaultText = 'blue'
const newvalue = ''

export const Background = {
  bind(el: any, binding: any, vnode: any) {
    // el might not be present for server-side rendering.
    if (el ) {
      // Set the element's background color.
      el.style.backgroundColor = binding.expression || defaultBackgroundColor
      el.innerHTML =  'My background text is :  ' + binding.expression || defaultBackgroundColor
    }
  }, 
};
Vue.directive('background', Background);

/*
import Vue from 'vue';

Vue.directive('background', {
  bind() {

  },
  // When the bound element is inserted into the DOM...
  inserted(el) {
    // el.focus();
  },
  update() {

  },
  unbind() {

  }
})
*/