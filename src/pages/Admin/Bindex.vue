<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div> 
        <span>博客后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container class="main">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '52px' : '160px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
          <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="1"  @click="goTo('/home')">
        <i class="el-icon-menu"></i>
        <span slot="title">返回首页</span>
      </el-menu-item> 
      <el-menu-item index="2" @click="goTo('/admin/bessay')">
        <i class="el-icon-document"></i>
        <span slot="title" >文章管理</span>
      </el-menu-item>
      <el-menu-item index="3"  @click="goTo('/admin/bwords')">
        <i class="el-icon-chat-dot-round" ></i>
        <span slot="title">留言管理</span>
      </el-menu-item>
      <el-menu-item index="5"  @click="goTo('/admin/btime')">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">时光轴管理</span>
      </el-menu-item>
      <el-menu-item index="4"  @click="goTo('/admin/blink')">
        <i class="el-icon-paperclip"></i>
        <span slot="title">友链管理</span>
      </el-menu-item>
   
    </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 左侧菜单数据
      menulist: [],
   
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created() {
    // this.getMenuList()
    // this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
       // 路由跳转
      goTo (path) {
        this.$router.push(path).catch(err=>err)
      },
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    logout() {
    //   window.sessionStorage.clear()
    //   this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuList() {
    //   const { data: res } = await this.$http.get('menus')
    //   if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
    //   this.menulist = res.data
    //   console.log(res)
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(activePath) {
    //   window.sessionStorage.setItem('activePath', activePath)
    //   this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;

  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
