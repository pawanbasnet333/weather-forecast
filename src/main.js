import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

import { createStore } from 'vuex'
import state from './store/state'
import actions from './store/actions'
import mutations from './store/mutations'
import getters from './store/getters'

const store = createStore({
  state,
  actions,
  mutations,
  getters
})

const app = createApp(App)
app.use(store)
app.mount('#app')