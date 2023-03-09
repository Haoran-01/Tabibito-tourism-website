<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 16px;
}
:root {
  --border-color: rgba(255, 255, 255, 0.2);
  --border-radius: 6px;
  --secondary-text-color: #697488;
  --text-color-dark: #051036;
}
.el-dropdown-menu__item{
  width: 60px;
  justify-content: space-around;

}
</style>