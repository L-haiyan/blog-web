<template>
 <div>
    <!-- 面包屑 -->
    <el-row class="nav">
       <el-card>
          <el-col :span="18" class="left">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="left">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="6" class="right" >
          <el-button type="primary" style="float:right;">添加留言</el-button>
        </el-col>        
       </el-card>
    </el-row>
    <!-- 留言列表 -->
    <el-row :gutter="10">
      <el-col :span="12" class="list">
        <div>
            <el-table
                :data="wordList"
                style="width: 100%">
                <el-table-column type="index"></el-table-column>
              <el-table-column
                label="用户"
               prop="nickname">
                <template slot-scope="scope">
                  <span v-if="scope.row.nickname==''">游客</span>
                  <span v-else>{{scope.row.nickname}}</span>
                </template>
                </el-table-column> 
                 
                <el-table-column
                label="发布时间"
                :formatter="dateFormat"
                prop="time">
                </el-table-column>
              <el-table-column
                label="操作"
                prop="操作"> 
                <template slot-scope="scope">
                  <el-button type="primary" size="mini" icon="el-icon-edit" @click="isReading(scope.row._id)">查看</el-button>
      
                </template>
                </el-table-column>
            </el-table>
        </div>
      </el-col>
      <el-col :span="12" class="read">
        <el-card v-show="isRead">
           <el-row class="list-item" :gutter="50">
            <el-col :span="2">
              <div class="left" style="display: flex;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              font: 16px / 40px Helvetica, Arial, sans-serif;
              align-items: center;
              justify-content: center;
              text-align: center;
              background-color: rgb(255, 64, 129);
              color: rgb(255, 144, 209);">
                <span>h</span>
              </div>
            </el-col>
            <el-col :span="21">
              <div class="right" >
                <div class="right-top">
                  <span class="user">{{wordInfo.nickname?wordInfo.nickname:'游客'}}</span>
                  <span class="time">{{wordInfo.time|date-format}}</span>
                </div>
                <div class="right-bottom" v-html="wordInfo.content"></div>
                <el-button type="danger" size="mini" icon="el-icon-delete"  style="float:right;" @click="delwords()">删除</el-button>
                <!-- <el-button type="primary" size="mini" icon="el-icon-edit" style="float:right;margin-right:5px;">回复</el-button>
                 -->
                 <el-popover
                  placement="right"
                  width="400"
                  trigger="click"
                  transition="fade-in-linear">
                  <div class="replay">
                    <i class="el-icon-circle-close"></i>
                    <el-input type="textarea" :rows="3" v-model="replayWord"></el-input>
                    <div class="do">
                       <el-button  size="mini" type="primary" plain  style="float:right;" @click="sendReplay()">提交</el-button>
                        <el-button  size="mini"  type="primary" plain  style="float:right;margin-right:5px;" @click="reset">重置</el-button>
                    </div>
                  </div>
                  <el-button type="primary" size="mini" icon="el-icon-edit" slot="reference" style="float:right;margin-right:5px;">回复</el-button>
                </el-popover>

              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
 </div>
</template>

<script>
import { reqWords,upWords,getWords1,replayWords,delWord} from "../../../api/index.js"

import moment from 'moment'
export default {
    data() {
        return {
            
            search: '',
            isRead:false,
            //留言列表
            wordList:[],
            //留言回复
            replay:'',
            //留言详情
            wordInfo:{
              nickname:'',
              time:0,
              content:'',
              replay:'',
              id:''
            },
            //回复留言输入框内容
            replayWord:''
      }
    },
    async mounted() {
      this.getWords()
    },
    computed:{
       // 让语句具有空格和换行的效果
   
    },
     methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
       //1.获取留言列表以及留言总数
      async getWords() {
        const result = await reqWords()
        this.wordList = result.data
      },
      //2.时间格式化
       //时间格式化
      dateFormat:function(row, column) {
        var date = row[column.property];
          if (date == undefined) {
             return "";
          }
          return moment(date).format("YYYY-MM-DD");
          },
      // 3.查看留言详情
      async isReading(id) {
        this.isRead = !this.isRead
        //获取留言详情
        const result = await getWords1(id)
        if(result.code == 200) {
          this.wordInfo = result.data
          this.wordInfo.id = result.data._id
          this.wordInfo.content=this.preText(result.data.content)
        }  
      },
    //4.提交留言回复
    async sendReplay() {
      if(this.replayWord.trim().length > 0) {    
        console.log(this.replayWord)
        const result = await replayWords(
          this.wordInfo.id,
          this.replayWord
        )
        console.log(result);
        console.log(this.wordInfo.id);
      if(result.code==200) {
        this.replayWord=""
          this.$message({
          message:"回复成功^_^！",
          type:"success"
        }) 
      }
    } else {
      this.$message({
        message: "回复失败(⊙︿⊙)！",
        type: "warning"
        })
      } 
    },
    //5.实现留言空格和换行的效果
   preText(pretext) {
      return pretext
        .replace(/\r\n/g, "<br/>")
        .replace(/\n/g, "<br/>")
        .replace(/\s/g, "&nbsp;");
    },
    //6.点击重置清空
    reset() {
      this.replayWord=''
    },
    //5.删除留言
     async delwords() {
       const confirmResult= await this.$confirm('此操作将永久删除留言, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        if(confirmResult !== 'confirm') {
          this.$message({
          message: "已取消删除！",
          type: "warning"
         })
        } else {
        const id = this.wordInfo.id
        const result = await delWord(id)
        this.wordInfo.id=''
        this.isRead = !this.isRead
        if(result.code==200) {
           this.$message({
           message: "删除留言成功！",
           type: "success"
         })

          this.getWords()  
        } else {
           this.$message({
           message: "删除时光失败！",
           type: "warning"
         })
        }
        }
      }
    },
  
}
</script>

<style lang="less" rel="scoped">
//nav样式
.nav {
    text-align: center;
    .el-card {
      padding-bottom: 20px;
    }
    .el-input {
        padding-top: 2px;
    }
    .left {
        margin-top: 3px;
    }
}

// list样式
.list {
    margin-top: 10px;
    .el-table {
        padding: 0 20px 0 20px;
    }
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
        .right-bottom {
          border-bottom: 1px solid #ececec;
          font-size:14px;
        }
        
    }
}
.user {
  color: #1abc9c;
  margin-right: 10px;
  font-size: 16px;
  }
.time {
  font-size: 12px!important;
  float: right; 
}

// read样式
.read {
  margin-top: 10px;
}
</style>
