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
          <el-button type="primary" style="float:right;" @click="dialogFormVisible1 = true">添加时光</el-button>
          <el-dialog :visible.sync="dialogFormVisible1" >
            <div class="add-time">
               <el-row>
                  <div class="title">
                    <span>添加时光</span>
                  </div>
                </el-row>
                <el-form label-width="55px" :rules="addrules" ref="addForm" :model="addForm">
                  <el-form-item  label="昵称" prop="author">
                    <el-input v-model="addForm.author"></el-input>
                  </el-form-item>
                  <el-form-item label="时光" prop="content">
                    <el-input v-model="addForm.content" row="9" type="textarea"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button @click="reset()">重置</el-button>
                    <el-button type="primary" @click="submitForm('addForm')" >提交</el-button>
                  </el-form-item>
                </el-form>
            </div>
          </el-dialog>
        </el-col>        
       </el-card>
    </el-row>
    <!-- 留言列表 -->
    <div class="list">
      <el-card>
         <el-timeline>

          <el-timeline-item  :timestamp = "item.time|date-format" type="primary" v-for="(item,index) in timelines"  :key="index"  placement="top">
            <el-card style="padding-bottom:10px;">
              <h4>{{item.content}}</h4>
              <p>{{item.author}} 提交于 {{item.time|date-format}}</p>
              <!-- 删除 -->
              <el-button type="danger" size="mini" @click="delTimes(item._id)" icon="el-icon-delete"  style="float:right;">删除</el-button>
              <!-- 编辑 -->
              <el-button type="primary" size="mini" icon="el-icon-edit"  @click="dialogFormVisible = true;"  style="float:right;margin-right:6px;">编辑</el-button>
              
              <el-dialog :visible.sync="dialogFormVisible">
                <div class="edit-time">
                    <el-row>
                      <div class="title">
                        <span>编辑时光</span>
                      </div>
                    </el-row>
                    <el-row>
                      <el-input
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="textarea">
                    </el-input>
                    </el-row>
                </div>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>

            </el-card>
            <div> 
            </div>
          </el-timeline-item>
   
         </el-timeline>
      </el-card>
    </div>
 </div>
</template>

<script>
import { addTimelines,reqTimelinesData,delTime,editTime} from '../../../api/index.js'

export default {
    data() {
        return {           
            search: '',
            textarea: '',
            dialogFormVisible: false,            dialogFormVisible1: false,
            formLabelWidth: '120px',
             form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        //添加时光的表单验证
        addForm: {
          author:'',
          content:''
        },
         addrules: {
          author: [
            { required: true, message: '请输入您的昵称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          content:[
            { required: true, message: '请输入您的时光', trigger: 'blur' },
            { min: 3, max: 500, message: '长度在 3 到 500 个字符', trigger: 'blur' }
          ]
         },
        // 时光轴数据
        timelines:[]
      }
    },
   async  mounted() {
      this.getTime()
    },
     methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //1.创建时间轴
      async submitForm() {
        if(this.dialogFormVisible1==false) {
          this.$refs.addForm.clearValidate()
        }
        this.$refs.addForm.validate(async valid => {
          if (valid) {
            
           //发送请求
          const result = await addTimelines(
            this.addForm.author,
            this.addForm.content
          )
          if(result.code==200) {
            this.$message({
              message:"添加时光成功！",
              type:"success"
            })
            //刷新时光列表
            this.getTime()
            //清空时光表单内容
            this.reset()
            //去除校验规则
            
          } else {
            //  添加失败
            this.$message({
              message: "添加时光失败",
              type: "warning"
            })
          }
          } else {
            console.log('error submit!!');
            return false;
          }
        })
        this.dialogFormVisible1 = false
      },
      //2.获取时光轴数据
      async getTime() {
        const result = await reqTimelinesData()
        if(result.code==200) {
          this.timelines = result.data
        }
      },
      //3.清空表单
      reset() {
        this.addForm.author = ''
        this.addForm.content = ''
        this.clearValidate()
      },
      //4.清除验证
      clearValid() {
        this.$nextTick(()=>{
    this.$refs.addForm.resetFields(); 
        })
      },
      //5.删除时光
     async delTimes(id) {
       const confirmResult= await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
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
        const result = await delTime(id)
        if(result.code==200) {
           this.$message({
           message: "删除时光成功！",
           type: "success"
         })
          this.getTime()  
        } else {
           this.$message({
           message: "删除时光失败！",
           type: "warning"
         })
        }
        }
      }
    },
    //6.编辑时光
   hy(id) {
      console.log(id);
    }
     
     
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
//添加时光
.add-time {
   
    
    .title {
      padding-bottom:30px;
      text-align: center;
      font-weight: 700;
      font-size: 20px;
    }
}

//编辑时光
.edit-time {
  .title {
    text-align: center;
    font-weight: 700;
    padding-bottom:10px;
  }
  .btn{
    padding-top: 10px;
    .el-button {
    margin-left:175px;
  }
  }
  
}

</style>
