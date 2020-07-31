<template>
  <div>
    <!-- header -->
    <Header></Header>

    <!-- banner -->
    <el-row>
      <el-col :span="20" :offset="2" class="banner">
        <div id="app">
          <vue-particles
            color="#fff"
            :particleOpacity="0.8"
            :particlesNumber="80"
            shapeType="star"
            :particleSize="5"
            linesColor="#be8abf"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.6"
            :linesDistance="150"
            :moveSpeed="4"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"

          >
          </vue-particles>
          <div class="pic">
 
          </div>
        </div>
      </el-col>
    </el-row>
   
   <!-- tips -->
    <el-row>
      <el-col :span="20" :offset="2" >
        <el-card class="tips">
          <div class="card-head">
            交换友链请将
            <span>昵称</span>
            <span>网站</span>
            <span>头像</span>
            <span>签名</span>
            通过
            <b>邮箱</b>|
            <b>留言</b>发给我>>本站友链如下：
          </div>
          <div class="card-body">
            <p>昵称：L-haiyan</p>
            <p>网站：https://www.kieden.site</p>
            <p>头像：https://www.valzt.cn/media/avatar.png</p>
            <p>签名：越努力，越幸运</p>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- links -->
    <el-row>
      <el-col :span="20" :offset="2">
        <el-card class="links">
          <p class="card-head">友情链接</p>
          <ul>
            <li class="links-item fl" v-for="(item,index) in linkList" :key="index">
              <div class="links-slot">
                <div class="links-avater">
                  <el-avatar :src="item.address"></el-avatar>
                </div>
                <div class="links-content">
                  <p class="nickname">{{item.nickname}}</p>
                  <p class="sign">{{item.tip}}</p>
                  <p class="entertime">{{item.jointime|date-format}}</p>
                   <a :href="item.logo" class="go">
                      <i class="iconfont el-icon-s-promotion"></i>
                      <span>访问</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Footer from '../../components/Footer/Footer.vue'
import {getLinks} from '../../api/index.js'
export default {
  data() {
    return {
      //友链列表
      linkList:[]
    }
  },
  components:{
    Header,
    Footer
  },
  async mounted() {
    this.getLink()
  },
  methods:{
    //1.路由跳转
    goTo(path) {
      this.$router.push(path)
    },
    //2.获取友链
    async getLink() {
      const result = await getLinks()
      if(result.code==200) {
        this.linkList = result.data
      }
    }
  }
}
</script>

<style lang="less" scoped>

// ---------------banner------------------
.banner {
  height: 250px;
  background: url(../../../static/images/link.jpg);
}

//---------------tips---------------------
.tips {
  margin-top: 10px;
  height: 210px;
  .card-head {
    span {
      background-color: rgb(39, 168, 136);
      color: aliceblue;
      border-radius: 10px;
      padding: 2px 10px;
      font-size: 14px;
    }
  }
  .card-body {
    margin-top: 15px;
    font-size: 15px;
    line-height: 2.5;
    padding-left: 10px;
  }
}

// --------------------links------------------
.links {
  margin-top: 10px;
  padding-left: 20px;
   .card-head {
    font-weight: 700;
    margin-bottom: 20px;
   }
  .links-item {
    padding: 10px 20px;
    width: 220px;
    .links-slot {
    border: 2px solid #bbe1fa;
    height: 220px;
    padding: 20px 0;
      .el-avatar {
        width: 80px;
        height: 80px;
        margin-left: 110px; 
        transform: translateX(-50%);
      }
      .links-content {
        a{
          display: block;
        }
        .nickname {
          font-size: 20px;
          text-align: center;
        }
        .sign {
          font-size: 12px;
          text-align: center;
          margin-top: 15px;
        }
        .entertime {
           font-size:12px;
           text-align: center;
           margin-top: 40px;    
        }
        .go {
          text-align: center;
          margin-top: 20px;
          width: 90px;
          height: 40px;
          margin-left: 110px;
          background-color: #01a9b4;
          border-radius: 5px;
          line-height: 40px;
          color: #fff;
          transform: translateX(-50%);
          span {
             font-size:14px;
             
          }
          &:hover {
            cursor: pointer;
             background-color: #7fdbda;
          }
        }
      }
    }
   }  
}

</style>
