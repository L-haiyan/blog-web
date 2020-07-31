<template>
  <div>
      <el-card>
        <div class="head">文章详情页面</div>
      </el-card>
      <el-row >
            <el-col :span="24">
              <el-card class="essay bg" >
                <div class="essay-head">
                  <!-- 文章名称 -->
                  <div class="essay-head-title">{{essayInfo.title}}</div>
                  <!-- 文章介绍 -->
                  <div class="essay-head-tips">
                    <span class="tips-author"><i class="el-icon-user-solid"></i>{{essayInfo.author}}</span>
                    <span class="tips-time"><i class="el-icon-date"></i>{{essayInfo.publishtime|date-format}}</span>
                    <span class="tips-category"><i class="el-icon-menu"></i>分类:{{essayInfo.category}}</span>
                  </div>
                </div>
                <!-- 文章内容 -->
                <div class="essay-content" >
                 {{essayInfo.text}}
                  
                </div>
              </el-card>
            </el-col>
          </el-row> 
  </div>
</template>

<script>
import {editEssay} from '../../../api/index.js'
export default {
  data() {
    return {
      essayInfo:{
        title:'',
        author:'',
        category:'',
        text:'',
        publishtime:0,
        id:''
      }
    }
  },
  async mounted() {
    this.getEssayInfo()
  },
  methods:{
    async getEssayInfo() {
        let id = this.$route.query.id
        const {result:result}= await editEssay(id)
        this.essayInfo = result
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  text-align: center;
  margin-top: 10px;
  font-weight: 700;
  font-size: 26px;
  color:#48456D;
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
