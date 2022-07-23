<template>
  <el-card>
    <el-alert
      title="添加商品信息"
      type="info"
      show-icon
      center
      :closable="false"
    >
    </el-alert>
    <!-- 进度条 -->
    <el-steps :space="200" :active="1" align-center finish-status="success">
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <!-- 标签页 -->
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="基本信息">
        <el-form>
          <el-form-item label="商品名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="商品重量">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="商品数量">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <div class="block">
          <p class="demonstration">商品分类</p>
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
          ></el-cascader>
        </div>
      </el-tab-pane>
      <el-tab-pane label="商品参数">商品参数</el-tab-pane>
      <el-tab-pane label="商品属性">商品属性</el-tab-pane>
      <el-tab-pane label="商品图片">商品图片</el-tab-pane>
      <el-tab-pane label="商品内容">商品内容</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      tabPosition: 'left',
      value: [],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }]
        }]
      }]
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='scss'>
.el-card {
  margin-top: 15px;
  .el-steps {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 30px;
  }
}
</style>
