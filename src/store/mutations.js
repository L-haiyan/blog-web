import { ESSAY_DATA,CATEGEROY_DATA,TIMELINE_DATA,IS_LOGIN,GET_TOKEN } from './mutation-types'
import vue from 'vue'

export default {
    // 是否登录
    [IS_LOGIN](state,{userinfo}){
        state.userinfo = userinfo
    },
    // 获取token
    [GET_TOKEN](state, { token }) {
        // console.log(token)
        state.Authorization = token
    },
    //文章列表数据
    [ESSAY_DATA](state,{essays}) {
        state.essays = essays;
    },
    //文章分类数据
    [CATEGEROY_DATA](state,{categeroies}) {
        state.categeroies = categeroies;
    },
    // 时间轴数据
    [TIMELINE_DATA](state,{timelines}) {
        state.timelines = timelines;
    },
}