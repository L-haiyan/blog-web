<template>
  <div>
    <!-- header -->
    <Header></Header>
    <!-- audio -->
    <!-- <el-row class="audio">
      <el-card></el-card>
    </el-row> -->
    
    <!-- write -->
  <el-row>
    <el-col class="write" :span="18" :offset="3">
      <el-row class="write-tips">
        <P><i class="icnfont el-icon-info"></i>留言说明:</P>
        <p>请留下有效的邮箱信息哦，不然收不到回复哦~</p>
      </el-row>
      <!-- form -->
      <el-row class="write-form">
        <el-row class="item-info" :gutter="10">
          <el-col :span="8">
            <el-input placeholder="请您输入昵称" v-model="input" maxlength="10"  clearable></el-input>
          </el-col>
          <el-col  :span="8">
            <el-input placeholder="请您输入邮箱" v-model="input" clearable></el-input>
          </el-col>
          <el-col :span="8">
            <el-input  placeholder="请您输入网站地址(http://)" v-model="input" clearable></el-input>
          </el-col>
        </el-row>
        <el-row class="item-text">
          <el-input
            type="textarea"
            placeholder="留下你的脚印吧~"
            show-word-limit
            size="medium"
            :rows="5"
          >
          </el-input>
        </el-row>
        <el-row class="item-emoji">
          <i class="iconfont iconbiaoqing"></i>
        </el-row>
        <el-row class="item-btn">
          <el-button type="info"  plain size="medium" class="reset">重置</el-button>
          <el-button type="info"  plain size="medium" class="submit">提交</el-button>
        </el-row>
      </el-row>
      <!-- list -->
      <el-row class="write-list">

      </el-row>
    </el-col>
  </el-row>
  </div>
</template>

<script>

</script>
<script>
import Header from '../../components/Header/Header.vue'
export default {
  data() {
      return {
        input: ''
      }
    },
  components:{
    Header
  }
}

</script>

<style lang="less" scoped>
  // wirte
  .write {
    height: 1200px;
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
    .write-form {
      position: relative;
      border: 1px solid #dedede;
      height: 300px;
      padding: 0px 10px 10px;
      .item-info {
      border-bottom: 1px dashed #dedede;
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

