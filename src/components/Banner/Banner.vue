<template>
  <div>
    <!-- banner -->
      <div class="banner">
        <div class="banner-top"></div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
 //banner样式
  .banner {
    width: auto;
    height: 450px;
    background: url(../../../static/images/banner.png) no-repeat;
    background-size:100% 100%; 
    position: relative;
    .banner-top {
      width: auto;
      height: 450px;
      z-index:1;
      background-color: rgba(254,219,207,0.2);
    }
  }

</style>
