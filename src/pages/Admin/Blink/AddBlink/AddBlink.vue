<template>
  <div>
      <el-row class="form">
          <el-col :span="18" class="form-container" :offset="3">
            <el-card>
                <el-row >
                    <div class="title">
                        <span>添加友链</span>
                    </div>
                </el-row>
                    <!-- 表单区域 -->
                <el-row>
                    <el-form  label-width="80px" >    
                       <el-form-item label="昵称:">
                            <el-input placeholder="请输入友链昵称" v-model="linkInfo.nickname"></el-input>
                        </el-form-item>                                            
                        <el-form-item label="头像:">
                           <el-input placeholder="请输入头像网址" v-model="linkInfo.logo"></el-input>
                        </el-form-item>
                        <el-form-item label="网址:">
                            <el-input placeholder="请输入友链网址" v-model="linkInfo.address"></el-input>
                        </el-form-item>
                        <el-form-item label="签名:">
                            <el-input placeholder="请输入友链签名" v-model="linkInfo.tip"></el-input>
                        </el-form-item>
                       
                    </el-form>
                </el-row>
                <el-row>
                    <el-col :span="5" :offset="11" >
                        <el-button type="info" name="reset" @click="reset()">重置</el-button>
                        <el-button type="info" name="submit" @click="submitLink()">提交</el-button>
                    </el-col>
                </el-row>
            </el-card>
            <!-- 标题 -->
        </el-col>
      </el-row>
  </div>
</template>

<script>
import {addLinks,getLinks} from '../../../../api/index.js'
export default {
    data() {
      return {
          linkInfo:{
              nickname:'',
              address:'',
              logo:'',
              tip:'',
          },
          links:[]
      }
    },
    mounted() {

    },
     methods: {
      //1.上传友链
        async submitLink() {
        if (!this.linkInfo.nickname) {
            this.$message({
            message: '还没写网站地址',
            type: 'warning'
            })
            return;
        }
        if(!this.linkInfo.address) {
            this.$message({
            message: '还没写网站链接',
            type: 'warning'
            })
            return;
        }
        if(!this.linkInfo.logo) {
            this.$message({
            message: '还没有网站头像',
            type: 'warning'
            })
            return;
        }
        const result = await addLinks(
            this.linkInfo.nickname,
            this.linkInfo.logo,
            this.linkInfo.address,
            this.linkInfo.tip
        )
        if(result.code==200) {       
        this.linkInfo.nickname = "";
        this.linkInfo.address = "";
        this.linkInfo.logo = "";
        this.linkInfo.tip = "";
        this.$message({
            message: "上传友链成功",
            type: "success"
        });
        // 更新友链     
        this.getLinkAll()
         }
        },
        //2.重置表单
        reset() {
           this.linkInfo = {}
        },
        //3.获取友链列表
        async getLinkAll() {
            const result = await getLinks() 
            if(result.code==200) {
                this.links = result.data
            }
        }
    }

}
</script>

<style lang="less" >
    .title {
        widows: 40px;
        height: 40px;
        line-height: 40px;
        text-align:center;
        padding-bottom: 10px; 
        font-weight: 700;
    }
    .el-card {
        padding-right: 20px;
        margin-top: 20px;
    }

</style>
