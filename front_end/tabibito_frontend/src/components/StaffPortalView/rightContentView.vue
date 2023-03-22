<template>

  <div class="dashboard">
    <div class="dashboard_main">
      <div class="dashboard_content">
        <div class="row dash_head y-gap-20 pb-60 lg:pb-40 md:pb-32">
          <div class="col-auto">

            <h1 class="dash_title">Dashboard</h1>
            <div class="dash_text">Lorem ipsum dolor sit amet, consectetur.</div>

          </div>

          <div class="col-auto">

          </div>
        </div>


        <div class="row y-gap-30">

          <div class="col-xl-3 col-md-6">
            <div class="block_sub_wrap">
              <div class="row block_content">
                <div class="col-auto">
                  <div class="block_title">Pending</div>
                  <div class="block_money">$12,800</div>
                  <div class="block_total">Total pending</div>
                </div>

                <div class="col-auto">
                  <img src="../../assets/dashboard_sample_icon.svg" alt="icon">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="block_sub_wrap">
              <div class="row block_content">
                <div class="col-auto">
                  <div class="block_title">Pending</div>
                  <div class="block_money">$12,800</div>
                  <div class="block_total">Total pending</div>
                </div>

                <div class="col-auto">
                  <img src="../../assets/dashboard_sample_icon.svg" alt="icon">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="block_sub_wrap">
              <div class="row block_content">
                <div class="col-auto">
                  <div class="block_title">Pending</div>
                  <div class="block_money">$12,800</div>
                  <div class="block_total">Total pending</div>
                </div>

                <div class="col-auto">
                  <img src="../../assets/dashboard_sample_icon.svg" alt="icon">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="block_sub_wrap">
              <div class="row block_content">
                <div class="col-auto">
                  <div class="block_title">Pending</div>
                  <div class="block_money">$12,800</div>
                  <div class="block_total">Total pending</div>
                </div>

                <div class="col-auto">
                  <img src="../../assets/dashboard_sample_icon.svg" alt="icon">
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dashboard {
  display: flex;
}

@media (max-width: 991px) {
  .dashboard {
    flex-direction: column;
  }
}

:root {
  --dashboard-width: 300px;
}

@media (max-width: 1199px) {
  :root {
    --dashboard-width: 250px;
  }
}

.dashboard_main {
  overflow: hidden;
  width: 100%;
  padding-left: var(--dashboard-width);
  will-change: padding-left;
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.dashboard_main::after {
  content: "";
  display: none;
  position: fixed;
  z-index: 50;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  pointer-events: none;
  opacity: 0;
}

@media (max-width: 991px) {
  .dashboard_main {
    padding-left: 0;
  }
  .dashboard_main::after {
    display: block;
  }
}

.dashboard_content {
  width: 100%;
  padding: 60px;
  padding-bottom: 0;
  background-color: #F5F5F5 !important;
}

@media (max-width: 767px) {
  .dashboard_content {
    padding: 30px;
    padding-bottom: 0;
  }
}

@media (max-width: 575px) {
  .dashboard_content {
    padding: 20px;
    padding-bottom: 0;
  }
}

.dash_head {
  justify-content: space-between !important;
  align-items: flex-end !important;
}

.dash_title {
  font-size: 30px !important;
  line-height: 1.4 !important;
  font-weight: 600;
}

.dash_text {
  font-size: 15px !important;
  color: #697488;
}

.block_sub_wrap {
  padding: 30px !important;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0px 10px 30px 0px #05103608;
}

.block_content {
  margin-top: -10px;
  margin-bottom: -10px;
  justify-content: space-between !important;
  align-items: center !important;
}

.block_title {
  font-weight: 500;
  line-height: 1.4 !important;
}

.block_money {
  font-size: 26px !important;
  line-height: 1.6 !important;
  font-weight: 600;
  margin-top: 5px !important;
}

.block_total {
  font-size: 15px !important;
  line-height: 1.4 !important;
  color: #697488;
  margin-top: 5px !important;
}











.row{
  --bs-gutter-x:30px;
  --bs-gutter-y:0;
  display:flex;
  flex-wrap:wrap;
  margin-top:calc(var(--bs-gutter-y)*-1);
  margin-right:calc(var(--bs-gutter-x)*-0.5);
  margin-left:calc(var(--bs-gutter-x)*-0.5)
}

.row>*{
  box-sizing:border-box;
  flex-shrink:0;
  width:100%;
  max-width:100%;
  padding-right:calc(var(--bs-gutter-x)*0.5);
  padding-left:calc(var(--bs-gutter-x)*0.5);
  margin-top:var(--bs-gutter-y)
}

.row-cols-auto>*{
  flex:0 0 auto;
  width:auto
}

.row-cols-1>*{
  flex:0 0 auto;
  width:100%
}

.row-cols-2>*{
  flex:0 0 auto;
  width:50%
}

.row-cols-3>*{
  flex:0 0 auto;
  width:33.33333%
}

.row-cols-4>*{
  flex:0 0 auto;
  width:25%
}

.row-cols-5>*{
  flex:0 0 auto;
  width:20%
}

.row-cols-6>*{
  flex:0 0 auto;
  width:16.66667%
}

.col-auto{
  flex:0 0 auto;
  width:auto
}

@media (min-width:576px){
  .row-cols-sm-auto>*{
    flex:0 0 auto;width:auto
  }
  .row-cols-sm-1>*{flex:0 0 auto;width:100%}
  .row-cols-sm-2>*{flex:0 0 auto;width:50%}
  .row-cols-sm-3>*{flex:0 0 auto;width:33.33333%}
  .row-cols-sm-4>*{flex:0 0 auto;width:25%}
  .row-cols-sm-5>*{flex:0 0 auto;width:20%}
  .row-cols-sm-6>*{flex:0 0 auto;width:16.66667%}
}

@media (min-width:768px){
  .row-cols-md-auto>*{flex:0 0 auto;width:auto}
  .row-cols-md-1>*{flex:0 0 auto;width:100%}
  .row-cols-md-2>*{flex:0 0 auto;width:50%}
  .row-cols-md-3>*{flex:0 0 auto;width:33.33333%}
  .row-cols-md-4>*{flex:0 0 auto;width:25%}
  .row-cols-md-5>*{flex:0 0 auto;width:20%}
  .row-cols-md-6>*{flex:0 0 auto;width:16.66667%}
  .col-md-6{flex:0 0 auto;width:50%}
}

@media (min-width:992px){
  .row-cols-lg-auto>*{flex:0 0 auto;width:auto}
  .row-cols-lg-1>*{flex:0 0 auto;width:100%}
  .row-cols-lg-2>*{flex:0 0 auto;width:50%}
  .row-cols-lg-3>*{flex:0 0 auto;width:33.33333%}
  .row-cols-lg-4>*{flex:0 0 auto;width:25%}
  .row-cols-lg-5>*{flex:0 0 auto;width:20%}
  .row-cols-lg-6>*{flex:0 0 auto;width:16.66667%}
}

@media (min-width:1200px){
  .row-cols-xl-auto>*{
    flex:0 0 auto;
    width:auto
  }
  .row-cols-xl-1>*{
    flex:0 0 auto;
    width:100%
  }
  .row-cols-xl-2>*{
    flex:0 0 auto;
    width:50%
  }
  .row-cols-xl-3>*{
    flex:0 0 auto;
    width:33.33333%
  }
  .row-cols-xl-4>*{
    flex:0 0 auto;
    width:25%
  }

  .row-cols-xl-5>*{
    flex:0 0 auto;
    width:20%
  }

  .row-cols-xl-6>*{
    flex:0 0 auto;
    width:16.66667%
  }

  .col-xl-3{flex:0 0 auto;width:25%}
}

@media (min-width:1400px){
  .row-cols-xxl-auto>*{
    flex:0 0 auto;width:auto}
  .row-cols-xxl-1>*{flex:0 0 auto;width:100%}
  .row-cols-xxl-2>*{flex:0 0 auto;width:50%}
  .row-cols-xxl-3>*{flex:0 0 auto;width:33.33333%}
  .row-cols-xxl-4>*{flex:0 0 auto;width:25%}
  .row-cols-xxl-5>*{flex:0 0 auto;width:20%}
  .row-cols-xxl-6>*{flex:0 0 auto;width:16.66667%}
}

.y-gap-20 {
  margin-top: -10px;
  margin-bottom: -10px;
}

.y-gap-20 > * {
  padding-top: 10px;
  padding-bottom: 10px;
}

.y-gap-30 {
  margin-top: -15px;
  margin-bottom: -15px;
}

.y-gap-30 > * {
  padding-top: 15px;
  padding-bottom: 15px;
}


</style>