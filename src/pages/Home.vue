<template>
  <div id="home">
      <!-- header -->
      <div class="header">
        <el-row :gutter="320">
          <el-col :span="10">
              
            <div class="grid-content bg-purple left"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-xiangrikuiSVG"></use> </svg>努力做更好的自己<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-xiangrikuiSVG"></use> </svg></div>
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
        <div class="banner-flow shadow">
          <div class="pic clearfix">
            <img src="../../static/images/me.jpg" alt="">
          </div>
          <div class="connect">
            <span class="title">个人名片</span>
            <div class="city">
              <span><i class="iconfont iconicon-test"></i>籍贯:</span>
              <span>重庆</span>
            </div>
            <div class="qq">
             <p><i class="iconfont iconshejiaotubiao-39"></i>QQ:<a href="http://wpa.qq.com/msgrd?v=3&uin=1094123797&site=qq&menu=yes" target="_blank" rel="noopener" title="点击QQ联系我 1094123797">1094123797</a></p>
            </div>
             <div class="email">
             <p><i class="iconfont iconyouxiang3"></i>邮箱:<a href="mailto:1094123797@qq.com" title="点击邮箱联系我 1094123797@qq.com">1094123797@qq.com</a></p>
            </div>
            <div class="github">
              <p><i class="iconfont icongithub"></i>GitHub:<a href="https://github.com/L-haiyan" target="_blank" rel="noopener" title="点击访问我的GitHub主页 L-haiyan">L-haiyan</a></p>
            </div>
            <div class="csdn">
              <p><i class="iconfont iconcsdn"></i>CSDN:<a target="_blank" href="https://blog.csdn.net/qq_40635345" title="点击访问我的CSDN主页 L-haiyan">L-haiyan</a></p>
            </div>
            <div class="iconlist top">
                <a target="_blank" title="点击QQ联系我 1094123797" onclick="window.open('tencent://message/?uin=1094123797&&Site=&Menu-=yes')" rel="external nofollow"><svg class="icon bd" aria-hidden="true"> <use xlink:href="#icon-QQ"></use> </svg></a>
                <a href="mailto:1094123797@qq.com" title="点击邮箱联系我 1094123797@qq.com"><svg class="icon bd" aria-hidden="true"> <use xlink:href="#icon-youjian"></use> </svg></a>
                <a href="https://github.com/L-haiyan" target="_blank" rel="noopener" title="点击访问我的GitHub主页 L-haiyan"><svg class="icon bd" aria-hidden="true"> <use xlink:href="#icon-github"></use> </svg></a>
                <a target="_blank" href="https://blog.csdn.net/qq_40635345" title="点击访问我的CSDN主页 L-haiyan"><svg class="icon bd" aria-hidden="true"> <use xlink:href="#icon-csdn"></use> </svg></a>
            </div>
          </div>
        </div>
      </div>

      <!-- welcome -->
      <el-row :gutter="80">
        <el-col :offset="8" :span="13">
          <el-card class="welcome">
            <div class="img">
              <el-card class="box-card star">
                <section :class="fixDo?'rs2 fixed':'rs2'" @click="lovemeFun">
                  <vue-particles
                    color="#97dffd"
                    :particleOpacity="0.9"
                    :particlesNumber="150"
                    shapeType="circle"
                    :particleSize="8"
                    linesColor="#97dffd"
                    :linesWidth="1"
                    :lineLinked="false"
                    :lineOpacity="0.3"
                    :linesDistance="10"
                    :moveSpeed="9"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="push"
                  ></vue-particles>
                  <p>点点点😊</p>
                  <div class>
                    <i :class="loveme?'heart active':'heart'"></i>
                    <span>{{likeNum}}</span>
                  </div>
                </section>
              </el-card>
            </div>
            <div class="text">
              <p>"欢迎您的到访！本站用于技术交流、资源分享，欢迎您将宝贵的意见写在留言板!"</p>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- essay概览区 -->
      <el-row >
        <el-col :span="18" :offset="3" class="essay">
          <!-- 分割线 -->
          <el-divider class="hr" content-position="left"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-xiangrikuiSVG"></use> </svg></el-divider>
          <!-- 文章 -->
          <el-row class="essay-list-one list-item" type="flex" justify="space-around">
            <el-col :span="11" class="left">
              <div @click="goTo('/essay/note')">
                <div class="img fl">
                 <el-image
                style="width: 100px; height: 100px"
                src="../static/images/home/essay1.png"
                ></el-image>
                </div>
                <div class="text fl">
                  <p class="text-title">前端</p>
                  <p class="text-content">关于前端的文章，例如HTML、CSS、JavaScript、Vue、Vuex微信小程序、Echarts等相关文章。</p>
                </div>
              </div>
            </el-col>
            <el-col :span="11" class="left">
              <div @click="goTo('/essay/web')">
                <div class="img fl">
                  <el-image
                style="width: 100px; height: 100px"
                src="../static/images/home/essay2.png"
                
                ></el-image>
                </div>
                <div class="text fl">
                  <p class="text-title">前端</p>
                  <p class="text-content">关于前端的文章，例如HTML、CSS、JavaScript、Vue、Vuex微信小程序、Echarts等相关文章。</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row class="essay-list-two list-item" type="flex" justify="space-around">
            <el-col :span="11" class="left">
              <div @click="goTo('/essay/resource')">
                <div class="img fl">
                  <el-image
                style="width: 100px; height: 100px"
                src="../static/images/home/essay3.png"
                ></el-image>
                </div>
                <div class="text fl">
                  <p class="text-title">前端</p>
                  <p class="text-content">关于前端的文章，例如HTML、CSS、JavaScript、Vue、Vuex微信小程序、Echarts等相关文章。</p>
                </div>
              </div>
            </el-col>
           <el-col :span="11" class="left">
              <div @click="goTo('/essay/daily')">
                <div class="img fl">
                 <el-image
                style="width: 100px; height: 100px"
                src="../static/images/home/essay4.png"
                ></el-image>
                </div>
                <div class="text fl">
                  <p class="text-title">前端</p>
                  <p class="text-content">关于前端的文章，例如HTML、CSS、JavaScript、Vue、Vuex微信小程序、Echarts等相关文章。</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- 跳转按钮 -->
          <a class="read" >阅读文章</a>
        </el-col>
      </el-row>
      
      <!-- 留言和友链区 -->
      <el-row>
        <el-col :span="18" :offset="3">
          <!-- 分割线 -->
          <el-divider class="hr" content-position="left"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-xiangrikuiSVG"></use> </svg></el-divider>
          <el-row type="flex" justify="space-around">
            <el-col :span="11" class="main-left">
              <div class="words-title"><svg class="icon bd" aria-hidden="true"> <use xlink:href="#icon-qiatongxingxiang"></use> </svg>最新留言</div>
              <div class="words-list">
                <el-card class="list-content">
                  <el-row class="list-item" v-for="(item,index) in words5List" :key="index">
                    <el-col :span="1">
                      <div class="left" style="display: flex;
                      width: 40px;
                      height: 40px;
                      border-radius: 50%;
                      font: 16px / 40px Helvetica, Arial, sans-serif;
                      align-items: center;
                      justify-content: center;
                      text-align: center;
                      background-color: #c5dcfa;
                      color: rgb(255, 144, 209);">
                        <span>h</span>
                      </div>
                    </el-col>
                    <el-col :span="22">
                      <div class="right">
                        <div class="right-top">
                          <span class="user">{{item.nickname}}</span>
                          <span class="time">{{item.time|date-format}}</span>
                        </div>
                        <div class="right-bottom" v-html="item.content"></div>
                      </div>
                    </el-col>
                  </el-row>
                </el-card>
                <!-- 跳转按钮 -->
                <a class="read" @click="goTo('/words')">留言>></a>
              </div>
            </el-col>
            <!-- 友链区 -->
            <el-col :span="11" class="main-right">              
              <div class="link-title"><svg class="icon bd" aria-hidden="true"> <use xlink:href="#icon-qiatongxingxiang"></use> </svg>最新友链</div>
              <div class="link-main">
                <ul class="clearfix allLi">
                  <li v-for="(item,index) in links6List" :key="index" class="fl">
                      <div class="img">
                          <el-avatar :size="45" :src="item.address"></el-avatar>
                      </div>
                      <div class="text">
                        <p class="name">{{item.nickname}}</p>
                        <p class="date">{{item.jointime|date-format}}</p>
                        <a :href="item.logo" class="go">
                          <i class="iconfont el-icon-s-promotion"></i>
                          <span>访问</span>
                        </a>
                      </div>
                  </li>
                </ul>

                <!-- 跳转按钮 -->
                <a class="read" @click="goTo('/link')">所有友链</a>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!-- 最近心情 -->
      <el-row>
        <el-col :span="18" :offset="3">
        <!-- 分割线 -->
          <el-divider class="hr" content-position="left"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-xiangrikuiSVG"></use> </svg></el-divider>
          <div class="think">
            弹幕的形式将日志显示
          </div>
        </el-col>
      </el-row>
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>

<script>
import {Typeit} from '../tools/print/print.js'
import {getStar,addStar,getWords5,getLinks6} from '../api/index.js'
import Footer from '../components/Footer/Footer.vue'

export default {
  //滚动
  data() {
    return {
      loveme: false,
      fixDo: false,
      likeNum: 0,
      initLikeNum: 0, 
      newData: [],
      words5List:[],
      links6List:[],
    }
  },
   components:{
    Footer
  },
   methods: {
      //1. 路由跳转
      goTo (path) {
        this.$router.push(path).catch(err=>err)
      },
      //2. 点心心
     async lovemeFun() {
      const that = this
      if (!this.loveme) {
        this.likeNum += 1
        const result = await addStar()
      }
      this.loveme = true
      var timer = setTimeout(function() {
        that.loveme = false
        clearTimeout(timer)
        }, 3000);
      },
      //3.实现留言空格和换行的效果
      preText(pretext) {
      return pretext
        .replace(/\r\n/g, "<br/>")
        .replace(/\n/g, "<br/>")
        .replace(/\s/g, "&nbsp;");
      }
      
    },
   async mounted() {
    // 获取星星
    const result = await getStar()
    this.likeNum = result.num;
    //获取5条留言
    const words5 = await getWords5()
    this.words5List = words5.data
    //获取6条友链
    const links6 = await getLinks6()
    this.links6List = links6
    //打印机
    var timer = setTimeout(function() {
      Typeit("#luke"); //打字机效果
      clearTimeout(timer);
    }, 1200);
     
  },

}
</script>

<style lang="less" scoped>
.shadow{
    width:180px; 
    background:white; 
    -webkit-box-shadow:4px 2px 6px #333333; 
    -moz-box-shadow:3px 2px 6px #333333;
}
.read {
        display: block;
        margin: auto;
        color: #fff;
        padding: 10px 15px;
        width: 100px;
        height: 40px;
        text-align: center;
        box-sizing: border-box;
        border-radius: 20px;
        background-color: #6A70EC;
        margin-top: 20px;
      }
.bg {
  background-color: rgba(241, 235, 232, 0.3);
  border-radius: 10px; 
  box-shadow: 2px 4px 10px gray;
}
  // header样式
  .header {
      width: 100%;
      height: 60px;
      background-color: rgba(254,219,207,0.1);
      height: 60px;
      line-height: 60px;
      font-size: 15px;
      color: #333;
      position:fixed;
      z-index: 1;
      .left {
         float: left;
         margin-left: 90px;
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
      width: 260px;
      height: 300px;
      // border: 1px solid #ccc;
      position:absolute;
      top:350px;
      left:180px;
      background-color: #fff;
      .pic {
        width: 70px;
        height: 70px;
        border-radius:35px;
        margin-left: 95px;
        border: 2px solid #fff;
        transform: translateY(-50%);
        img {
          width: 100%;
          height: 100%;
          border-radius:35px;
        }
      }
      .connect {
        font-size: 15px;
        color:#666;
        transform: translateY(-20%);
        div {
          height:30px;
          margin-left: 30px; 
        }
        .title {
          font-size: 16px;
          font-weight: 700;
          display: inline-block;
          padding: 15px;
          margin-left:130px;
          margin-top: 10px;
          transform: translateX(-50%);
        }
          
      }
    }
  }
  .qq a,
  .email a,
  .github a,
  .csdn a,{
    text-decoration:underline;
    color: #0681d0;
  }
  .iconlist a {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 20px; 
    margin-right: 5px;
    margin-top: 8px;
  }
  .icon { 
    width: 1em; height: 1em; 
    vertical-align: -0.15em; 
    fill: currentColor; 
    overflow: hidden; 
    font-size: 25px;
    }


    // welcome样式
    // 点心心-------------------------------------------
.rs2 {
  /*padding:10px 0 4px 0;*/
  min-height: 100px;
  position: relative;
}
.rs2.fixed {
  position: fixed;
  top: 40px;
  width: 22%;
}
.rs2 p {
  color: #df2050;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
}
.rs2 div {
  color: #df2050;
  cursor: pointer;
  text-align: center;
  font-size: 40px;
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 100px;
  right: 0;
  top: 30px;
}
.rs2 div i.heart {
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 100px;
  margin-left: -20px;
  margin-top: -5px;
  background: url(../../static/images/home/heart.png) no-repeat;
  background-position: 0 0;
  cursor: pointer;
  -webkit-transition: background-position 1s steps(28);
  transition: background-position 1s steps(28);
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
  vertical-align: middle;
}
.rs2 div i.heart:hover {
  transform: scale(1.15);
  -webkit-transform: scale(1.15);
}
.rs2 div i.heart.active {
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  background-position: -2800px 0;
}
.rs2 div span {
  margin-left: -30px;
}
/* ----------------------------------------------------- */
    .welcome {
      height: 180px;
      background-color: #fff;
      margin-top: 20px;
      .img {
        width: 200px;
        height: 140px;
        border-radius: 20px; 
        float: left;
        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
      }
       .text {
         font-size: 22px;
         padding-top: 30px; 
         padding-left: 230px;
         line-height: 40px;
         text-indent: 1em;
       }
    }

    // essay概览区样式
// essay外部框架搭建
    .essay {
      // border: 1px solid #000;
      .hr {
      margin-top: 40px;
      }
      .el-col {
        height: 200px;
        // border: 1px solid #000;
      }
      .essay-list-two {
        margin-top: 20px;
      }
      
// essay区域的盒子里内容样式
      .left {
        display: block;   
        background: #fff;
        .img {
          width: 100px;
          height: 100px;
          margin-top: 100px;
          transform: translateY(-50%);
          margin-left: 20px;
          .icon[data-v-5a90ec03] {
            font-size: 100px;
          }  
        }
       .text {
          width: 320px;
          height: 80px;
          margin-top: 100px;
          transform: translateY(-50%);
          margin-left: 20px;
          .text-title {
            color: #557AFF;
            font-weight: 700;
          }
          .text-content {
            margin-top: 10px;
            line-height: 26px;
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
// -----------------------------
    


// 一、留言和友链概览区
// 1.留言和友链概览区
.main-left,
.main-right {
  // border: 1px solid #000;
  height :500px;
  padding: 20px;
}
//2. 留言概览区
.main-left {
  background-color: #fff;
  a:hover {
    cursor: pointer;
  }
}
.words-title,
.link-title{
  font-size: 16px;
  color:#557AFF;
  font-weight: 700;
  text-align: center;
  height: 45px;
}
// 3.留言列表
.words-list {
      border-top: 1px solid #dedede;
      i {
        color: skyblue;
      }
      span {
        color: #000;
      }
       .right-top {
         margin-top: 5px;
         margin-left: 40px;
        }
       .right-bottom {
          border-bottom: 1px solid #ececec;
          margin-left: 35px;
          font-size: 14px;
          color: #999;
       }
      .user {
          color: #1abc9c;
          margin-right: 10px;
          font-size: 16px;
        }
       .time {
          font-size: 12px;
          float: right; 
        }
        .read {
          margin-top: 5px;
          font-size: 14px;
          width: 80px;
        }
      }
//4.友链
.main-right {
   background-color: #fff;
   padding: 0 60px;
   li {
     border: 1px solid #ccc;
     height: 125px;
     margin-top: 5px;
     width: 160px;
     .img {
       width: 45px;
       height: 45px;
       margin-left: 80px;
       transform: translateX(-50%);
     }
       .name {
          font-size: 16px;
          text-align: center;
        }
        .sign {
          font-size: 12px;
          text-align: center;
          margin-top: 15px;
        }
        .date {
           font-size:12px;
           text-align: center;
           margin-top: 10px;            
        }
        .go {
          display: block;
          margin-top: 10px;
          width: 60px;
          height: 20px;
          // display: block;
          background-color: #557AFF;
          border-radius: 5px;
          line-height: 20px;
          color: #fff;
          margin-left: 80px;
          transform: translateX(-50%);
          span {
             font-size:14px;
             
          }
        }
     }
     a:hover {
       cursor: pointer;
     }
}

.allLi li:nth-child(even) {
  margin-left: 15px;
}
.read {
  margin-top: 8px;
}

//最近心情区域
.think {
  // border: 1px solid black;
  height: 250px;
  padding: 20px;
  background-color: #fff;
  
}
.list-item:hover{
  cursor: pointer;
}
</style>
