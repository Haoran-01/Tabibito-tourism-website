<template>
  <section class="pos">
    <div class="iContainer">
      <div class="iTex">
        <h2 class="iTex1">Get inspiration for your next trip</h2>
        <p class="iTex2">Great travelling ideas</p>
      </div>

      <div class="line">

      <div class="iCon">
        <a class="iBlock">
          <div class="iImg">
            <img class="imgI" src="../../assets/2.png" alt="">
          </div>

          <div class="iTex3">
            <h4 class="iTex4">10 European ski destinations you should visit this winter</h4>
            <div class="iTex5">April 06, 2022</div>
          </div>
        </a>
      </div>

      <div class="iCon">
        <a class="iBlock">
          <div class="iImg">
            <img class="imgI" src="../../assets/2.png" alt="">
          </div>

          <div class="iTex3">
            <h4 class="iTex4">10 European ski destinations you should visit this winter</h4>
            <div class="iTex5">April 06, 2022</div>
          </div>
        </a>
      </div>

      <div class="iCon">
        <a class="iBlock">
          <div class="iImg">
            <img class="imgI" src="../../assets/2.png" alt="">
          </div>

          <div class="iTex3">
            <h4 class="iTex4">10 European ski destinations you should visit this winter</h4>
            <div class="iTex5">April 06, 2022</div>
          </div>
        </a>
      </div>

      </div>
    </div>

  </section>

</template>

<script>
export default {
  name: "inspiration"
}
</script>

<style scoped>
.pos{
  padding-top: 60px;
  padding-bottom: 60px;
}

.iTex{
  justify-content: center;
  text-align: center;
  flex:0 0 auto;
  width:auto;
}

.iTex1{
  font-size: 30px;
  font-family: JostBlod;
  font-weight: 100;
}

.iTex2{
  margin-top: -14px;
  color: #757272;
}

.line{
  display:flex;
  flex-wrap:wrap;

  margin: 15px;

  padding-top: 27px;
}

.iCon{
  flex:0 0 auto;
  width:30%;

  margin-left: 30px;
}

.iBlock{
  display:block;
}

.iImg{
  overflow: hidden;

  position: relative;
  display: block;

  padding-bottom: 75%;

  border-radius: 8px;
}

.imgI{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.imgI:hover{
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: scale(1.1);
}

.imgI:not(:hover){
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  transform: scale(1);
}

.iTex3{
  margin-top: 20px;
}

.iTex4{
  color: #051036;
  font-size: 18px;
  font-weight: 100;
  font-family: JostBlod;
}

.iTex5{
  color: #697488;
  font-size: 15px;
  font-family: JostLight;
  font-weight: 800;
  line-height: 1.4 !important;
  margin-top: -20px;
}


.iContainer{
  width:100%;
  padding-right:15px;
  padding-left:15px;
  margin-right:auto;
  margin-left:auto;
}

@media (min-width:576px){
  .iContainer{
    max-width:540px
  }
}

@media (min-width:768px){
  .iContainer{max-width:720px}
}

@media (min-width:992px){
  .iContainer{max-width:960px}
}

@media (min-width:1200px){
  .iContainer{
    max-width:1140px
  }
}

@media (min-width:1400px){
  .iContainer{
    max-width:1320px
  }
}


</style>