<template>
  <div>
    <!-- header -->
    <Header></Header>
    <!-- banner -->
    <Banner></Banner>
    <!-- container -->
    <el-row :gutter="10" class="container">
      <!-- 左侧content -->
      <el-col :span="15" :offset="2" >
        <div class="grid-content bg-purple content">
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
          <el-row>
            <el-col :span="24">
              <el-card class="essay bg">
                <div class="essay-head">
                  <!-- 文章名称 -->
                  <div class="essay-head-title">浅时光</div>
                  <!-- 文章介绍 -->
                  <div class="essay-head-tips">
                    <span class="tips-author"><i class="el-icon-user-solid"></i>haiyan</span>
                    <span class="tips-time"><i class="el-icon-date"></i>2020-07-03</span>
                    <span class="tips-category"><i class="el-icon-menu"></i>分类:日志</span>
                  </div>
                </div>
                <!-- 文章内容 -->
                <div class="essay-content">
                  我们几乎每天都会使用百度或者google去互联网获取各种知识或资源，不知道细心的你有没有发现有时候从百度或者google跳转到我们真正要看的网页时会奇慢，为什么会这样呢？我们打开开发者工具看一眼.我们几乎每天都会使用百度或者google去互联网获取各种知识或资源，不知道细心的你有没有发现有时候从百度或者google跳转到我们真正要看的网页时会奇慢，为什么会这样呢？我们打开开发者工具看一眼...
                  <div class="essay-content-btn">阅读全文<i class="el-icon-d-arrow-right"></i></div>
                </div>
              </el-card>
            </el-col>
          </el-row>  
          <el-row>
            <el-col :span="24">
              <el-card class="essay bg">
                <div class="essay-head">
                  <!-- 文章名称 -->
                  <div class="essay-head-title">浅时光</div>
                  <!-- 文章介绍 -->
                  <div class="essay-head-tips">
                    <span class="tips-author"><i class="el-icon-user-solid"></i>haiyan</span>
                    <span class="tips-time"><i class="el-icon-date"></i>2020-07-03</span>
                    <span class="tips-category"><i class="el-icon-menu"></i>分类:日志</span>
                  </div>
                </div>
                <!-- 文章内容 -->
                <div class="essay-content">
                  我们几乎每天都会使用百度或者google去互联网获取各种知识或资源，不知道细心的你有没有发现有时候从百度或者google跳转到我们真正要看的网页时会奇慢，为什么会这样呢？我们打开开发者工具看一眼.我们几乎每天都会使用百度或者google去互联网获取各种知识或资源，不知道细心的你有没有发现有时候从百度或者google跳转到我们真正要看的网页时会奇慢，为什么会这样呢？我们打开开发者工具看一眼...
                  <div class="essay-content-btn">阅读全文<i class="el-icon-d-arrow-right"></i></div>
                </div>
              </el-card>
            </el-col>
          </el-row>   
          <el-row>
            <el-col :span="24">
              <el-card class="essay bg">
                <div class="essay-head">
                  <!-- 文章名称 -->
                  <div class="essay-head-title">浅时光</div>
                  <!-- 文章介绍 -->
                  <div class="essay-head-tips">
                    <span class="tips-author"><i class="el-icon-user-solid"></i>haiyan</span>
                    <span class="tips-time"><i class="el-icon-date"></i>2020-07-03</span>
                    <span class="tips-category"><i class="el-icon-menu"></i>分类:日志</span>
                  </div>
                </div>
                <!-- 文章内容 -->
                <div class="essay-content">
                  我们几乎每天都会使用百度或者google去互联网获取各种知识或资源，不知道细心的你有没有发现有时候从百度或者google跳转到我们真正要看的网页时会奇慢，为什么会这样呢？我们打开开发者工具看一眼.我们几乎每天都会使用百度或者google去互联网获取各种知识或资源，不知道细心的你有没有发现有时候从百度或者google跳转到我们真正要看的网页时会奇慢，为什么会这样呢？我们打开开发者工具看一眼...
                  <div class="essay-content-btn">阅读全文<i class="el-icon-d-arrow-right"></i></div>
                </div>
              </el-card>
            </el-col>
          </el-row>          
          <!-- 分页模块 -->
          <el-pagination
          background
          layout="prev, pager, next"
          :total="10">
        </el-pagination>
        </div>
      </el-col>

      <!-- 右侧aside -->
      <el-col :span="5">
        <div class="grid-content bg-purple aside">
          <div class="categeries bg">
              <span class="categeries-title"><i class="el-icon-s-flag"></i>文章分类</span>
              <el-row class="categeries-list">
                <div class="categeries-item" :span="2">
                  <a href="#">
                    <el-col :span="4" :offset="1">
                      <span class="categeries-num" >1</span>
                    </el-col>
                    <el-col class="categeries-text" :span="18">
                      <p class="categeries-tip">js知识</p>
                      <p class="categeries-info">前端编程的文章，比如Html、CSS、canvas、JavaScript、JQuery、Vue、微信小程序等。</p>
                    </el-col>
                  </a>
                </div>
              </el-row>
              <el-row class="categeries-list">
                <div class="categeries-item" :span="2">
                  <a href="#">
                    <el-col :span="4" :offset="1">
                      <span class="categeries-num" >2</span>
                    </el-col>
                    <el-col class="categeries-text" :span="18">
                      <p class="categeries-tip">Vue知识</p>
                      <p class="categeries-info">前端编程的文章，比如Html、CSS、canvas、JavaScript、JQuery、Vue、微信小程序等。</p>
                    </el-col>
                  </a>
                </div>
              </el-row>
              <el-row class="categeries-list">
                <div class="categeries-item" :span="2">
                  <a href="#">
                    <el-col :span="4" :offset="1">
                      <span class="categeries-num" >3</span>
                    </el-col>
                    <el-col class="categeries-text" :span="18">
                      <p class="categeries-tip">node.js知识</p>
                      <p class="categeries-info">前端编程的文章，比如Html、CSS、canvas、JavaScript、JQuery、Vue、微信小程序等。</p>
                    </el-col>
                  </a>
                </div>
              </el-row>
              <el-row class="categeries-list">
                <div class="categeries-item" :span="2">
                  <a href="#">
                    <el-col :span="4" :offset="1">
                      <span class="categeries-num" >4</span>
                    </el-col>
                    <el-col class="categeries-text" :span="18">
                      <p class="categeries-tip">日志</p>
                      <p class="categeries-info">前端编程的文章，比如Html、CSS、canvas、JavaScript、JQuery、Vue、微信小程序等。</p>
                    </el-col>
                  </a>
                </div>
              </el-row>
              <el-row class="categeries-list">
                <div class="categeries-item" :span="2">
                  <a href="#">
                    <el-col :span="4" :offset="1">
                      <span class="categeries-num" >5</span>
                    </el-col>
                    <el-col class="categeries-text" :span="18">
                      <p class="categeries-tip">笔记</p>
                      <p class="categeries-info">前端编程的文章，比如Html、CSS、canvas、JavaScript、JQuery、Vue、微信小程序等。</p>
                    </el-col>
                  </a>
                </div>
              </el-row>
              <el-row class="categeries-list">
                <div class="categeries-item" :span="2">
                  <a href="#">
                    <el-col :span="4" :offset="1">
                      <span class="categeries-num" >6</span>
                    </el-col>
                    <el-col class="categeries-text" :span="18">
                      <p class="categeries-tip">经典题</p>
                      <p class="categeries-info">前端编程的文章，比如Html、CSS、canvas、JavaScript、JQuery、Vue、微信小程序等。</p>
                    </el-col>
                  </a>
                </div>
              </el-row>
          </div>
          <!-- 右侧最新文章 -->
          <div class="sort bg">
            <span class="categeries-title"><i class="el-icon-s-flag"></i>最新文章</span>
               <el-row class="categeries-list">
                <div class="categeries-item" :span="2">
                  <a href="#">
                    <el-col :span="4" :offset="1">
                      <span class="categeries-num" >6</span>
                    </el-col>
                    <el-col class="categeries-text" :span="18">
                      <p class="categeries-tip">经典题</p>
                      <p class="categeries-info">前端编程的文章，比如Html、CSS、canvas、JavaScript、JQuery、Vue、微信小程序等。</p>
                    </el-col>
                  </a>
                </div>
              </el-row>
              
          </div>
          <!-- 右侧标签云 -->
          <div class="tips bg">
            <TagsCloud></TagsCloud>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Banner from '../../components/Banner/Banner.vue'
import TagsCloud from '../../components/TagsCloud/TagsCloud.vue'
export default {
  components:{
    Header,
    Banner,
    TagsCloud
  },
   data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style lang="less" scoped>
 .bg {
    background-color: rgba(255,255,255,.3);
    box-shadow: 1px 2px 6px rgba(63,74,105,.16);
    border-radius: 6px;
  }
// container
  //layout布局
  .container{
    height: 1500px;
    transform: translateY(-18%);
  }
  .content,
  .aside {
    // border: 1px solid #000;
    height: 1000px;
  }
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

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
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
    margin-left: 140px; 
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
    margin-left: 270px;
    cursor: pointer;
    transition: all .3s ease-in;
  }
  .essay-content-btn:hover {
     background: #48456D;
      
  }

  // 分页模块
  .el-pagination {
    margin-left: 270px;
    margin-top: 20px;
  }

// 右侧aside
  //categeries
.categeries {
  // background: #fff;
  height: 400px;
}
.categeries-item a {
  display: block;
}
.categeries-title {
  display: block;
  font-size: 16px;
  color: #000;
  // width: 100%;
  width: 235px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  margin-left: 15px;
}
.el-icon-s-flag {
  color: orange;
}
.categeries-list {
  margin-top: 10px;
  margin: 20px 0 20px 0;
  cursor: pointer;
}
.categeries-tip {
  font-size: 14px;
  color: #000; 
}
.categeries-tip:hover {
  color:blue;
}
.categeries-info {
  font-size: 12px;
  color: #656565;
}
.categeries-num {
  display: block;
  width: 35px;
  height: 35px;
  background-color: #EFEFFD;
  text-align: center;
  line-height: 35px; 
  border-radius:23px;
  color: #8d7bf2;
  // margin-right: 10px; 
}
.categeries-num:hover + .categeries-tip {
  color:blue;
}
.categeries-info {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

 //sort

</style>


