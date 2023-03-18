<template>
  <body style="overflow: hidden">
    <section class="layout-our-team-pt layout-our-team-pb">
      <div class="container">
        <div class="row our-team-nav">
          <div class="col-auto">
            <div class="sectionTitle-our-team">
              <h2 class="sectionTitle__title">Our Team</h2>
              <p class="sectionTitle__text">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        <div class="our-team-contents">
          <n-carousel :slides-per-view="4" :space-between="20" :loop="false" autoplay show-arrow>

            <div>
              <img
                  class="carousel-img"
                  src="../../assets/team/1.png"
              >
                <div class="name-bar-our-team">
                  <div class="our-team-name">Cody Fisher</div>
                  <div class="our-team-job">Medical Assistant</div>
                </div>
            </div>

            <div>
              <img
                  class="carousel-img"
                  src="../../assets/team/2.png"
              >
              <div class="name-bar-our-team">
                <div class="our-team-name">Dianne Russell</div>
                <div class="our-team-job">Web Designer</div>
              </div>
            </div>

            <div>
              <img
                  class="carousel-img"
                  src="../../assets/team/3.png"
              >
              <div class="name-bar-our-team">
                <div class="our-team-name">Jerome Bell</div>
                <div class="our-team-job">Marketing Coordinator</div>
              </div>
            </div>

            <div>
              <img
                  class="carousel-img"
                  src="../../assets/team/4.png"
              >
              <div class="name-bar-our-team">
                <div class="our-team-name">Theresa Webb</div>
                <div class="our-team-job">Nursing Assistant</div>
              </div>
            </div>

            <div>
              <img
                  class="carousel-img"
                  src="../../assets/team/5.png"
              >
              <div class="name-bar-our-team">
                <div class="our-team-name">Cameron Williamson</div>
                <div class="our-team-job">Dog Trainer</div>
              </div>
            </div>

            <div>
              <img
                  class="carousel-img"
                  src="../../assets/team/6.png"
              >
              <div class="name-bar-our-team">
                <div class="our-team-name">Courtney Henry</div>
                <div class="our-team-job">Medical Assistant</div>
              </div>
            </div>

            <template #arrow="{ prev, next }">
              <div class="custom-arrow">
                <button type="button" class="custom-arrow--left" @click="prev">
                  <n-icon><ArrowBack /></n-icon>
                </button>
                <button type="button" class="custom-arrow--right" @click="next">
                  <n-icon><ArrowForward /></n-icon>
                </button>
              </div>
            </template>
            <template #dots="{ total, currentIndex, to }">
              <ul class="custom-dots">
                <li
                    v-for="index of total"
                    :key="index"
                    :class="{ ['is-active']: currentIndex === index - 1 }"
                    @click="to(index - 1)"
                />
              </ul>
            </template>

          </n-carousel>

        </div>
      </div>
    </section>

  </body>

</template>

<script>
import {ArrowBack, ArrowForward} from '@vicons/ionicons5'
export default {
  components: {ArrowBack, ArrowForward},
  name: "ourTeamView"
}
</script>

<style scoped>
.carousel-img {
  width: 234px;
  height: 300px;
  object-fit: cover;
}

@media (max-width: 1080px) {
  .carousel-img {
    width: 175px;
    height: 225px;
  }
  .our-team-name {
    font-size: 14px !important;
    line-height: 1.125 !important;
    font-weight: 375;
  }
  .our-team-job {
    font-size: 11px !important;
    line-height: 1.125 !important;
  }
}

@media (max-width: 800px) {
  .carousel-img {
    width: 117px;
    height: 150px;
  }
  .our-team-name {
    font-size: 9px !important;
    line-height: 0.75 !important;
    font-weight: 250;
  }
  .our-team-job {
    font-size: 7px !important;
    line-height: 0.75 !important;
  }
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #000;
  background-color: rgba(0, 0, 0, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  right: 0;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #000;
}

.layout-our-team-pt {
  padding-top: 120px;
}

.layout-our-team-pb {
  padding-bottom: 120px;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto
}

.row {
  --bs-gutter-x:30px;
  --bs-gutter-y:0;
  display:flex;
  flex-wrap:wrap;
  margin-top:calc(var(--bs-gutter-y)*-1);
  margin-right:calc(var(--bs-gutter-x)*-0.5);
  margin-left:calc(var(--bs-gutter-x)*-0.5)
}

.our-team-nav {
  margin-top: -10px;
  margin-bottom: -10px;
  justify-content: space-between !important;
  align-items: flex-end !important;
}

.col-auto{
  flex:0 0 auto;
  width:auto
}

.sectionTitle-our-team .sectionTitle__title {
  font-size: 30px;
}

.sectionTitle-our-team .sectionTitle__text {
  margin-top: 5px !important;
}

@media screen and (max-width: 580px) {
  .sectionTitle__text {
    margin-left: 30px;
  }
}
.our-team-contents {
  overflow: hidden !important;
  padding-top: 40px !important;

}

.our-team-name {
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
}

.our-team-job {
  font-size: 14px;
  line-height: 1.5;
}

.name-bar-our-team {
  margin-top: 10px !important;
}

@media (max-width: 767px) {
  .layout-our-team-pt {
    padding-top: 100px;
  }
  .layout-our-team-pb {
    padding-bottom: 100px;
  }
}

@media (max-width: 575px) {
  .layout-our-team-pt {
    padding-top: 60px;
  }
  .layout-our-team-pb {
    padding-bottom: 60px;
  }
}

@media (max-width: 767px) {
  .sectionTitle-our-team .sectionTitle__title {
    font-size: 26px;
    margin-left: 30px;
  }
}

@media (min-width:576px){
  .container{
    max-width:540px
  }
}

@media (min-width:768px){
  .container{
    max-width:720px
  }
}

@media (min-width:992px){
  .container{
    max-width:960px
  }
}

@media (min-width:1200px){
  .container{
    max-width:1140px
  }
}

@media (min-width:1400px){
  .container{
    max-width:1320px
  }
}

</style>
