<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
</template>

<script>
  export default {
    name: 'App',
    setup(){
      const themeOverrides = {
        common: {
          primaryColor: '#3554D1',
          primaryColorHover: '#0a58ca',
          primaryColorPressed: '#051036',
          primaryColorSuppl: '#7E53F9'
        }
      }
      return{
        themeOverrides
      }
    }
  }
</script>

<style>
body {
  margin: 0;
  font-family: Jost, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 16px;
}
:root {
  --border-color: rgba(255, 255, 255, 0.2);
  --border-radius: 6px;
  --primary-color: #3554D1;
  --secondary-text-color: #697488;
  --text-color-dark: #051036;
}
@font-face {
  font-family: Jost;
  src: url("assets/fonts/Jost-VariableFont_wght.ttf");
}
@font-face {
  font-family: JostBlod;
  src: url("assets/fonts/Jost-Medium.ttf");
}

@font-face {
  font-family: JostLight;
  src: url("assets/fonts/Jost-Light.ttf");
}
</style>