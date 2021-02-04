<template>
  <div class="nav-bar">
    <!-- 具名插槽要给一个name -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Test"
}
</script>

<style>
.nav-bar {
  display: flex;
  /* 导航栏的高度一般都是44 */
  line-height: 44px;
  width: 375px;
  height: 44px;
}
.left,
.right {
  width: 60px;
  /* width:16px;
        height:16px;
        background:rgba(51,51,51,1); */
  /* background-color: red; */
}
.center {
  flex: 1;
  /* background-color: blue; */
  /* width:80px;
        height:18px;
        font-size:16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:18px; */
}
</style>