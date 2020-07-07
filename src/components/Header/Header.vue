<template>
  <div>
      <!-- header -->
      <div class="header">
        <el-row :gutter="320">
          <el-col :span="10">
            <div class="grid-content bg-purple left">越努力，越幸运</div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple right">
              <ul>
                 <li class="right-item" @click="goTo('/home')"><i class="el-icon-house"></i>首页</li>
                <li class="right-item" @click="goTo('/time')"><i class="el-icon-camera"></i>时光机</li>
                <li class="right-item" @click="goTo('/essay')"><i class="el-icon-document"></i>文章</li>
                <li class="right-item" @click="goTo('/words')"><i class="el-icon-edit-outline">留言</i></li>
                <li class="right-item" @click="goTo('/link')"><i class="el-icon-connection"></i>友链</li>
                <li class="right-item" @click="goTo('/aboutme')"><i class="el-icon-user"></i>关于</li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
      goTo (path) {
        this.$router.push(path)
      }
    }
}
</script>

<style lang="less" scoped>
  // header样式
  .header {
      width: 100%;
      height: 60px;
      background-color: #c6eef1;
      height: 60px;
      line-height: 60px;
      font-size: 15px;
      color: #333;
      background-color: rgba(139, 212, 235, 0.2);
      position:fixed;
      z-index: 1;
      .left {
         float: left;
         margin-left:20px; 
       }
      .right {
         float:left;
         ul li {
           float: left;
           margin-right: 35px;
           &:hover {
             cursor: pointer;
             color: #fff;
           }
         } 
       }
    } 
</style>
