import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        firstLog: false
    },
    mutations: {
        firstLog(state, firstLog) {
            state.firstLog = true
        },
    },
    actions: {

        firstLog({ commit, state }, firstLog) {
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("firstLog", firstLog);
        }
    },
    modules: {}
})