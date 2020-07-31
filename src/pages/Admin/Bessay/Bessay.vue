<template>
 <div>
    <!-- 面包屑 -->
    <el-row class="nav">
       <el-card>
            <el-col :span="13" class="left">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="left">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="6" class="right" >
            <el-input
            size="medium"
            placeholder="输入关键字搜索"/>
        </el-col>        
        <el-button type="primary">搜索文章</el-button>
        <el-button type="primary" @click="goAddEssay('/admin/addEssay')">添加文章</el-button>
       </el-card>
    </el-row>
    <!-- 文章列表 -->
    <div class="list">
        <router-view></router-view>
        <el-table :data="essays" style="width: 100%" stripe >
            <el-table-column type="index"></el-table-column>
            <el-table-column :formatter="dateFormat" label="发布时间" prop="publishtime"></el-table-column>
            <el-table-column label="标题" prop="title"></el-table-column>
            <el-table-column label="作者" prop="author"></el-table-column>
            <el-table-column label="分类" prop="category"></el-table-column>
            <el-table-column label="操作" prop="操作"> 
            <template slot-scope="scope">
                <el-button type="primary" size="mini" icon="el-icon-edit" @click="goEditEssay(`/admin/editEssay?id=${scope.row._id}`)">编辑</el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete"  @click="delEssays(scope.row._id)">删除</el-button>     
            </template>
            </el-table-column>
        </el-table>
    </div>
 </div>
</template>

<script>
import {mapState} from 'vuex'
import {reqEssaysData,delEssay} from '../../../api/index.js'

import moment from 'moment'
export default {
    data() {
        return {
          // 文章列表
          essays:[]
      }
    },
    async mounted(){
      this.getEssays()
    },    
    computed:{
     
    },
     methods: {
      //获取文章列表
      async getEssays() {
        const result = await reqEssaysData()
        if(result.code==200) {
          this.essays = result.data
        }
      },
      //添加文章
      goAddEssay(path) {
        this.$router.push(path)
      },
      //跳转到编辑文章页面
      goEditEssay(path) {
          this.$router.push(path)
      },
      // 删除文章
     async delEssays(id) {
       const confirmResult= await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        console.log(confirmResult);
        if(confirmResult !== 'confirm') {
          this.$message({
          message: "已取消删除！",
          type: "warning"
         })
        } else {
        const result = await delEssay(id)
        console.log(id);
        if(result.code==200) {
           this.$message({
           message: "删除文章成功！",
           type: "success"
         })
          this.getEssays()  
        } else {
           this.$message({
           message: "删除文章失败！",
           type: "warning"
         })
        }
        }
      },
      dateFormat:function(row, column) {
        var date = row[column.property];
          if (date == undefined) {
             return "";
          }
          return moment(date).format("YYYY-MM-DD");
          },
    },
}
</script>

<style lang="less" rel="scoped">
//nav样式
.nav {
    text-align: center;
    .el-input {
        padding-top: 2px;
    }
    .left {
        margin-top: 3px;
    }
    .right {
        margin-top: 0px;
    }
}

.list {
    margin-top: 10px;
    .el-table {
        padding: 0 20px 0 20px;
    }
}
</style>
