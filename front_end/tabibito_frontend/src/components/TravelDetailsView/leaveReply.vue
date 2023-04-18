<template>

  <section>
    <div class="container">
      <div class="row y-gap-30 leave_message_wrap">
        <div class="col-xl-3">
          <div class="row">
            <div class="col-auto">
              <h3 class="lm_left_title">
                Leave a Reply
              </h3>
              <p class="lm_left_subtitle">
                Your email address will not be published.
              </p>
            </div>
          </div>
          <div class="row y-gap-30 lm_left_stars">
            <div class="col-sm-6">
              <div class="star_title">
                Location
              </div>
              <div class="star_wrap">
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="star_title">
                Staff
              </div>
              <div class="star_wrap">
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="star_title">
                Cleanliness
              </div>
              <div class="star_wrap">
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="star_title">
                Value for money
              </div>
              <div class="star_wrap">
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="star_title">
                Comfort
              </div>
              <div class="star_wrap">
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="star_title">
                Facilities
              </div>
              <div class="star_wrap">
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="star_title">
                Free WiFi
              </div>
              <div class="star_wrap">
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
                <n-icon class="star"><star /></n-icon>
              </div>
            </div>
          </div>
        </div>

        <div class="list_wrap">
          <n-space vertical>
            <div class="form_input">
              <n-input v-model:value="title" type="text" size="large" placeholder="Title" clearable
                       show-count
                       :maxlength="12"
                       :count-graphemes="countGraphemes"/>
            </div>
            <div class="form_input">
              <n-input
                  v-model:value="des"
                  type="textarea"
                  size="large"
                  placeholder="Write Your Comment"
                  clearable
                  show-count
                  :maxlength="200"
                  :count-graphemes="countGraphemes"
              />
            </div>
            <n-button strong secondary type="info" size="large" icon-placement="right" @click="handleComment">
              <template #icon>
                <n-icon>
                  <ArrowForwardOutline />
                </n-icon>
              </template>
              Post Comment
            </n-button>
          </n-space>

        </div>

      </div>
    </div>
  </section>

</template>

<script>
import { defineComponent, ref } from 'vue'
import {StarHalf as star} from "@vicons/ionicons5";
import {ArrowForwardOutline} from "@vicons/ionicons5";
import axios from 'axios'
export default defineComponent({
  name: "leaveReply",
  components: {
    star,
    ArrowForwardOutline
  },
  data() {
    return {
      value: ref(null),
    }
  },
  setup () {
    const title = ref("");
    const des = ref("");

    /*const handleComment = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:5000/comment/add_comment", {
          title: title.value,
          des: des.value,
          user_id: null,
          product_id: 9,
          location_grade: 9,
          staff_grade: 9,
          cleanliness_grade: 9,
          value_for_money_grade: 9,
          comfort_grade: 9,
          facilities_grade: 9,
          free_wifi_grade: 9,
          pics: [],
        });
        console.log(response.data); // 输出后端返回的数据
      } catch (error) {
        console.error(error);
      }
    };*/

    return {title, des, handleComment}
  },
})
</script>

<style scoped>
.form_input {
  position: relative;
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
}

.list_wrap {
  margin-top: -15px;
  margin-bottom: -15px;
}

.star {
  font-size: 10px;
  color: #F8D448;
}

.star_wrap {
  display:flex;
  margin-left: -2.5px;
  margin-right: -2.5px;
  align-items: center;
  padding-top: 10px;
}

.star_title {
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
}

.lm_left_stars {
  padding-top: 30px;
}
.lm_left_subtitle {
  font-size: 15px;
  color: #051036;
  margin-top: 5px;
}

.lm_left_title {
  font-size: 22px;
  font-weight: 500;
}

.leave_message_wrap {
  justify-content: space-between !important;
}








.container {
  width:100%;
  padding-right:var(--bs-gutter-x,15px);
  padding-left:var(--bs-gutter-x,15px);
  margin-right:auto;
  margin-left:auto
}
@media (min-width:350px){
  .container{
    max-width:300px
  }
}

@media (min-width:450px){
  .container{
    max-width:400px
  }
}
@media (min-width:550px){
  .container{
    max-width:540px
  }
}

@media (min-width:768px){
  .container{
    max-width:720px
  }
}

@media (min-width:1000px){
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
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
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
  .col-xl-5{flex:0 0 auto;width:41.66667%}
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

.col-sm-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

</style>