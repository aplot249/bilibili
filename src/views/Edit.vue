<template>
  <div v-if="model" class="page-wrapper">
    <div class="navbar-wrapper">
      <NavBar :userInfo="model" />
    </div>
    <div class="edit-list">
      <div class="user-img">
        <van-uploader
          :after-read="afterRead"
          class="upload-btn"
          preview-size="100vw"
        />
        <editItem label="头像" has-border="true">
          <img
            :src="model.user_img"
            alt=""
            slot="right"
            v-if="model.user_img"
          />
          <img src="@/assets/img/default_img.jpg" alt="" slot="right" v-else />
        </editItem>
      </div>

      <editItem
        label="昵称"
        has-border="true"
        :rightText="model.name"
        @itemClick="onNameClick"
      />
      <editItem label="UID" has-border="true" :rightText="model.username" />
      <editItem
        label="性别"
        has-border="true"
        @itemClick="onGenderClick"
        :rightText="model.gender === '1' ? '男' : '女'"
      />


      <editItem
        label="出生年月"
        has-border="true"
        :rightText="model.birth"
        @itemClick="onBirthClick"
      />


      <editItem label="个性签名"

      has-border="true"
      :rightText="model.user_desc"

      @itemClick="onDescClick" />
    </div>
    <div class="btns-wrapper">
      <EditBtn text="退出登录" hasBorder="true" @btnClick="onLogout" />
      <EditBtn text="返回空间" @btnClick="backToUserInfo" />
    </div>

    <!-- 昵称编辑 -->
    <!-- TODO  添加正则校验 -->
    <van-dialog
      v-model="namePopShow"
      title="昵称"
      show-cancel-button
      @confirm="onNameConfirm"
      @cancel="inputContent = ''"
    >
      <van-field v-model="inputContent" placeholder="请输入昵称" autofocus />
    </van-dialog>

    <!-- 出生年月编辑 -->
    <van-dialog
      v-model="birthPopShow"
      title="出生年月"
      show-cancel-button
      @confirm="onBirthConfirm"
      @cancel="inputContent = ''"
    >
    <van-datetime-picker
    v-model="currentDate"
    type="year-month"
    title=" "
    :min-date="minDate"
    :max-date="maxDate"
    :formatter="formatter"
  />
  </van-dialog>


    <!-- 个性签名编辑 -->
    <van-dialog
      v-model="descPopShow"
      title="个性签名"
      show-cancel-button
      @confirm="onDescConfirm"
      @cancel="inputContent = ''"
    >
      <van-field
        v-model="inputContent"
        placeholder="请输入新个性签名"
        autofocus
        type="textarea"
      />
    </van-dialog>
    <!-- 性别选择 -->
    <van-action-sheet  
      v-model="genderSelectShow"
      :actions="genderList"
      @select="onGenderSelect"
      close-on-click-action
      cancel-text="取消"
    /><!-- 动作面板 -->
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import EditItem from "@/components/editItem";
import EditBtn from "@/components/EditBtn";

export default {
  components: {
    NavBar,
    EditItem,
    EditBtn,
  },
  data() {
    return {
      model: {},
      namePopShow: false,//昵称弹出框
      inputContent: "",

      birthPopShow: false,//出生年月

      descPopShow: false,//个签弹出框
      genderSelectShow: false,//性别选择弹出框
      genderList: [
        { name: "男", id: 1 },
        { name: "女", id: 0 },
      ],

      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2020, 11, 1),
      currentDate: new Date()

    };
  },
  methods: {

    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`;
      } else if (type === 'month') {
        return `${val}月`;
      }
      return val;

      this.model.birth = `${year}-${month}`;
      //this.isShow = false;
    },
    


    //进入组件调取数据渲染页面
    async getUserInfo() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      console.log(res);
      this.model = res.data[0];
    },
    async afterRead(file) {
      //（文件上传）FormData对象用以将数据编译成键值对，以便用XMLHttpRequest来发送数据
      const formdata = new FormData();
      formdata.append("file", file.file);
      const res = await this.$http.post("/upload", formdata);
      //   console.log(res)
      this.model.user_img = res.data.url;
      this.updateInfo();
    },
    async updateInfo() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
      console.log(res);
      if (res.data.code === 200) {
        this.$toast.success("修改成功");
      }
    },//昵称
    onNameClick() {
      console.log("click");
      this.namePopShow = true;
    },
    onNameConfirm() {
      console.log("confirm");
      this.model.name = this.inputContent;
      this.inputContent = "";
      this.updateInfo();
    },//个签
    onDescClick() {
      this.descPopShow = true;
    },
    onDescConfirm() {
      this.model.user_desc = this.inputContent;
      this.inputContent = "";
      this.updateInfo();
    },//性别
    onGenderClick() {
      this.genderSelectShow = true;
    },
    onGenderSelect(item) {
      console.log("select");
      console.log(item);
      this.model.gender = item.id.toString();
      this.updateInfo();
    },

    //出生年月
    onBirthClick() {
      //console.log("click");
      this.birthPopShow = true;
    },
    onBirthConfirm() {
      //this.inputContent =  this.model.birth;
      this.inputContent = "";
      console.log("birthday");
      //console.log(time);
      //this.model.birth = time.formatter.val.toString();
      this.updateInfo();
    },


    onLogout() {
      console.log("logout");
      localStorage.removeItem("id");
      localStorage.removeItem("token");
      this.$router.push("/login"); 
    },//退出登录（删除存储）
    backToUserInfo() {
      console.log("back");
      this.$router.back();
    },//返回
  },
  created() {
    this.getUserInfo();
  },
};
</script>

<style scoped lang="scss">
.page-wrapper {
  .navbar-wrapper {
    margin-bottom: 2.778vw;
  }
  .edit-list {
    margin-bottom: 2.778vw;
    .user-img {
      position: relative;
      overflow: hidden; //一整行空白都可点击
      .upload-btn {
        border: 1px solid red;
        width: 100%;
        position: absolute;
        opacity: 0;
      }
    }
  }
}
</style>
