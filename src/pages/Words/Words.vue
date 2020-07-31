<template>
  <div>
    <!-- header -->
    <Header></Header>
    <!-- audio -->
    <!-- <el-row class="audio">
      <el-card></el-card>
    </el-row> -->
    
    <!-- write -->
  <!-- 音乐播放器 -->
<el-row>
  <el-col :span="18" :offset="3">
    此处有一个
  </el-col>
</el-row>


  <el-row>
    <el-col class="write" :span="18" :offset="3">
      <el-row class="write-tips">
        <P><i class="icnfont el-icon-info"></i>留言说明:</P>
        <p>请留下有效的邮箱信息哦，不然收不到消息提示哦~</p>
      </el-row>
      <!-- form -->
      <el-row class="write-form">
        <el-row class="item-info" :gutter="10">
          <el-col :span="2" class="tip">       
            <i class="iconfont iconwo"></i>
            <span>昵称:</span>
          </el-col>
          <el-col :span="10">
            <el-input class="userName" placeholder="请输入您的昵称" v-model="friendInfo.nickname" maxlength="10"  clearable></el-input>
          </el-col>
          <el-col :span="2" class="tip"> 
            <i class="el-icon-message"></i>
            <span>邮箱:</span>
          </el-col>
          <el-col :span="10">
            <el-input class="webAddress" placeholder="请输入您的邮箱" v-model="friendInfo.email" ></el-input>
          </el-col>
        </el-row>
        <el-row class="item-text">
          <el-input
            type="textarea"
            placeholder="留下你的脚印吧~"
            show-word-limit
            size="medium"
            :rows="5"
            resize="none"
            v-model="friendInfo.content"
          >
          </el-input>
        </el-row>
        <el-row class="item-emoji">
          <i class="iconfont iconbiaoqing"></i>
        </el-row>
        <el-row class="item-btn">
          <el-button type="info"  plain size="medium" class="reset" @click="reset()">重置</el-button>
          <el-button type="info"  plain size="medium" class="submit" @click="sendWords()">提交</el-button>
        </el-row>
      </el-row>
      <!-- list -->
      <el-row class="write-list">      
        <span><i class="iconfont iconjiaoyin"></i>共{{wordCount}}条留言</span>
        <el-card class="list-content">
          <el-row class="list-item" :gutter="50" v-for="(item,index) in wordList" :key="index">
            <el-col :span="1">
              <div class="left" style="display: flex;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              font: 16px / 40px Helvetica, Arial, sans-serif;
              align-items: center;
              justify-content: center;
              text-align: center;
              color: rgb(255, 144, 209);" :style="{backgroundColor:getColor}">
                <span>{{item.nickname?item.nickname:'游客'|cutName}}</span>
              </div>
            </el-col>
            <el-col :span="22">
              <div class="right">
                <div class="right-top">
                  <span class="user">{{item.nickname?item.nickname:'游客'}}</span>
                  <span class="time">{{item.time|date-format}}</span>
                </div>
                <div class="right-bottom" v-html="item.content"></div>
              </div>
            </el-col>
          </el-row>
           
        </el-card>
      </el-row>
      <!-- pagination -->
      <div class="getMore">
        <span>点击加载更多</span>
        <VueEmoji ref="emoji" @input="onInput" :value="myText" />
      </div>
    </el-col>
  
  </el-row>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Footer from '../../components/Footer/Footer.vue'
import VueEmoji from 'emoji-vue'
import {reqWords,upWords} from '../../api/index.js'
export default {
  data() {
      return {
        //输入框的相关数据
        friendInfo:{
          nickname:"",
          email:"",
          content:""
        },
        //留言列表
        wordList:[],
        //留言总数
        wordCount:0,
        //分页数据
        pagenum:1,
        pagesize:10

      }
    },
  components:{
    Header,
     VueEmoji,
     Footer
  },
  async mounted() {
    this.getWords()
  },
  computed:{
    // 让语句具有空格和换行的效果
    NewContent() {
      return this.preText(this.friendInfo.content)
    },
    getColor() {
       //颜色种类
       var colorList=[
          "#c7e2b2",
          "#f6def6",
          "#abf0e9",
          "#f8e1f4",
          "#fde2e2",
          "#d4ebd0",
          "#ffdbc5",
          "#ebecf1",
          "#def4f0",
          "#d4ebd0"
        ]
      var colorIndex = Math.floor(Math.random()*colorList.length)
      var color = colorList[colorIndex]
      colorList.splice(colorIndex,1)
      return color
    }
  },
  filters:{
    //过滤文字
    cutName:function(val) {
      var one =  val.slice(0,1)
      return one
    }
  },
  methods:{
    onInput(event) {
          //event.data contains the value of the textarea
      },
      clearTextarea(){
        this.$refs.emoji.clear()
      },  
    //1.获取留言列表以及留言总数
    async getWords() {
      const result = await reqWords()
      this.wordList = result.data
      this.wordCount = this.wordList.length
      console.log(this.getColor);
    },
    //2.发送留言
    async sendWords() {
      if(this.friendInfo.content.trim().length > 0) {
        this.friendInfo.content = this.NewContent
        console.log(this.friendInfo.content);
        const result = await upWords(
          this.friendInfo.nickname,
          this.friendInfo.email,
          this.friendInfo.content
        )
      if(result.code==200) {
          this.friendInfo.nickname=""
          this.friendInfo.content=""
          this.friendInfo.email=""
          this.$message({
          message:"留言成功^_^！",
          type:"success"
        }) 
        //更新留言
        this.getWords()
      }
    } else {
      this.$message({
        message: "留言失败(⊙︿⊙)！",
        type: "warning"
        })
      }
    
    },
  // 3.实现表单重置功能
  reset() {
    this.friendInfo.nickname=""
    this.friendInfo.content=""
    this.friendInfo.email=""
    },
  //4.实现留言空格和换行的效果
   preText(pretext) {
      return pretext
        .replace(/\r\n/g, "<br/>")
        .replace(/\n/g, "<br/>")
        .replace(/\s/g, "&nbsp;");
    },
  //5.监听点击分页切换页码
  async handleCurrentChange(newPage) {
    console.log(newPage)
    this.pagenum = newPage
    this.getWords()
    }
  }
}

</script>

<style lang="less" scoped>
  // wirte
  .write {
    background-color: #fff;
    margin-top: 200px;
    padding: 0px 30px;
    .write-tips {
      width: 100%;
      height: 100px;
      margin: 0 0 20px;
      line-height: 2;
      font-size: 16px;
      p{
        i {
          color: red;
        }
        &:nth-child(2) {
          padding-bottom: 20px; 
          border-bottom: 1px solid #ccc;
        }
        &:nth-child(1) {
          margin-top: 20px;
        }
      }
    }

    // 填写留言
    .write-form {
      position: relative;
      border: 1px solid #dedede;
      height: 300px;
      padding: 0px 10px 10px;
      .item-info {
        border-bottom: 1px dashed #dedede;
      .tip {
        color: #909399;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
      }
      }
      
      .item-btn {
        position: absolute;
        bottom: 20px;
        right: 10px;
      }
      .item-text {
        margin-top: 10px;
      }
      .item-emoji {
        position: absolute;
        bottom:70px;
        right: 36px;
        i {
          font-size: 26px;
          color: #909399;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    //留言列表
    .write-list {
      border-top: 1px solid #dedede;
      margin-top: 40px;
      padding-top: 10px;
      i {
        color: skyblue;
      }
      span {
        color: #000;
      }
      .list-content{
        margin-top: 15px;
        .list-item {
          padding-bottom: 60px;
          padding: 20px;
        }
        .right-bottom {
          border-bottom: 1px solid #ececec;
          padding: 25px 0; 
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
      }
    }
    // 分页
    .pagination {
      text-align: center;
      margin-top: 10px;
    }
  }
</style>
<style>
  .el-input__inner {
      border: 1px solid #fff;
      height: 50px;
  }
  .el-textarea__inner {
    border: 1px solid #fff;
  }
  

</style>

