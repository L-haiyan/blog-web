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
        <el-col :span="6" >
          <el-button type="primary" style="float:right;" @click="go('/admin/addBlink')">添加友链</el-button>
        </el-col>        
       </el-card>
    </el-row>
    <!-- 友链列表 -->
      <el-card class="links">
        <div class=links-list>
          <ul>

          <li class="list-item" style="float:left;" v-for="(item,index) in linkList" :key="index">
            <div class="links-avater">
              <el-avatar :size="70" :src="item.address"></el-avatar>
            </div>
            <div class="links-content">
              <p class="nickname">{{item.nickname}}</p>
              <p class="sign">{{item.tip}}</p>
              <p class="entertime">{{item.jointime|date-format}}</p>
              <div class="do">
                  <el-button type="danger" size="mini" icon="el-icon-delete"  style="float:right;" @click="delLink(item._id)">删除</el-button>
                  <el-button type="primary" size="mini" icon="el-icon-edit" style="float:right;margin-right:6px;" @click="editLink(item._id)">编辑</el-button>
              </div>
            </div>
          </li>

          </ul>
        </div>
      </el-card>
    <!-- 编辑友链 -->
    <el-dialog :visible.sync="dialogFormVisible">
        <el-form  label-width="80px" >    
          <el-form-item label="昵称:">
              <el-input v-model="linkInfo.nickname"></el-input>
          </el-form-item>                                            
          <el-form-item label="头像:">
              <el-input  v-model="linkInfo.logo"></el-input>
          </el-form-item>
          <el-form-item label="网址:">
              <el-input v-model="linkInfo.address"></el-input>
          </el-form-item>
          <el-form-item label="签名:">
              <el-input  v-model="linkInfo.tip"></el-input>
          </el-form-item>    
          <el-form-item>
            
          </el-form-item>     
      </el-form> 
       <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="updateLink()">确 定</el-button>
            </div>
  </el-dialog>
 </div>
</template>

<script>
import {getLinks,delLinks,editlLinks,updateLinks} from '../../../api/index.js'
export default {
    data() {
        return {
            search: '',
            //友链列表
            linkList:[],
            //友链信息
             linkInfo:{
              nickname:'',
              address:'',
              logo:'',
              tip:'',           
          },
           //编辑框显示与隐藏
            dialogFormVisible:false
            ,
            //编辑的id
              uid:''
      }
    },
    mounted() {
      this.getLinkAll()
    },
     methods: {
      //1.获取友链
      async getLinkAll() {
        const result = await getLinks()
        if(result.code==200) {
          this.linkList = result.data
        }
      },
          //2.删除友链
     async delLink(id) {
       const confirmResult= await this.$confirm('此操作将永久删除该文友链吗, 是否继续?', '提示', {
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
        const result = await delLinks(id)
        if(result.code==200) {
           this.$message({
           message: "删除友链成功！",
           type: "success"
         })
          this.getLinkAll()  
        } else {
           this.$message({
           message: "删除时光失败！",
           type: "warning"
         })
        }
        }
    },
    //3.编辑友链
    async editLink(id) {
      this.dialogFormVisible = true
      const result = await editlLinks(id)
      if(result.code==200) {
        this.linkInfo = result.data
      }
      this.uid=id
    },
    //4.确定提交编辑后的友链（更新友链）
    async updateLink() {
      const id = this.uid
      console.log(id);
      console.log(this.linkInfo.nickname);
      const result = await updateLinks(id,this.linkInfo.nickname,
      this.linkInfo.logo,this.linkInfo.address,this.linkInfo.tip)
      if(result.code==200) {
        this.dialogFormVisible = false
        this.getLinkAll()
        this.uid=''
      }
      
    },
    //5.打开对话框
    open(id) {
      this.uid = id
    },
      go(path) {
        this.$router.push(path)
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

.list {
    margin-top: 10px;
    .el-table {
        padding: 0 20px 0 20px;
    }
}

.links {
  .links-list {
    padding: 25px;
    
    .list-item {
      border: 2px solid #557AFF;
      height: 220px;
      padding: 20px 0;
      margin-right: 35px;
      margin-top: 20px;
      .links-avater {
        margin-left: 50px; 
      }
      .links-content {
         .nickname {
          font-size: 20px;
          text-align: center;
          margin-top:5px;
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
        .do {
          padding-right: 10px;
          margin-top: 10px;
        }
        
    }
  }
}
}
</style>
