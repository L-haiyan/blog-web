import {
    ESSAY_DATA,
    CATEGEROY_DATA,
    TIMELINE_DATA,
    IS_LOGIN,
    GET_TOKEN
} from './mutation-types'

import {
    reqEssaysData,
    reqCategeroiesData,
    reqTimelinesData,
    reqIsLogin,

} from '../api'

export default {
    //是否登录
    async isLogin({ commit }) {
        const result = await reqIsLogin()
        if(result.code == 200) {
            const userinfo = result
            commit(IS_LOGIN, { userinfo })
        }
    },
    //获取token
    getTokens({ commit }, token) {
        commit(GET_TOKEN, { token })
        localStorage.setItem('Authorization', token)
    },
    // 异步获取文章列表
    async getEssaysData({commit}) {
        const result = await reqEssaysData()
            if(result.code == 200) {
            const essays = result.data 
            commit(ESSAY_DATA,{essays})
            }

    },
    // 异步获取文章分类数据
    async getCategeroiesData({commit}) {
        const result = await reqCategeroiesData()
        if(result.code == 200) {
            const categeroies = result.data
            commit(CATEGEROY_DATA,{categeroies})
        }
    },
    // 异步获取时间轴数据
    async getTimelinesData({commit}) {
        const result = await reqTimelinesData()
        if(result.code == 200) {
            const timelines = result.data
            commit(TIMELINE_DATA,{timelines})
        }
    }
}