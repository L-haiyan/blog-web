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
        <div class="grid-content bg-purple content bg">
          <router-view/>
        </div>
      </el-col>

      <!-- 右侧aside -->
      <el-col :span="5">
        <div class="grid-content bg-purple aside">
          <div class="categeries bg">
              <span class="categeries-title"><i class="el-icon-s-flag"></i>文章分类</span>
              <el-row class="categeries-list" v-for="(categeroy,index) in categoryList" :key="index">
                <div class="categeries-item" :span="2" @click="goTo(categeroy.title)">
                  <a style="cursor: pointer;" >
                    <el-col :span="4" :offset="1">
                      <span class="categeries-num" >{{index+1}}</span>
                    </el-col>
                    <el-col class="categeries-text" :span="18">
                      <p class="categeries-tip">{{categeroy.title}}</p>
                      <p class="categeries-info">{{categeroy.info}}</p>
                    </el-col>
                  </a>
                </div>
              </el-row>
          </div>
          <!-- 右侧最新文章 -->
          <div class="sort bg essays5">
            <span class="essays5-title"><i class="el-icon-s-flag"></i>最新文章</span>
               <el-row class="essays5-list" v-for="(item,index) in  essays5" :key="index">
                <div class="essays5-item" :span="2">
                  <a href="#">
                    <el-col :span="3" :offset="2">
                      <span class="essays5-num" >{{index+1}}</span>
                    </el-col>
                    <el-col class="essays5-text" :span="18">
                      <p class="essays5-tip">{{item.title}}</p>
                    </el-col>
                  </a>
                </div>
              </el-row>
          </div>

          <!-- 右侧最热文章 -->
          <div class="sort bg hot5">
            <span class="essays5-title"><i class="el-icon-s-flag"></i>最热文章</span>
               <el-row class="essays5-list" v-for="(item,index) in  essays5" :key="index" >
                <div class="essays5-item" :span="2" @click="readMore(`/essay/detail?id=${item._id}`)">
                  <a href="#">
                    <el-col :span="4" :offset="2">
                      <span class="hot5-num" >TOP{{index+1}}</span>
                    </el-col>
                    <el-col class="essays5-text" :span="18">
                      <p class="essays5-tip">{{item.title}}</p>
                    </el-col>
                  </a>
                </div>
              </el-row>
          </div>

          <!-- 右侧热词标签统计 -->
          <div class="hot">
            <el-card>
             <div class="tag"><i class="el-icon-s-flag"></i>标签</div>
              <el-badge :value="12" class="item">
                <el-button size="small">node.js</el-button>
              </el-badge>
              <el-badge :value="12" class="item">
                <el-button size="small">vue.js</el-button>
              </el-badge>
              <el-badge :value="12" class="item">
                <el-button size="small">css</el-button>
              </el-badge>
              <el-badge :value="12" class="item">
                <el-button size="small">评论</el-button>
              </el-badge>
              <el-badge :value="12" class="item">
                <el-button size="small">面试题</el-button>
              </el-badge>
              <el-badge :value="12" class="item">
                <el-button size="small">mongodb</el-button>
              </el-badge>

            </el-card>
          </div>
        </div>
      </el-col>
      
    </el-row>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Banner from '../../components/Banner/Banner.vue'
import Footer from '../../components/Footer/Footer.vue'
import { mapState } from 'vuex'
import { getCategory,getEssay5 } from '../../api/index.js'
export default {
  components:{
    Header,
    Banner,
    Footer
  },
   data() {
    return {
      categoryList:[],
      essays5:[]
    }
  },
 async  mounted() {
    //获取文章分类
    this.getCategory()
    //获取文章最新
    this.getEssays5()
    //获取文章详情页面
    this.readMore()
  },
  computed:{
  },
  methods:{
   //1.获取分类
   async getCategory() {
     const result = await getCategory()
     if(result.code==200) {
       this.categoryList = result.data
       console.log(result.data)
     }
   },
   //2.获取最新五篇文章
   async getEssays5() {
     const result = await getEssay5()
     if(result.code==200) {
       this.essays5 = result.data
       console.log(result.data)
     }
   },
   //3.跳转到对应路由
   goTo(path) {
     if(path=='前端') {
       this.$router.push('/essay/web')
     }else if(path=='笔记') {
       this.$router.push('/essay/note')
     } else if (path=='资源分享') {
       this.$router.push('/essay/resource')
     }else if(path=='bug集合') {
        this.$router.push('/essay/bug')
     }else if(path=="日志") {
       this.$router.push('/essay/daily')
     }
   },
    //4.获取文章详情页面
    async readMore(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
 .bg {
    background-color: #fff;
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


// 右侧aside
.categeries,
.essays5,
.hot5 {
  height: 350px;
}
.hot {
  margin-top: 10px;
}

.categeries-item a,
.essays5-item a {
  display: block;
}
.categeries-title,
.essays5-title {
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
.categeries-list,
.essays5-list {
  margin-top: 10px;
  margin: 20px 0 20px 0;
  cursor: pointer;
}
.categeries-tip,
.essays5-tip {
  font-size: 14px;
  color: #000; 
}
.categeries-tip:hover {
  color:blue;
}
.essays5-tip:hover {
  color:blue;
}
.categeries-info,
.essays5-info {
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
  font-weight: 700;
  // margin-right: 10px; 
}
.categeries-num:hover + .categeries-tip {
  color:blue;
}
.essays5:hover + .essays5 {
  color:blue;
}
.categeries-info,
.essays5-info {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.essays5-num {
  font-weight: bold;
  font-style: italic;
  color: #8d7bf2;
}
.hot5-num {
  font-weight: bold;
  font-style: italic;
  color: #8d7bf2;
  font-size: 13px;
}
 //sort
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.tag {
border-bottom: 1px solid #ccc;
padding-bottom: 5px;
}
</style>


