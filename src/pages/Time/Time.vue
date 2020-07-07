<template>
  <div class="time">
    <!-- header -->
    <Header></Header>
    <!-- banner -->
    <Banner></Banner>
    <div class="container">
      <!-- 时光轴 -->
      <div class="timeline">
        <div class="timeline-row">
          <div class="block">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/2" placement="top" 
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp = "activity.timestamp">
                <el-card>
                  <h4>{{activity.content}}</h4>
                  <p>王小虎 提交于 {{activity.timestamp}}</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
     
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Banner from '../../components/Banner/Banner.vue'
export default {
  components:{
    Header,
    Banner
  },
   data() {
      return {
        activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-s-promotion'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          // color: '#0bbd87',
          icon: 'el-icon-s-promotion' ,
          size: 'large',
          type: 'primary'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-s-promotion'
        }, {
          content: '默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式的节点',
          timestamp: '2018-04-03 20:46',
          icon: 'el-icon-s-promotion',
          size: 'large',
          type: 'primary'
        },
         {
          content: '默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式的节点',
          timestamp: '2018-04-03 20:46',
          icon: 'el-icon-s-promotion',
          size: 'large',
          type: 'primary'
        },
         {
          content: '默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式的节点默认样式的节点',
          timestamp: '2018-04-03 20:46',
          icon: 'el-icon-s-promotion',
          size: 'large',
          type: 'primary'
        }]
      }
    }
}
</script>

<style lang="less" scoped>
.time {
  position: relative;
  .container {
    width: 1000px;
    height: 1000px;
    position: absolute;
    top:170px;
    margin-left:170px;
    background-color: #fff;
    padding-right: 30px;
    box-sizing: border-box;
    background-color: rgba(230, 216, 213, 0.3);
    box-shadow: 2px 4px 10px gray;
  }
}
</style>

<style lang="less">
  .el-timeline {
    margin-top: 30px;
    margin-left: 10px;
  }
  .el-timeline-item__wrapper {
    width: 420px;
  }
  .el-timeline-item__node {
    left: 488px;
  }
  .el-timeline-item__icon {
    font-size: 23px;
  }
  .el-timeline-item__node--large {
    width: 35px;
    height: 35px;
  }
  .el-timeline-item__tail {
    margin-left:500px;
  }
  .el-timeline li:nth-child(odd) .el-timeline-item__wrapper{
    left:500px;
  }
  .el-timeline li:nth-child(even) .el-timeline-item__timestamp {
    margin-left: 300px;
  }
</style>

