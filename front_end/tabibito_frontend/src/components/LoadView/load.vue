<template>
  <div>
    <div v-if="isLoading" class="loading">
      <div class="logo_all">
        <img class=" aaa" src="../../assets/logo.jpg">
      </div>
      <div class="preloader_tit">Tabibito</div>
    </div>
    <div v-else>
      sdadasdasdasdasdasdasdklaklsjd就去爱我的开机哦情景滴哦期待很久哦i
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      sdadasdasdasdasdasdasdklaklsjd就去爱我的开机哦情景滴哦期待很久哦i
      sdadasdasdasdasdasdasdklaklsjd就去爱我的开机哦情景滴哦期待很久哦i
      sdadasdasdasdasdasdasdklaklsjd就去爱我的开机哦情景滴哦期待很久哦i
      sdadasdasdasdasdasdasdklaklsjd就去爱我的开机哦情景滴哦期待很久哦i
      sdadasdasdasdasdasdasdklaklsjd就去爱我的开机哦情景滴哦期待很久哦i
      sdadasdasdasdasdasdasdklaklsjd就去爱我的开机哦情景滴哦期待很久哦i

      <!-- 网页内容 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 子组件加载完成后，等待 3 秒钟再隐藏加载页面
      setTimeout(() => {
        this.isLoading = false
      }, 15000)
    })
  }
  // created() {
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 900);
  // },
};
</script>

<style>
.loading {
  /* 设置加载页面的样式 */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.preloader_tit{
  font-size: 47px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  margin-top: 18px;
}

.logo_all{
  animation-name: box-moving;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 132px;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 2px 24px 0px #00000014;
}

.aaa {
  animation-name: img-moving;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  width: 112px;
  height: 112px;

}

@keyframes img-moving {
  0% {
    transform: translateY(60px) scale(1);
  }
  50% {
    transform: translateY(0px) rotate(10deg) scale(1.2);
  }
  100% {
    transform: translateY(-120px) rotateX(-20deg) scale(1);
  }
}

@keyframes box-moving {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

</style>
