import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        SET_COUNT: (state, count) => {
            state.count = count;
        }
    }
})

export default store