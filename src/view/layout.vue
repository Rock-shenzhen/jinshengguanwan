<template>
  <div id="layout">
    <!-- <el-container id="home"> -->
    <!-- <el-header> -->
    <topBar></topBar>
    <!-- </el-header> -->
    <!-- <el-main> -->
    <router-view></router-view>
    <!-- </el-main> -->
    <!-- <el-footer> -->
    <footed></footed>
    <!-- </el-footer> -->
    <!-- </el-container> -->
  </div>
</template>

<script>
import topBar from "../components/topBar";
import footed from "../components/footed";
export default {
  components: {
    topBar,
    footed
  }
};
</script>

<style>
</style>