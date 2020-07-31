<template>
  <div>
       <!-- 标题 -->
          <el-row class="container-title">
            <el-col :span="24" class="bg">
              <div class="container-title-top">{{newTitle}}文章</div>
              <span class="container-title-total"><i class="el-icon-document"></i>文章:10篇</span>
              <span class="container-title-ratings"><i class="el-icon-edit-outline"></i>评论:6条</span>
              <span class="container-title-readings"><i class="el-icon-view"></i>阅读:12次</span>
              <span class="container-title-categories"><i class="el-icon-menu"></i>分类:6种</span>
            </el-col>
          </el-row>
          <!-- 文章列表 -->
          <el-row >
            <el-col :span="24">
              <el-card class="essay bg" v-for="(essay,index) in newEssay" :key="index">
                <div class="essay-head">
                  <!-- 文章名称 -->
                  <div class="essay-head-title">{{essay.title}}</div>
                  <!-- 文章介绍 -->
                  <div class="essay-head-tips">
                    <span class="tips-author"><i class="el-icon-user-solid"></i>{{essay.author}}</span>
                    <span class="tips-time"><i class="el-icon-date"></i>{{essay.publishtime|date-format}}</span>
                    <span class="tips-category"><i class="el-icon-menu"></i>分类:{{essay.category}}</span>
                  </div>
                </div>
                <!-- 文章内容 -->
                <div class="essay-content">
                 {{essay.text}}
                  <div class="essay-content-btn" @click="readMore(`/essay/detail?id=${essay._id}`)">阅读全文<i class="el-icon-d-arrow-right"></i></div>
                </div>
              </el-card>
            </el-col>
          </el-row>  
  </div>
</template>

<script>
import {reqEssaysData, editEssay} from '../../../api/index.js'
export default {
  data() {
    return{
      newArr:[],
    }
  },
  async mounted(){
    this.getEssay()
  },
  methods:{
    //获取文章列表数据
    async getEssay() {
      const result = await reqEssaysData()
      if(result.code==200) {
        this.newArr = result.data
      }
    },
    //获取文章详情页面
    async readMore(path) {
      this.$router.push(path)
    }
  },
  computed:{
    //新分类显示文章
    newEssay:function () {
      const path = this.$route.path
      switch(path){
        //前端页面
        case '/essay/web':
          return this.newArr.filter(function(item) {
            return item.category=='前端'
          })
        break;
        //笔记页面
        case '/essay/note':
           return this.newArr.filter(function(item) {
            return item.category=='笔记'
          })
        break;
        //资源分享页面
        case '/essay/resource':
           return this.newArr.filter(function(item) {
            return item.category=='资源分享'
          })
        break;
        //bug集合页面
        case '/essay/bug':
           return this.newArr.filter(function(item) {
            return item.category=='bug集合'
          })
        break;
        //日志页面
        case '/essay/daily':
           return this.newArr.filter(function(item) {
            return item.category=='日志'
          })
        break;
      }
      
    },
    //分类标题
    newTitle:function() {
      const path = this.$route.path
      switch(path){
        //前端页面
        case '/essay/web':
         return '前端'
        break;
        //笔记页面
        case '/essay/note':
         return '笔记'
        break;
        //资源分享页面
        case '/essay/resource':
           return '资源分享'
        break;
        //bug集合页面
        case '/essay/bug':
           return 'bug集合'
        break;
        //日志页面
        case '/essay/daily':
          return '日志'
        break;
      }
    }
    //
  }
}
</script>

<style lang="less" scoped>
.time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  //content
  .container-title {
    width: 100%;
    height: 80px;
  }
  .container-title span {
      font-size: 14px;
    }
  .container-title-ratings,
  .container-title-readings,
  .container-title-categories {
    margin-left: 15px;
  }
  .container-title-top {
    font-size: 24px;
    font-weight: 700;
    color: #444;
    line-height: 80px;
    text-align: center;
    }
  .container-title-total {
    margin-left: 230px; 
  }
  .essay {
    margin-top: 20px;
  }
  .essay-head .essay-head-title{
    font-size: 20px;
    font-weight: 700;
    color: #444;
    text-align: center;
  }
  .essay-head-tips {
    text-align: center;
    margin-top: 15px;
    margin-bottom:15px; 
    span {
      margin-left: 10px; 
    }
  }
  .essay-content {
    font-size: 14px;
    color: #444;
    line-height: 1.9!important;
  }
  .essay-content-btn {
    width: 80px;
    height: 25px;
    background-color: #97E09C;
    border-radius: 20px;
    font-size: 11px;
    color: #fff;
    text-align: center;
    margin-left: 340px;
    cursor: pointer;
    transition: all .3s ease-in;
  }
  .essay-content-btn:hover {
     background: #48456D;
      
  }


</style>
