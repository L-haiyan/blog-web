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
                <el-timeline-item placement="top" 
                v-for="(timeline, index) in timelines"
                :key="index"
                icon="el-icon-s-promotion"
                type="primary"
                size="large"
                :timestamp = "timeline.time|date-format">
                  <el-card>
                    <h4>{{timeline.content}}</h4>
                    <p>{{timeline.author}} 提交于 {{timeline.time|date-format}}</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
      
        </div>
      </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Banner from '../../components/Banner/Banner.vue'
import Footer from '../../components/Footer/Footer.vue'
import {mapState} from 'vuex'
export default {
  components:{
    Header,
    Banner,
    Footer
  },
  mounted() {
    this.$store.dispatch('getTimelinesData')
  },
  computed:{
    ...mapState(['timelines'])
  },
   data() {
      return {
       
    }
}
}
</script>

<style lang="less" scoped>
.time {
  .container {
    width: 1000px;
    top:170px;
    margin-left:170px;
    background-color: #fff;
    padding-right: 30px;
    box-sizing: border-box;
    background-color: rgba(230, 216, 213, 0.3);
    box-shadow: 2px 4px 10px gray;
    transform: translateY(-300px);
  }
}
</style>

<style lang="less">
  .el-timeline {
    margin-top: 30px;
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
    left:520px;
  }
  .el-timeline li:nth-child(even) .el-timeline-item__timestamp {
    margin-left: 290px;
  }
</style>

