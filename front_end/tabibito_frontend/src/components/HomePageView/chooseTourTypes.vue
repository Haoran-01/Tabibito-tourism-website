<template>

  <section class="chooseLayout-pt chooseLayout-pb">
    <div class="container">
      <div class="row chooseHead">
        <div class="col-auto">
            <h2 class="sectionTitle">Choose Tour Types</h2>
            <p class="sectionText">Interdum et malesuada fames ac ante ipsum</p>
        </div>
      </div>

      <div class="chooseCards">
        <n-carousel :slides-per-view="5" :space-between="20" :loop="false" show-arrow>
          <n-card title="" class="tourTypeCard">
            <a href="tour-single.html" class="cardHref">
              <div class="tourTypeCardContent">
                <i class="icon-nature icon"></i>
                <h4 class="cardText">Wildlife Tour</h4>
                <p class="cardPrice">5 Tours From 550$</p>
              </div>
            </a>
          </n-card>
          <n-card title="" class="tourTypeCard">
            <a href="tour-single.html" class="cardHref">
              <div class="tourTypeCardContent">
                <i class="icon-nature icon"></i>
                <h4 class="cardText">Wildlife Tour</h4>
                <p class="cardPrice">5 Tours From 550$</p>
              </div>
            </a>
          </n-card>
          <n-card title="" class="tourTypeCard">
            <a href="tour-single.html" class="cardHref">
              <div class="tourTypeCardContent">
                <i class="icon-nature icon"></i>
                <h4 class="cardText">Wildlife Tour</h4>
                <p class="cardPrice">5 Tours From 550$</p>
              </div>
            </a>
          </n-card>
          <n-card title="" class="tourTypeCard">
            <a href="tour-single.html" class="cardHref">
              <div class="tourTypeCardContent">
                <i class="icon-nature icon"></i>
                <h4 class="cardText">Wildlife Tour</h4>
                <p class="cardPrice">5 Tours From 550$</p>
              </div>
            </a>
          </n-card>
          <n-card title="" class="tourTypeCard">
            <a href="tour-single.html" class="cardHref">
              <div class="tourTypeCardContent">
                <i class="icon-nature icon"></i>
                <h4 class="cardText">Wildlife Tour</h4>
                <p class="cardPrice">5 Tours From 550$</p>
              </div>
            </a>
          </n-card>
          <n-card title="" class="tourTypeCard">
            <a href="tour-single.html" class="cardHref">
              <div class="tourTypeCardContent">
                <i class="icon-nature icon"></i>
                <h4 class="cardText">Wildlife Tour</h4>
                <p class="cardPrice">5 Tours From 550$</p>
              </div>
            </a>
          </n-card>
          <n-card title="" class="tourTypeCard">
            <a href="tour-single.html" class="cardHref">
              <div class="tourTypeCardContent">
                <i class="icon-nature icon"></i>
                <h4 class="cardText">Wildlife Tour</h4>
                <p class="cardPrice">5 Tours From 550$</p>
              </div>
            </a>
          </n-card>
          <n-card title="" class="tourTypeCard">
            <a href="tour-single.html" class="cardHref">
              <div class="tourTypeCardContent">
                <i class="icon-nature icon"></i>
                <h4 class="cardText">Wildlife Tour</h4>
                <p class="cardPrice">5 Tours From 550$</p>
              </div>
            </a>
          </n-card>
          <n-card title="" class="tourTypeCard">
            <a href="tour-single.html" class="cardHref">
              <div class="tourTypeCardContent">
                <i class="icon-nature icon"></i>
                <h4 class="cardText">Wildlife Tour</h4>
                <p class="cardPrice">5 Tours From 550$</p>
              </div>
            </a>
          </n-card>
        </n-carousel>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "chooseTourTypes"
}
</script>

<style scoped>
.cardHref {
  text-decoration: none;
}

.cardText {
  color: #051036;
  font-size: 18px !important;
  font-weight: 500;
  margin-top: 50px !important;
}

@media (max-width: 767px) {
  .cardText {
    color: #051036;
    font-size: 18px !important;
    font-weight: 500;
    margin-top: 30px !important;
  }
}

.cardPrice {
  color: #697488;
  line-height: 1.4 !important;
  font-size: 14px !important;
  margin-top: 5px !important;
}

.icon {
  font-size: 60px !important;
  color: #3554D1;
}

@media (max-width: 575px) {
  .icon {
    font-size: 40px !important;
    color: #3554D1;
  }
}

.tourTypeCardContent {
  text-align: center;
  padding-top: 60px !important;
  padding-bottom: 24px !important;
  padding-left: 30px !important;
  padding-right: 30px !important;
}

.tourTypeCard {
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: block !important;
  border-radius: 4px;
  background-color: rgba(53, 84, 209, 0.05);
}

.chooseCards {
  position: relative;
  overflow: hidden !important;
  padding-top: 40px !important;
}

@media (max-width: 575px) {
  .chooseCards {
    padding-top: 20px !important;
  }
}

.chooseLayout-pt {
  padding-top: 60px;
}

.chooseLayout-pb {
  padding-bottom: 60px;
}

@media (max-width: 767px) {
  .chooseLayout-pt {
    padding-top: 60px;
  }
  .chooseLayout-pb {
    padding-bottom: 60px;
  }
}

@media (max-width: 575px) {
  .chooseLayout-pt {
    padding-top: 30px;
  }
  .chooseLayout-pb {
    padding-bottom: 30px;
  }
}

.container {
  width:100%;
  padding-right:var(--bs-gutter-x,15px);
  padding-left:var(--bs-gutter-x,15px);
  margin-right:auto;
  margin-left:auto
}

@media (min-width:576px){
  .container{
    max-width:540px
  }
}

@media (min-width:768px){
  .container{max-width:720px}
}

@media (min-width:992px){
  .container{max-width:960px}
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

.row {
  --bs-gutter-x:30px;
  --bs-gutter-y:0;
  display:flex;
  flex-wrap:wrap;
  margin-top:calc(var(--bs-gutter-y)*-1);
  margin-right:calc(var(--bs-gutter-x)*-0.5);
  margin-left:calc(var(--bs-gutter-x)*-0.5)
}

.chooseHead {
  margin-top: -10px;
  margin-bottom: -10px;
  justify-content: space-between !important;
  align-items: flex-end !important;
}

.col-auto {
  flex:0 0 auto;
  width:auto
}

.sectionTitle {
  font-size: 30px;
}

@media (max-width: 767px) {
  .sectionTitle {
    font-size: 26px;
  }
}

.sectionText {
  margin-top: 5px !important;
}

@media (max-width: 575px) {
  .sectionText {
    font-size: 0px;
  }
}

</style>