<template>
  <div>
       <!-- 标题 -->
          <el-row class="container-title">
            <el-col :span="24" class="bg">
              <div class="container-title-top">全部文章</div>
              <span class="container-title-total"><i class="el-icon-document"></i>文章:10篇</span>
              <span class="container-title-ratings"><i class="el-icon-edit-outline"></i>评论:6条</span>
              <span class="container-title-readings"><i class="el-icon-view"></i>阅读:12次</span>
              <span class="container-title-categories"><i class="el-icon-menu"></i>分类:6种</span>
            </el-col>
          </el-row>
          <!-- 文章列表 -->
          <el-row >
            <el-col :span="24">
              <el-card class="essay bg" v-for="(essay,index) in essays" :key="index">
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
                <div class="essay-content" v-highlight  v-html="essay.text">

                  <div class="essay-content-btn" @click="readMore(`/essay/detail?id=${essay._id}`)">阅读全文<i class="el-icon-d-arrow-right"></i></div>
                </div>
              </el-card>
            </el-col>
          </el-row>        
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import { reqEssaysData } from '../../../api/index.js'
// import { addCodeBtn } from '../../../tools/mavon/mavon.js'
import hljs from 'highlight.js'

// import "mavon-editor/dist/css/index.css";
export default {
  data() {
    return {
       queryinfo:{
         query:'',
         pagesize:5,
         pagenum: 1
       },
       total:0
    }
  },
  mounted(){ 
    this.$store.dispatch('getEssaysData'),
    this.readMore()
  //    hljs.highlightCode(),
  //    this.$nextTick(_ => {
  // addCodeBtn()
  
  //   }),
  //    hljs.highlightCode = function () { 
  //       //自定义highlightCode方法，将只执行一次的逻辑去掉
  //       let blocks = document.querySelectorAll('pre code');
  //       [].forEach.call(blocks, hljs.highlightBlock);
    // }
  },
  computed:{
    ...mapState(['essays']),
  },
  methods: {
    //获取文章详情页面
    async readMore(path) {
      this.$router.push(path)
    },
    
    
  },

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

pre.code {
    position: relative;
    border-radius: 3px;
    border: 1px solid #C3CCD0;
    overflow: hidden;
    padding-left: 60px!important;
    code {
        line-height: 30px!important;
    }
    ol.pre-numbering {
        position: absolute;
        top: 0;
        left: 5px;
        line-height: 30px;
        padding: 16px 0;
        list-style-type:none;
        counter-reset:sectioncounter;
        margin-bottom: 0;
        li{
            margin-top: 0!important;
            &:before{
                content:counter(sectioncounter) "";
                counter-increment:sectioncounter;
                display: inline-block;
                width: 40px;
                text-align: center;
                border-right: solid 1px rgba(0, 0, 0, 0.53);
            }
        }
    }
    i.code-copy{
        position: absolute;
        top:0;
        right: 0;
        background-color: #464d5e;
        padding: 3px;
        margin: 3px 3px 0 0;
        font-size: 11px;
        border-radius: inherit;
        color: #f1f1f1;
        cursor: pointer;
        display: none;
    }
    &:hover i.code-copy{
        display: block;
    }
}

.essay-content img {
  max-width: 20px!important;
}
</style>
