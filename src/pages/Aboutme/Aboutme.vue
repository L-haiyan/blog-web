个人说明<template>
  <div>
    <!-- header -->
    <Header></Header>
    <!-- banner -->
    <Banner></Banner>
    <!-- container -->
    <el-row>
      <el-col :span="20" :offset="2" class="aboutme">
        <el-row class="aboutme-title">
          <span>About Me</span>
        </el-row>
       
        <el-row class="aboutme-img">
          <el-col :span="6" :offset="9">
            <div class="img-me">
              <img src="../../../static/images/aboutme.jpg" alt="">
            </div>
          </el-col>
        </el-row>
        
        <el-row class="aboutme-info top">
          <el-col :span="22" :offset="1">
            <el-card shadow="always">
              <span><i class="iconfont iconshou"></i>个人说明</span>
              <div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp计算机科学与技术专业，本科大三在读的一名学生。最初接触前端是在大一下学期的时候，因为学院的实验室招生，也让我第一次认识前端。
                在大一的暑假我踏上了前端的学习之路，一路跌跌撞撞走到现在。从一开始我就是奔着前端就业的目的加入了实验室，在实验室中有学长学姐和同级的同学一
                起学习前端，作为前端小白的确有很多的知识需要自己去摸索。在和实验室的小伙伴一起做了一个老师外接的项目“银行审计”，从那时候开始才明白团队的力
                量。一个项目是需要前端和后端组一起协作完成的，让我对前端的了解又更加的深入了，对于前端我也更加的喜欢。在以后的前端学习中，我将更加努力，优秀的人太多，不奢望变成最好的那一个，但是会努力变成每天都在进步的那一个！欢迎朋友到访，一起探讨，一起学习！
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row class="aboutme-blog top">
          <el-col :span="22" :offset="1">
            <el-card shadow="always">
              <span><i class="iconfont iconProcesssettings"></i>关于博客</span>
              <div>
                <em>&nbsp&nbsp特别说明</em>
                <p>本站用于记录学习中的技术点总结，本站文章仅代表个人观点，和任何组织或个人无关。</p>
                <p>本站用户邮箱仅用作回复消息，不对外使用。</p>
                <p>本站对当下主流浏览器均兼容。</p>
                <p>本站建于2020年7月</p>
                <em>&nbsp&nbsp技术说明</em>
                <p>前端技术:HTML、CSS 、JavaScript、JQuery、Vue、Element-Ui以及相关小插件，没有使用模板</p>
                <p>后端技术:Node.js、Express、MongoDB、Mongoose</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row class="aboutme-link top">
          <el-col :span="22" :offset="1">
            <el-card shadow="always">
              <span><i class="iconfont iconaite"></i>与我联系</span>
              <div>
                <em>&nbsp&nbsp您可以通过线上QQ或者以下方式与我取得联系，非常期待和您成为朋友</em>
                <p><i class="iconfont iconshejiaotubiao-39"></i>QQ:<a href="http://wpa.qq.com/msgrd?v=3&uin=1094123797&site=qq&menu=yes" target="_blank" rel="noopener" title="点击QQ联系我 1094123797">1094123797</a></p>
                <p><i class="iconfont iconyouxiang3"></i>邮箱:<a href="mailto:1094123797@qq.com" title="点击邮箱联系我 1094123797@qq.com">1094123797@qq.com</a></p>
                <p><i class="iconfont icongithub"></i>GitHub:<a href="https://github.com/L-haiyan" target="_blank" rel="noopener" title="点击访问我的GitHub主页 L-haiyan">L-haiyan</a></p>
                <p><i class="iconfont iconcsdn"></i>CSDN:<a target="_blank" href="https://blog.csdn.net/qq_40635345" title="点击访问我的CSDN主页 L-haiyan">L-haiyan</a></p>
              </div>
              <div>
                <em>&nbsp&nbsp您可以直接点击以下图标跳转:</em><br/>
                <div class="iconlist top">
                  <a target="_blank" title="点击QQ联系我 1094123797" onclick="window.open('tencent://message/?uin=1094123797&&Site=&Menu-=yes')" rel="external nofollow"><svg class="icon bd" aria-hidden="true"> <use xlink:href="#icon-QQ"></use> </svg></a>
                  <a href="mailto:1094123797@qq.com" title="点击邮箱联系我 1094123797@qq.com"><svg class="icon bd" aria-hidden="true"> <use xlink:href="#icon-youjian"></use> </svg></a>
                  <a href="https://github.com/L-haiyan" target="_blank" rel="noopener" title="点击访问我的GitHub主页 L-haiyan"><svg class="icon bd" aria-hidden="true"> <use xlink:href="#icon-github"></use> </svg></a>
                  <a target="_blank" href="https://blog.csdn.net/qq_40635345" title="点击访问我的CSDN主页 L-haiyan"><svg class="icon bd" aria-hidden="true"> <use xlink:href="#icon-csdn"></use> </svg></a>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row class="footer-img">
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-xiangrikuiSVG"></use> </svg>
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-S_round-copy"></use> </svg>
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-U_round-copy"></use> </svg>
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-N_round-copy"></use> </svg>
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-F_round-copy"></use> </svg>
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-L_round-copy"></use> </svg>
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-O_round-copy"></use> </svg>
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-W_round-copy"></use> </svg>
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-E_round-copy"></use> </svg>
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-R_round-copy"></use> </svg>
          <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-xiangrikuiSVG"></use> </svg>
        </el-row>
         <el-row class="aboutme-print">
          <!-- 打字机 -->
          <div class="scene">
              <i id="luke">一路向阳，春暖花开</i>
          </div>
        </el-row>
      </el-col>
    </el-row>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Banner from '../../components/Banner/Banner.vue'
import Footer from '../../components/Footer/Footer.vue'
export default {
  components:{
    Header,
    Banner,
    Footer
  },
    methods:{
   
  }
 
}
</script>

<style lang="less" scoped>
.top {
  margin-top: 20px; 
}
.bd {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.icon { 
    width: 1em; height: 1em; 
    vertical-align: -0.15em; 
    fill: currentColor; 
    overflow: hidden; 
    font-size: 35px;
    } 
  .aboutme {
    height: 1400px;
    transform: translateY(-23%);
    background-color: #fff;
    box-shadow: 1px 2px 6px rgba(63,74,105,.16);
    border-radius: 6px;
    span {
      font-size: 16px;
      font-weight: 700;
    }
    div {
      font-size: 14px;
      line-height: 30px;
      em {
        font-weight: 700;
        font-size: 14px;
      }
      p {
        text-indent: 2em;
      }
    }
    .iconfont {
      color: #4f98ca;
    }
    .aboutme-title{
      display: block;
      font-weight: 700;
      margin-bottom: 20px;
      color: #403e3e;
      text-align: center;
      height: 120px;
      line-height: 120px;
      span {
        border-bottom: 2px dashed skyblue;
        padding: 10px;
        font-size: 34px!important;
      }
    } 
    .img-me {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      margin-left: 50px;
      img {
        width: 200px;
        height: 200px;
        border-radius: 100px;
      }
    }
    
  }
  .aboutme-link a{
      text-decoration:underline;
      color: #0681d0;
    }
  .iconlist a {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 25px; 
  }
  .footer-img {
    text-align: center;
    margin-top: 40px;
  }
.scene {
  font-size: 26px!important;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.scene i {
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
