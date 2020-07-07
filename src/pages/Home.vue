<template>
  <div id="home">
      <!-- header -->
      <div class="header">
        <el-row :gutter="320">
          <el-col :span="10">
            <div class="grid-content bg-purple left">越努力，越幸运</div>
          </el-col>
         
          <el-col :span="14">
            <div class="grid-content bg-purple right">
              <ul>
                <li class="right-item" @click="goTo('/home')"><i class="el-icon-house"></i>首页</li>
                <li class="right-item" @click="goTo('/time')"><i class="el-icon-camera"></i>时光机</li>
                <li class="right-item" @click="goTo('/essay')"><i class="el-icon-document"></i>文章</li>
                <li class="right-item" @click="goTo('/words')"><i class="el-icon-edit-outline">留言</i></li>
                <li class="right-item" @click="goTo('/link')"><i class="el-icon-connection"></i>友链</li>
                <li class="right-item" @click="goTo('/aboutme')"><i class="el-icon-user"></i>关于</li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- banner -->
      <div class="banner clearfix">
        <div class="scene">
          <i id="luke"></i>
        </div>
        <div class="banner-top"></div>
        <div class="banner-flow">
          <div class="pic clearfix">
            <img src="../../static/images/me.jpg" alt="">
          </div>
          <div class="connect">
            <div class="city">
              <span><i class="iconfont iconicon-test"></i>籍贯:</span>
              <span>重庆</span>
            </div>
            <div class="qq">
              <span><i class="iconfont iconqq1"></i>QQ:</span>
              <span>1094123797</span>
              <button></button>
            </div>
            <div class="wx">
              <span><i class="iconfont icongithub"></i>github:</span>
              <span>13370700226</span>
              <button></button>
            </div>
            <div class="email">
              <span><i class="iconfont iconyouxiang1"></i>邮箱:</span>
              <span>1094123797@qq.com</span>
              <button></button>
            </div>
            <div class="tip">
              <span><i class="iconfont iconxiepinglun"></i>座右铭:</span>
              <span>越努力，越幸运。</span>
              <button></button>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import {Typeit} from '../tools/print/print.js'
export default {
   methods: {
      goTo (path) {
        this.$router.push(path)
      }
    },
   mounted() {
    var timer = setTimeout(function() {
      Typeit("#luke"); //打字机效果
      clearTimeout(timer);
    }, 1200);
  },

}
</script>

<style lang="less" scoped>
  // header样式
  .header {
      width: 100%;
      height: 60px;
      background-color: #9fdbe3;
      background-color: rgba(254,219,207,0.1);
      height: 60px;
      line-height: 60px;
      font-size: 15px;
      color: #333;
      position:fixed;
      z-index: 1;
      .left {
         float: left;
       }
      .right {
         float:left;
         ul li {
           float: left;
           margin-right: 35px;
           &:hover {
             cursor: pointer;
             color: #fff;
           }
         } 
       }
    } 
  //banner样式

  .banner {
    // overflow:hidden;
    width: auto;
    height: 450px;
    background: url(../../static/images/banner.png) no-repeat;
    background-size:100% 100%; 
    position: relative;
   .scene {
    font-size: 40px!important;
    height: 40px;
    margin-top: 200px;
 
    i {
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    color: transparent;
    margin-left: 100px;
    letter-spacing:15px;
  }
    }
    .banner-top {
      width: auto;
      height: 450px;
      z-index:1;
      background-color: rgba(254,219,207,0.2);
    }
    .banner-flow {
      width: 240px;
      height: 220px;
      border: 1px solid #ccc;
      position:absolute;
      top:330px;
      left:210px;
      background-color: #f4f6ff;
      background-color: rgba(241, 235, 232, 0.3);
      border-radius: 10px; 
      box-shadow: 2px 4px 10px gray;
      .pic {
        width: 70px;
        height: 70px;
        border-radius:35px;
        margin-left: 80px;
        border: 2px solid #fff;
        transform: translateY(-50%);
        img {
          width: 100%;
          height: 100%;
          border-radius:35px;
        }
      }
      .connect {
        font-size: 14px;
        color:#666;
        transform: translateY(-20%);
        div {
          height: 27px;
          margin-left: 10px;
        }
      }
    }
  }
</style>
