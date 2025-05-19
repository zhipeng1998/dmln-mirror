<template>
  <div id="Message">
    <div class="message-form">
      <h2>在线留言</h2>
      <p>
        欢迎与我们联系，为了能够更好地处理您反馈的信息，请您如实填写表单内容，标注"*"为必填
      </p>
      <el-form
        ref="formRef"
        label-position="top"
        label-width="auto"
        :model="formLabelAlign"
        style="max-width: 600px"
      >
        <el-row :gutter="130">
          <el-col :span="windowWidth > 767 ? 12 : 24">
            <el-form-item
              label="姓名"
              prop="name"
              :rules="[
                {
                  required: true,
                  message: '请输入姓名',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
          </el-col>
          <el-col :span="windowWidth > 767 ? 12 : 24">
            <el-form-item
              label="电子邮箱"
              prop="email"
              :rules="[
                {
                  required: true,
                  message: '请输入邮箱',
                  trigger: 'blur',
                },
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input v-model="formLabelAlign.email" />
            </el-form-item>
          </el-col>
          <el-col :span="windowWidth > 767 ? 12 : 24">
            <el-form-item
              :rules="[
                {
                  required: true,
                  message: '请输入联系电话',
                  trigger: 'blur',
                },
                {
                  validator: (rule, value, callback) => {
                    const phoneRegex = /^1[3-9]\d{9}$/;
                    if (!phoneRegex.test(value)) {
                      callback(new Error('请输入正确的手机号'));
                    } else {
                      callback();
                    }
                  },
                  trigger: ['blur', 'change'],
                },
              ]"
              label="联系电话"
              prop="phone"
            >
              <el-input v-model="formLabelAlign.phone" />
            </el-form-item>
          </el-col>
          <el-col :span="windowWidth > 767 ? 12 : 24">
            <el-form-item label="国家" prop="country">
              <el-input v-model="formLabelAlign.country" />
            </el-form-item>
          </el-col>
          <el-col :span="windowWidth > 767 ? 12 : 24">
            <el-form-item label="省份" prop="province">
              <el-input v-model="formLabelAlign.province" />
            </el-form-item>
          </el-col>
          <el-col :span="windowWidth > 767 ? 12 : 24">
            <el-form-item label="城市" prop="city">
              <el-input v-model="formLabelAlign.city" />
            </el-form-item>
          </el-col>
          <el-col :span="windowWidth > 767 ? 12 : 24">
            <el-form-item
              :rules="[
                {
                  required: true,
                  message: '请输入公司',
                  trigger: 'blur',
                },
              ]"
              label="公司"
              prop="company"
            >
              <el-input v-model="formLabelAlign.company" />
            </el-form-item>
          </el-col>
          <el-col :span="windowWidth > 767 ? 12 : 24">
            <el-form-item label="职位" prop="position">
              <el-input v-model="formLabelAlign.position" />
            </el-form-item>
          </el-col>
          <el-col :span="windowWidth > 767 ? 12 : 24">
            <el-form-item
              :rules="[
                {
                  required: true,
                  message: '请输入产品',
                  trigger: 'blur',
                },
              ]"
              label="产品"
              prop="product"
              :label-position="itemLabelPosition"
            >
              <el-input v-model="formLabelAlign.product" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item
              :rules="[
                {
                  required: true,
                  message: '请输入需求描述',
                  trigger: 'blur',
                },
              ]"
              label="需求描述"
              prop="requirement"
            >
              <el-input v-model="formLabelAlign.requirement" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="windowWidth > 767 ? 1 : 2">
            <el-form-item
              :rules="[
                {
                  required: true,
                  message: '*',
                  trigger: 'blur',
                },
              ]"
              prop="require1"
            >
              <el-checkbox v-model="formLabelAlign.require1"></el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="windowWidth > 767 ? 23 : 22">
            <p class="form-item">
              我愿意接受东铭绿能为我发送产品、解决方案或服务的相关信息。我知道我可以随时取消订阅。
            </p>
          </el-col>
          <el-col :span="windowWidth > 767 ? 1 : 2">
            <el-form-item
              :rules="[
                {
                  required: true,
                  message: '*',
                  trigger: 'blur',
                },
              ]"
              prop="require2"
            >
              <el-checkbox v-model="formLabelAlign.require2"></el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="windowWidth > 767 ? 23 : 22">
            <p class="form-item">
              *我理解并同意按照东铭绿能隐私保护条款和使用条款使用和传递我的个人信息。
            </p>
          </el-col>
        </el-row>
        <el-col :span="12" :offset="8">
          <el-form-item>
            <el-button
              type="danger"
              style="width: 120px"
              @click="onSubmit(formRef)"
              >提交</el-button
            >
          </el-form-item>
        </el-col>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup name="NewsInformation">
import { reactive, ref, onMounted } from "vue";
import { insertCustomer, getAllCustomer } from "../utils/supabase";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";

const formRef = ref<FormInstance>();

const labelPosition = ref("right");
const itemLabelPosition = ref("");
const formLabelAlign = reactive({
  name: "",
  email: "",
  phone: "",
  country: "",
  province: "",
  city: "",
  company: "",
  position: "",
  product: "",
  requirement: "",
  require1: false,
  require2: false,
});

const windowWidth = ref(window.innerWidth);

const onSubmit = async (formEl) => {
  console.log(formEl, { ...formLabelAlign }, formLabelAlign.name);
  if (!formLabelAlign.require1 || !formLabelAlign.require2) {
    ElMessage.error("请接受条款");
    return;
  }
  formEl.validate(async (valid) => {
    let customer = { ...formLabelAlign };
    delete customer.require1;
    delete customer.require2;
    if (valid) {
      const { data, error } = await insertCustomer(customer);
      if (error) {
        ElMessage.error("提交失败");
      } else {
        ElMessage({
          message: "提交成功",
          type: "success",
        });
        formEl.resetFields();
      }
    } else {
      ElMessage.error("请填写必填信息");
      return false;
    }
  });
};
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
@media screen and (max-width: 768px) {
  #Message {
    height: 1300px;
    background-image: none;
  }
  .message-form {
    width: 90%;
    min-width: 0;
    left: 5%;
    top: 40px;
    padding: 10px;
  }
}
</style>
