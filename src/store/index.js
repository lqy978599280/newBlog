import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        firstLog: false,
        // nowBlog:{},
        hometitle:'纳兰心事',
        homeverse:'月似当时，人似当时否？'
    },
    mutations: {
        firstLog(state, firstLog) {
            state.firstLog = true
        },
        hometitle(state, hometitle) {
            state.hometitle = hometitle
        },
        homeverse(state, homeverse) {
            state.homeverse = homeverse
        },
    },
    actions: {

        firstLog({ commit, state }, firstLog) {
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("firstLog", firstLog);
        },
        hometitle({ commit, state }, hometitle) {
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("hometitle", hometitle);
        },
        homeverse({ commit, state }, homeverse) {
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("homeverse", homeverse);
        }
    },
    modules: {}
})