import ajax from './ajax'
const BASE_URL = 'http://127.0.0.1:3007'

// 登录----------------------------------
//发起登录
export const reqLogin = (username,password)=> ajax(BASE_URL+'/login',{username,password},'POST')
// 判断登录状态
export const reqIsLogin = () => ajax(BASE_URL + '/userinfo')
// -------------------------------------


// 文章----------------------------------
// 获取文章列表
export const reqEssaysData = ()=>ajax(BASE_URL+'/getessay')
//删除文章
export const delEssay = (id)=>ajax(BASE_URL+'/delessay',{id},'POST')
//获取文章分类
export const reqCategeroiesData = ()=>ajax('/categeroy')
//根据id获取文章并编辑
export const editEssay = (id)=>ajax(BASE_URL+'/editessay',{id})
//获取5篇文章
export const getEssay5 = ()=>ajax(BASE_URL+'/getessay5')
//添加文章
export const addEssay = (title,author,category,text)=>ajax(BASE_URL+'/writeEssay',{title,author,category,text},'POST')
// -------------------------------------


// 时间轴-------------------------------
//获取时间轴数据
export const reqTimelinesData = ()=>ajax(BASE_URL+'/gettime')
//创建时间轴
export const addTimelines = (author,content)=>ajax(BASE_URL+'/addtime',{author,content},'POST')
//删除时间轴
export const delTime = (id)=>ajax(BASE_URL+'/deltime',{id},'POST')
//编辑时光
export const editTime = (id,content)=>ajax(BASE_URL+'/edittime',{id,content},'POST')
// -------------------------------------


// 留言----------------------------------
//获取全部留言
export const reqWords = () => ajax(BASE_URL+'/getWords')
//发送用户留言框的输入信息
export const upWords = (nickname,email,content,) => ajax(BASE_URL+'/upWords',{nickname,email,content},'POST')
//根据id查看留言详情
export const getWords1 = (id)=>ajax(BASE_URL+'/getWords1',{id})
//根据id获取留言并回复消息
export const replayWords = (id,replay)=>ajax(BASE_URL+'/replayWords',{id,replay},'POST')
//获取5条留言
export const getWords5 = () => ajax(BASE_URL+'/getWords5')
//刪除留言
export const delWord = (id) => ajax(BASE_URL+'/delWords',{id},'POST')

//友链----------------------------------
//获取友链
export const getLinks = () => ajax(BASE_URL+'/getlink')
//添加友链
export const addLinks = (nickname,address,logo,tip) => ajax(BASE_URL+'/addlink',{nickname,address,logo,tip},'POST')
//删除友链
export const delLinks = (id) => ajax(BASE_URL+'/dellink',{id})
//编辑友链
export const editlLinks = (id) => ajax(BASE_URL+'/editlink',{id})
//更新友链
export const updateLinks = (id,nickname,logo,address,tip) => ajax(BASE_URL+'/updatelink',{id,nickname,logo,address,tip},'POST')
//获取6条友链
export const getLinks6 = () => ajax(BASE_URL+'/getlink6')
//--------------------------------------------

//心心-----------------------------------
//获取心心
export const getStar= () => ajax(BASE_URL+'/getstar')
//加心心
export const addStar= () => ajax(BASE_URL+'/addstar')

//分类
//1.获取分类
export const getCategory= () => ajax(BASE_URL+'/getCategory')