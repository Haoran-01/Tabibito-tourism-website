<template>
  <navigation-bar></navigation-bar>

  <div class="bg">

    <div class="container">

      <n-card class="card">

        <div class="border">

          <h1 class="font_login">Sign in or create an account
          </h1>
          <p class="font_acc">Already have an account?
            <a href="#" class="font_blue">Log in</a></p>

          <!--          name部分-->
          <div class="input_border">

            <div class="input_form">
              <input type="text" required>
              <label class="input_label">Username</label>
            </div>

          </div>

          <!--          账号部分-->
          <div class="input_border">

            <div class="input_form">
              <input type="text" required>
              <label class="input_label">Email</label>
            </div>

          </div>

          <!--          密码部分-->
          <div class="input_border">

            <div class="input_form">
              <input type="password" required>
              <label class="input_label">Password</label>
            </div>

          </div>

          <!--          确认密码部分-->
          <div class="input_border">

            <div class="input_form">
              <input type="password" required>
              <label class="input_label">Confirm Password</label>
            </div>

          </div>

          <!--          验证码部分-->
          <div class="input_border">

            <div class="input_form">
              <div class="half_1">
                <input type="text" required>
                <label class="input_label">Verification Code</label>
              </div>

              <div class="half_2">
                <!--          验证码按钮-->
                <a class="login_btn verify"  @click="startCountdown" v-show="!countingDown">
                  Send Verification Code
                </a>
                <a class="login_btn verify" v-if="countingDown">{{ remainingTime }} s </a>
              </div>
            </div>

          </div>

          <!--          按钮-->
          <div class="input_border">

            <a href="#" class="login_btn">
              Sign In <div class="icon_login"></div>
            </a>

          </div>

          <!--          其他登陆方式-->
          <div class="input_border">
            <div class="text_center">or sign in with</div>

            <button class="other_login_btn">
              <i class="google_icon"></i>
              Google
            </button>

          </div>

          <div class="input_border">

            <div class="text_note">By signing in, I agree to Tabibito Terms of Use and Privacy Policy.
            </div>

          </div>


        </div>

      </n-card>

    </div>

  </div>

  <footer-view></footer-view>

</template>

<script>

import navigationBar from "../GeneralComponents/navigationBar.vue";
import FooterView from "../GeneralComponents/footerView.vue";

export default {
  components: {FooterView, navigationBar},
  name: "loginView",
  data() {
    return {
      countingDown: false,
      remainingTime: 60,
      countdownInterval: null
    };
  },
  methods: {
    startCountdown() {
      this.countingDown = true;
      this.remainingTime = 60; // add this line to reset remainingTime to 60
      this.countdownInterval = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
        } else {
          clearInterval(this.countdownInterval);
          this.countingDown = false;
        }
      }, 1000);
    }
  }

}
</script>

<style scoped>

@font-face {
  font-family: Jost;
  src: url("../../assets/fonts/Jost-Regular.ttf");
}

.bg{
  background-image: url("../../assets/img.png");
  /*background-image: url("../../assets/loginBg.jpg");*/
  background-repeat: no-repeat;
  /*height: 100vh;*/
  min-height: 1100px;

  background-size: 100% 100%;

  font-family: Jost;
}

.container{
  display: flex;

  justify-content: center;
}

.card{

  width: 628px;

  /*height: calc(100vh - 300px);*/

  height: 900px;

  top: 120px;

  /*display: flex;*/
  /*align-items: center;*/

  background-color: #ffffff;
}

.font_login{
  font-size: 23px !important;

  margin-top: -10px;
  margin-bottom: -10px;
  font-weight: 600;
  flex:0 0 auto;width:100%
}

.border{
  margin: 30px 15px;
}

.font_acc{
  margin-top: 25px !important;
  color: #757272;
  font-size: 16px;
}

.font_blue{
  color: #3554D1;
  text-decoration:none;
}

.input_border{
  flex:0 0 auto;
  width:100%;
  margin-top: 20px;
}

.half_1{
  display: inline-block;


  width: 50%;
}

.half_2{

  display: inline-block;

  margin-left: 60px;
  /*margin-top: -10px;*/

  width: 40%;
}

.input_form{
  position: relative;
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
}

.input_label{
  line-height: 1 !important;
  font-size: 14px !important;
  color: #697488;
}

.input_form label {
  position: absolute;
  top: 26px;
  padding: 0 15px;
  pointer-events: none;
  font-size: 14px;
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.input_form input {
  border: 1px solid #DDDDDD;
  width: 100%;
  font-size: 15px;
  border-radius: 4px;
  /*padding: 0 15px;*/
  padding-top: 20px;
  padding-left: 15px;
  min-height: 48px;
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.input_form input:focus {
  outline: 2px solid #000000 !important;
}

.input_form input:focus ~ label, .input_form input:valid ~ label {
  transform: translateY(-10px);
}


.login_btn{
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.2;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  padding-top: 20px !important;
  padding-bottom: 20px !important;

  background-color: #3554D1 !important;
  color: #FFFFFF;

  text-decoration:none;

}

.login_btn:hover{
  border-color:  #051036;
  background-color: #051036 !important;
  color: white !important;
}

.icon_login{
  background-image: url("../../assets/arrow.svg");
  margin-left: 15px !important;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
}


.login_btn.verify{
  background-color: #ffffff !important;
  color: #3554D1;

  border: 1.2px solid #3554D1;

  margin-top: 5px;
  font-size: 17px;
}

.login_btn.verify:hover{
  border-color:  #3d61f1;
  background-color: #3d61f1 !important;
  color: white !important;
}

.text_center{
  text-align: center;
  margin-top: 40px;
  font-size: 17px;
}

.text_note{
  text-align: center;
  font-size: 17px;
  padding-left: 30px !important;
  padding-right: 30px !important;
}

.other_login_btn{
  background-color: #FFFFFF;
  color: #D93025;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  border: 1px solid #D93025;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  flex:0 0 auto;width:100%;

  padding-top: 15px !important;
  padding-bottom: 15px !important;

  border-radius: 8px;

  margin-top: 10px !important;
}

.other_login_btn:hover .google_icon{
  background-image: url("../../assets/google_white.svg");
}

.other_login_btn:hover{
  background-color: #ce2821;
  border-color: transparent;
  color: white !important;
}

.google_icon{
  background-image: url("../../assets/google.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  margin-right: 10px !important;

  width: 20px;
  height: 20px;
}





</style>