<template>
  <div id="Message">
    <div class="message-form">
      <h2>在线留言</h2>
      <p>
        欢迎与我们联系，为了能够更好地处理您反馈的信息，请您如实填写表单内容，标注"*"为必填
      </p>
      <el-form
        label-position="top"
        label-width="auto"
        :model="formLabelAlign"
        style="max-width: 600px"
      >
        <el-row :gutter="130">
          <el-col :span="12">
            <el-form-item :required="true" label="姓名">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :required="true" label="电子邮箱">
              <el-input v-model="formLabelAlign.email" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :required="true" label="联系电话">
              <el-input v-model="formLabelAlign.phone" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="国家">
              <el-input v-model="formLabelAlign.country" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="省份">
              <el-input v-model="formLabelAlign.provence" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="城市">
              <el-input v-model="formLabelAlign.city" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :required="true" label="公司">
              <el-input v-model="formLabelAlign.company" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="职位">
              <el-input v-model="formLabelAlign.position" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              :required="true"
              label="产品"
              :label-position="itemLabelPosition"
            >
              <el-input v-model="formLabelAlign.product" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item :required="true" label="需求描述">
              <el-input v-model="formLabelAlign.info" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>
          <el-col :span="23">
            <p class="form-item">
              我愿意接受东铭绿能为我发送产品、解决方案或服务的相关信息。我知道我可以随时取消订阅。
            </p>
          </el-col>
          <el-col :span="1">
            <el-checkbox></el-checkbox>
          </el-col>
          <el-col :span="23">
            <p class="form-item">
              *我理解并同意按照东铭绿能隐私保护条款和使用条款使用和传递我的个人信息。
            </p>
          </el-col>
        </el-row>
        <el-col :span="12" :offset="8">
          <el-form-item>
            <el-button type="danger" style="width: 120px" @click="onSubmit"
              >提交</el-button
            >
          </el-form-item>
        </el-col>
      </el-form>
    </div>
  </div>
</template>

<script setup name="NewsInformation">
import { reactive, ref } from "vue";

const labelPosition = ref("right");
const itemLabelPosition = ref("");
const formLabelAlign = reactive({
  name: "",
  email: "",
  phone: "",
  country: "",
  provence: "",
  city: "",
  company: "",
  position: "",
  product: "",
  info: "",
});
import WOW from "wow.js";
import { onMounted } from "vue";
onMounted(() => {
  var wow = new WOW();
  wow.init();
});
</script>

<style scoped>
#Message {
  width: 100%;
  margin-top: 80px;
  height: 800px;
  background-image: url("../assets/img/message.png");
  background-size: cover;
  background-position: center;
}
.message-form {
  width: 45%;
  max-width: 660px;
  min-width: 500px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  top: 70px;
  left: 10%;
  background: #fff;
  padding-left: 30px;
}

.message-form h2 {
  margin: 0;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
}

.message-form p {
  margin: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  padding: 10px 0;
}
.form-item {
  font-size: 12px !important;
  padding: 0 !important;
  margin: 0;
  text-align: left !important;
  line-height: 30px;
}

@media screen and (max-width: 767px) {
  .news-container > li {
    width: 100%;
  }
  .news-container > li > .content {
    width: 70%;
    text-align: left;
    float: right;
  }
  .news-container > li > .time {
    width: 30%;
    text-align: left;
    float: right;
  }
  .news-container > li > .circle {
    display: none;
  }
}
</style>
