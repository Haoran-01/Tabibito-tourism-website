<template>
<navigation-bar></navigation-bar>
  <div class="bg">
    <div class="container">
      <div class="titlePart">
        <div class="titleMain">
          <h1 class="mainTitle">Profile</h1>
          <div class="slogan">Manage all the information you need here</div>
        </div>
      </div>
      <div class="settings">
        <n-tabs
            v-model:value="tabValue"
            class="card-tabs"
            size="large"
            animated
            style="margin: 0 -4px"
            pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;">


          <n-tab-pane name="Basic Information" tab="Basic Information">
            <div class="infoCard">
              <img class="avatar" :src="basicInfo.avatar_url">
              <div class="cardText">
                <div class="nameBar">
                  <div class="userName">{{basicInfo.username}}</div>
                  <div class="edit">
                    edit info
                  </div>
                </div>
                <div class="userDescription">{{basicInfo.description}}</div>
              </div>
            </div>
            <div class="attrTitle">Real Name</div>
            <div class="attrValue">{{basicInfo.first_name + ' ' + basicInfo.last_name}}</div>
            <div class="attrTitle">Email</div>
            <div class="attrValue">{{basicInfo.email}}</div>
            <div class="attrTitle">Phone Number</div>
            <div class="attrValue">{{basicInfo.phone_number}}</div>
            <div class="attrTitle">Birthday</div>
            <div class="attrValue">{{basicInfo.birthday}}</div>
          </n-tab-pane>

          <n-tab-pane name="Orders" tab="Orders">
            <n-tabs
                v-model:value="orderType"
                class="card-tabs"
                size="large"
                animated
                pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
            >
              <n-tab-pane name="In Progress" tab="In Progress">
                <n-data-table
                    :columns="inProgressColumns"
                    :data="inProgressData"
                    :pagination="pagination"
                />
              </n-tab-pane>

              <n-tab-pane name="Completed" tab="Completed">
                <n-data-table
                    :columns="completedColumns"
                    :data="completedData"
                    :pagination="pagination"
                />
              </n-tab-pane>

              <n-tab-pane name="Cancelled" tab="Cancelled">
                <n-data-table
                    :columns="cancelledColumns"
                    :data="cancelledData"
                    :pagination="pagination"
                />
              </n-tab-pane>

            </n-tabs>
          </n-tab-pane>

          <n-tab-pane name="Your Comments" tab="Your Comments">
            <div v-for="comment in comments" class="comment">
              <div class="commentHead">
                <div class="leftCommentHead">
                  <img class="commentAvatar">
                  <div class="commentHeadTexts">
                    <div class="commentName">Test</div>
                    <div class="commentTime">Test</div>
                  </div>
                </div>
                <n-popconfirm
                    @positive-click="handleDeleteComment"
                >
                  <template #trigger>
                    <div class="commentAction">delete</div>
                  </template>
                  Are you sure you want to delete your comment?
                </n-popconfirm>
              </div>
              <div class="commentScore">9.2 Superb</div>
              <p class="commentDescription">fdsfdsfdsfasfsdfsdfsdfds fdsfdsfdsfasfsdfsdfsdfds fdsfdsfdsfasfsdfsdfsdfds fdsfdsfdsfasfsdfsdfsdfds fdsfdsfdsfasfsdfsdfsdfdsfdsfdsfdsfasfsdfsdfsdfds fdsfdsfdsfasfsdfsdfsdfds  </p>
              <div class="commentPictures">
                <img class="commentPicture">
                <img class="commentPicture">
                <img class="commentPicture">
              </div>
            </div>
          </n-tab-pane>

          <n-tab-pane name="Your Blogs" tab="Your Blogs">
            <div class="blog">
              <n-popconfirm
                  @positive-click="handleDeleteBlog"
              >
                <template #trigger>
                  <div class="blogAction">delete</div>
                </template>
                Are you sure you want to delete your blog?
              </n-popconfirm>

              <img class="blogCover">
              <div class="blogInfo">
                <div class="blogDate">April 06, 2022</div>
                <div class="blogTitle">fsdf sdfsdffd fsdfsdfsdf</div>
                <div class="blogDescription">sdfsdf sdfdsfdsfsd fsdf sdfsdffd fsdfsdfsdf sdfdsfdsfsd fsdf sdfsdffd fsdfsdfsdf sdfdsfdsfsd fsdf sdfsdffd fsdfsdfsdf sdfdsfdsfsd </div>
              </div>
            </div>
          </n-tab-pane>

<!--          <n-tab-pane name="Preference" tab="Preference">
            <div class="attrTitle">Language</div>
            <n-select v-model:value="chosenLanguage" :options="languageOptions" />
          </n-tab-pane>-->
        </n-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "../GeneralComponents/navigationBar.vue";
import {getCurrentInstance, h, ref} from "vue";
import { NButton, useMessage } from "naive-ui";

const createInProgressColumns = ({ cancel, viewDetail }) => {
  return [
    {
      title: "Travel Name",
      key: "travelName"
    },
    {
      title: "Start Date",
      key: "startDate"
    },
    {
      title: "End Date",
      key: "endDate"
    },
    {
      title: "Create Date",
      key: "createDate"
    },
    {
      title: "Paid",
      key: "paid",
      sorter: {
        compare: (a, b) => a.paid - b.paid
      }
    },
    {
      title: "Cancel",
      key: "cancel",
      render(row) {
        return h(
            NButton,
            {
              strong: true,
              secondary: true,
              type: 'error',
              onClick: () => cancel(row)
            },
            { default: () => "cancel"}
        )
      }
    },
    {
      title: "View Detail",
      key: "viewDetail",
      render(row) {
        return h(
            NButton,
            {
              strong: true,
              secondary: true,
              type: 'info',
              onClick: () => viewDetail(row)
            },
            {default: () => "view detail"}
        )
      }
    },
  ]
}
const createCompletedColumns = ({ viewDetail }) => {
  return [
    {
      title: "Travel Name",
      key: "travelName"
    },
    {
      title: "Start Date",
      key: "startDate"
    },
    {
      title: "End Date",
      key: "endDate"
    },
    {
      title: "Create Date",
      key: "createDate"
    },
    {
      title: "Paid",
      key: "paid",
      sorter: {
        compare: (a, b) => a.paid - b.paid
      }
    },
    {
      title: "View Detail",
      key: "viewDetail",
      render(row) {
        return h(
            NButton,
            {
              strong: true,
              secondary: true,
              type: 'info',
              onClick: () => viewDetail(row)
            },
            {default: () => "view detail"}
        )
      }
    },
  ]
}
const createCancelledColumns = ({ viewDetail }) => {
  return [
    {
      title: "Travel Name",
      key: "travelName"
    },
    {
      title: "Start Date",
      key: "startDate"
    },
    {
      title: "End Date",
      key: "endDate"
    },
    {
      title: "Create Date",
      key: "createDate"
    },
    {
      title: "Paid",
      key: "paid",
      sorter: {
        compare: (a, b) => a.paid - b.paid
      }
    },
    {
      title: "View Detail",
      key: "viewDetail",
      render(row) {
        return h(
            NButton,
            {
              strong: true,
              secondary: true,
              type: 'info',
              onClick: () => viewDetail(row)
            },
            {default: () => "view detail"}
        )
      }
    },
  ]
}
export default {
  name: "profileView",
  components: {NavigationBar},
  setup(){
    const axios = getCurrentInstance().appContext.config.globalProperties.axios;
    const inProgressData = ref([]);
    axios.post('/user/get_user_order', {
      // user_id: this.$route.params.uid,
      order_status: 'Processing'
    })
        .then((res) => {
          if (res.status === 200){
            for (const item of res.data.all_orders){
              inProgressData.value.push({
                id: item.id,
                travelName: item.name,
                startDate: item.start_time,
                endDate: item.end_time,
                createDate: item.res_time,
                paid: (item.price * item.discount).toFixed(2)
              })
            }
          }
        })
    return{
      inProgressData,
      tabValue: ref("Basic Information"),
      orderType: ref("In Progress"),
      inProgressColumns: createInProgressColumns({
        cancel(row){

          axios.post('/staff_portal/product_status?apifoxApiId=75345235', {
            id: row.id,
            operation: 'Cancelled'
          })
              .then((res) => {
                for ( let item of inProgressData.value){
                  if (item.id === row.id){
                    inProgressData.value.splice(inProgressData.value.indexOf(item), 1)
                  }
                }
              })
        },
        viewDetail(row){

        }
      }),
      completedColumns: createCompletedColumns({
        viewDetail(row){

        }
      }),
      cancelledColumns: createCancelledColumns({
        viewDetail(row){

        }
      })
    }
  },
  data(){
    return{
      basicInfo: {},

      completedData: [],
      cancelledData: []
    }
  },
  methods: {
    handleCancel(row){

    }
  },
  created() {
    this.axios.post('/user/getprofile', {
      user_id: this.$route.params.uid
    })
    .then((res) => {
      this.basicInfo = res.data
    })


    this.axios.post('/user/get_user_order', {
      user_id: this.$route.params.uid,
      order_status: 'Completed'
    })
        .then((res) => {
          if (res.status === 200){
            for (const item of res.data.all_orders){
              this.completedData.push({
                id: item.id,
                travelName: item.name,
                startDate: item.start_time,
                endDate: item.end_time,
                createDate: item.res_time,
                paid: (item.price * item.discount).toFixed(2)
              })
            }
          }
        })
    this.axios.post('/user/get_user_order', {
      user_id: this.$route.params.uid,
      order_status: 'Cancelled'
    })
        .then((res) => {
          if (res.status === 200){
            for (const item of res.data.all_orders){
              console.log(item)
              this.cancelledData.push({
                id: item.id,
                travelName: item.name,
                startDate: item.start_time,
                endDate: item.end_time,
                createDate: item.res_time,
                paid: (item.price * item.discount).toFixed(2)
              })
            }
          }
        })

  }
}
</script>

<style scoped>
template{
  background-color: #F5F5F5;
}
.bg{
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 90px;
  background-color: #F5F5F5;
}
.container{
  width: 100%;
  padding: 60px 60px 60px 60px;
  box-sizing: border-box;
  background-color: #F5F5F5;
}
.titlePart{
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
  line-height: 1.875;
}
.titleMain{
  margin: 10px 15px;
  flex: 0 0 auto;
  width: auto;
  box-sizing: border-box;
}
.mainTitle{
  margin: 0;
  font-weight: 600;
  line-height: 1.4;
  font-size: 30px;
}
.slogan{
  font-size: 15px;
  color: var(--secondary-text-color);
}
.settings{
  padding: 30px;
  box-sizing: border-box;
  background-color: white;
}
.tabInnerContainer{
  width: 83.33%;
}
.infoCard{
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  display: flex;
}
.avatar{
  margin-right: 24px;
  object-fit: contain;
}
.nameBar{
  display: flex;
  justify-content: space-between;
}
.userName{
  margin: 6px 0;
  font-size: 20px;
}
.edit{
  width: 100px;
  height: auto;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: .1s ease-out;
  cursor: pointer;
}
.edit:hover{
  background-color: #0d2857;
  transition: .1s ease-in;
}
.description{
  color: var(--secondary-text-color);
}
.attrTitle{
  margin-left: 12px;
  width: fit-content;
  font-size: 20px;
  border-bottom: var(--primary-color) 2px solid;
}
.attrValue{
  margin: 12px 0 12px 16px;
}
.comment{
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  margin-bottom: 30px;
}
.commentHead{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.leftCommentHead{
  display: flex;
}
.commentAvatar{
  object-fit: contain;
  border-radius: 100%;
  width: 60px;
  height: 60px;
}
.commentHeadTexts{
  margin: auto auto auto 12px;
}
.commentName{
  margin: 4px 0;
}
.commentTime{
  font-size: 14px;
  color: var(--secondary-text-color);
}
.commentAction{
  width: 100px;
  height: 44px;
  background-color: rgb(247, 222, 227);
  color: rgb(208, 48, 80);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: .1s ease-out;
  cursor: pointer;
  user-select: none;
}
.commentAction:hover{
  background-color: rgb(208, 48, 80);
  color: rgb(247, 222, 227);
}
.commentScore{
  margin: 12px 0;
  color: var(--primary-color);
  font-size: 20px;
}
.commentDescription{
  line-height: 1.875;
  margin: 0;
}
.commentPictures{
  display: flex;
  flex-wrap: wrap;

}
.commentPicture{
  border-radius: 4px;
  object-fit: contain;
  object-position: center;
  height: 110px;
  width: 110px;
  margin-right: 30px;
}
.blog{
  display: flex;
  margin-bottom: 30px;
  height: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}
.blogAction{
  position: absolute;
  right: 0;
  width: 100px;
  height: 44px;
  background-color: rgb(247, 222, 227);
  color: rgb(208, 48, 80);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: .1s ease-out;
  cursor: pointer;
  user-select: none;
}
.blogAction:hover{
  background-color: rgb(208, 48, 80);
  color: rgb(247, 222, 227);
}
.blogCover{
  margin-right: 30px;
  min-width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
}
.blogInfo{
  margin: auto 0;
}
.blogDate{
  color: var(--secondary-text-color);
  font-size: 15px;
}
.blogTitle{
  margin-top: 10px;
  font-size: 22px;
  line-height: 1.45;
}
.blogDescription{
  font-size: 15px;
  color: var(--secondary-text-color);
  margin-top: 10px;
}
</style>