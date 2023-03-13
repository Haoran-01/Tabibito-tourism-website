<template>
  <navigation-bar></navigation-bar>

  <div class="bg">

    <div class="container">

      <n-card class="card">

        <div class="border">

          <h1 class="font_login">Reset Your Password</h1>
          <p class="font_acc">Remembered the password?
            <a href="#" class="font_blue">Login in Now</a></p>

          <form id="Form" method="post" autocomplete="off">

            <!--          账号部分-->
            <div class="input_border">

              <div class="input_form">
                <input type="text" v-model="inputE">
                <label class="input_label">Email</label>
              </div>

            </div>

            <!--          密码部分-->
            <div class="input_border">

              <div class="input_form">

                <div class="half_1">
                  <input type="text" v-model="code">
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

              <button type="submit" class="login_btn c" @click="verify">
                Continue
<!--                <div class="icon_login"></div>-->
              </button>

            </div>

          </form>

          <!--          其他登陆方式-->
          <div class="input_border">
            <div class="text_center">or sign in with</div>

            <button class="other_login_btn">
              <i class="google_icon"></i>
              Google
            </button>

          </div>

          <div class="input_border">

            <div class="text_note">Reset your password with a verification code or log in with google.</div>


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
import axios from "axios";
import {useToast} from "vue-toastification";

export default {
  setup() {
    // Get toast interface
    const toast = useToast();

    // Make it available inside methods
    return { toast }
  },
  components: {FooterView, navigationBar},
  name: "forgetPasswordView",
  data() {
    return {
      countingDown: false,
      remainingTime: 60,
      countdownInterval: null,

      inputE: '',
      code:''
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

      const tester = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!tester.test(this.inputEmail1)){
        this.toast.error("This email is not valid");
      }

      let emailValue = this.inputE;

      axios.post('http://127.0.0.1:5000/user/captcha', {
        email: emailValue,

      }).then(function (response){
        let code=response.data['code'];
        let message=response.data['message'];
        if (code === 200){
        } else if (code === 400){
          if (message === 'email'){
            this.toast.error("Email is not registered");
          }
        }
      }).catch(function (error) {
        console.log(error);
      });
    },

    verify(){
      let emailValue = this.inputE;
      let codeValue = this.code;


      axios.post('http://127.0.0.1:5000/user/forget_form_email', {
        email: emailValue,
        verifyCode: codeValue

      }).then(function (response){
        let code=response.data['code'];
        let message=response.data['message'];
        if (code === 200){
        } else if (code === 400){
          if (message === 'verifyCode'){
            this.toast.error("The verification code is not correctly");
          }
        }
      }).catch(function (error) {
        console.log(error);
      });
    }


  }

}
</script>

<style scoped>

@font-face {
  font-family: myFont;
  src: url("../../assets/fonts/Jost-Regular.ttf");
}

.bg{
  background-image: url("../../assets/img.png");

  /*background-image: url("../../assets/loginBg.jpg");*/
  background-repeat: no-repeat;
  /*height: 100vh;*/
  min-height: 975px;

  background-size: 100% 100%;

  font-family: myFont;
}

.container{
  display: flex;

  justify-content: center;
}

.card{

  width: 628px;

  /*height: calc(100vh - 300px);*/

  height: 740px;

  top: 120px;

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
  font-size: 15px;
}

.font_blue{
  color: #3554D1;
  text-decoration:none;
}

.input_border{
  flex:0 0 auto;
  width:100%;
  margin-top: 40px;
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

.forget_link{
  font-size: 15px !important;
  font-weight: 500;
  color: #3554D1;
  text-decoration: underline;
}

.login_btn{

  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  font-weight: 500;
  font-size: 19px;
  line-height: 1.2;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  margin-top: 70px;

  width: 100%;
  padding-top: 20px !important;
  padding-bottom: 20px !important;

  background-color: #3554D1 !important;
  color: #FFFFFF;

  text-decoration:none;
}

.login_btn.c:after{
  content: '»';
  opacity: 0;
  margin-left: 20px;
  transition: 0.5s;
  font-size: 23px;
}


.login_btn.c:hover:after {
  opacity: 1;
  right: 0;
  padding-left: 20px;

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

.text_center{
  text-align: center;
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

.other_login_btn:hover{
  background-color: #ce2821;
  border-color: transparent;
  color: white !important;
}

.other_login_btn:hover .google_icon{
  background-image: url("../../assets/google_white.svg");
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