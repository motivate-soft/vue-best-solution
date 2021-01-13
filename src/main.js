import Vue from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue'

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

Vue.config.productionTip = false

Vue.use(CoreuiVue);

Vue.use({
  install: function(Vue){
      Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
      }
  });

new Vue({

  render: h => h(App),
  
}).$mount('#app')


// new Vue({
//   el: '#app',
//   // router,
//   // store,
//   // icons,
//   // template: '<App/>',
//   components: {
//     'testtemplate' : '<App/>'
//   }
// })
