import Vue from 'vue'
import App from './App'

import store from './store/index'
import http from './utils/http'
import api from './api/index'
Vue.prototype.$http = http
Vue.prototype.$api = api
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
