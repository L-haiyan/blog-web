export default {
    //登录信息
    userinfo:{

    },
    // 身份认证
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    // 文章列表信息
    essays:[],
    //文章分类信息
    categeroies:[],
    // 时间轴列表信息
    timelines:[]
}