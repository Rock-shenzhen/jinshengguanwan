<template>
  <div id="topBar">
    <div class="warp">
      <div class="logo">
        <img src alt />
      </div>
      <div class="nav">
        <ul>
          <li>我们</li>
          <li>业务</li>
          <li>投资者中心</li>
          <li>可持续发展</li>
          <li>党建创新</li>
          <li>传媒视点</li>
          <li class="el-icon-search"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.animation();

    // let nav = document.getElementsByClassName("nav")[0];

    // (function test1() {
    //   let weizhi1 = nav.offsetLeft;
    //   weizhi1 = Math.floor(weizhi1 - (weizhi1 - 580) / 20);
    //   nav.style.left = weizhi1 + "px";
    //   if (weizhi1 > 580) {
    //     window.requestAnimationFrame(test1);
    //   }
    // })();
  },
  methods: {
    animation() {
      let logo = document.getElementsByClassName("logo")[0];
      let nav = document.getElementsByClassName("nav")[0];

      (function test() {
        let weizhi = logo.offsetTop;
        let weizhi1 = nav.offsetLeft;

        weizhi = Math.ceil(weizhi - weizhi / 20);
        weizhi1 = Math.floor(weizhi1 - (weizhi1 - 580) / 20);

        logo.style.top = weizhi + "px";
        nav.style.left = weizhi1 + "px";
        // console.log(logo.style.opacity);
        // logo.style.opacity = Math.ceil(100 - 100 / 20) / 100;
        // logo.style.opacity = 0;
        // if()
        if (weizhi > 0) {
          logo.style.top = "0px";
        }
        if (weizhi1 < 580) {
          nav.style.left = "580px";
        }
        if (weizhi < 0 || weizhi1 > 580) {
          window.requestAnimationFrame(test);
        }
      })();
    }
    // animation1() {
    //   (function test1() {
    //     if (weizhi1 > 580) {
    //       window.requestAnimationFrame(test1);
    //     }
    //   })();
    // }
  }
};
</script>

<style lang="less" scoped>
#topBar {
  background-color: #f0f;
  .warp {
    margin: 0 auto;
    position: relative;
    width: 1280px;
    height: 110px;
    .logo {
      position: absolute;
      top: -100px;
      left: 0;
      width: 300px;
      height: 100px;
      background-color: #ff0;
    }
    .nav {
      position: absolute;
      left: 750px;
      top: 0;
      width: 700px;
      height: 100px;
      background-color: #0ff;
      ul {
        li {
          float: left;
          padding: 20px 20px;
        }
      }
    }
  }
}
</style>