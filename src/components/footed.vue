<template>
  <div id="footed">
    <div class="warp">
      <div class="left">
        <p>xxxx版权所有</p>
        <p>xxxx版权所有</p>
      </div>
      <div class="right">
        <p>*****</p>
        <p>***</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  #footed {
    color: #fff;
    background-color: #000;
    .warp {
      margin: 0 auto;
      width: 1280px;
      height: 300px;
      .left {
        float: left;
      }
      .right {
        float: right;
      }
    }
  }
</style>