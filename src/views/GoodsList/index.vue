<template>
  <el-container class="container">
    <el-container>
      <el-main>
        <router-view name="user"></router-view>
        <div class="bg-box">
          <el-input placeholder="请输入内容" v-model="input1">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <el-button type="primary" @click="$router.push('/home/addgoods')">添加用户</el-button>
          <el-table :data="tableData" border stripe style="width: 100%">
            <el-table-column prop="id" label="#" width="50"> </el-table-column>
            <el-table-column prop="name" label="商品名称">
            </el-table-column>
            <el-table-column prop="phone" label="商品价格(元)" width="130"> </el-table-column>
            <el-table-column prop="role" label="商品重量" width="130"> </el-table-column>
            <el-table-column prop="done" label="创建时间" width="130"></el-table-column>
            <el-table-column prop="role" label="操作" width="250">
              <template>
                <el-button type="primary" icon="el-icon-edit">编辑</el-button>
                <el-button type="danger" icon="el-icon-delete">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <span class="demonstration"></span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[2, 3, 4, 5]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            >
            </el-pagination>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      isCollapse: false,
      input1: '',
      tableData: [{
        id: 1,
        name: '王小虎',
        phone: '13566664444',
        role: '超级管理员',
        done: true
      }, {
        id: 2,
        name: '王小虎',
        phone: '13566664444',
        role: '超级管理员',
        done: true
      }, {
        id: 3,
        name: '王小虎',
        phone: '13566664444',
        role: '超级管理员',
        done: true
      }, {
        id: 4,
        name: '王小虎',
        phone: '13566664444',
        role: '超级管理员',
        done: true
      }],
      currentPage4: 4
    }
  },
  methods: {
    onClick () {
      this.isCollapse = !this.isCollapse
      console.log(this.isCollapse)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.container {
  height: 100vh;
  .el-header {
    display: flex;
    justify-content: space-between;
    background-color: #373d41;
    div {
      img {
        width: 60px;
        height: 60px;
      }
      span {
        font-size: 22px;
        margin-left: 10px;
        color: #fff;
      }
    }
    .tuichu {
      width: 70px;
      height: 40px;
      margin-top: 10px;
      font-size: 14px;
    }
  }
  .el-aside {
    background-color: #373d41;
  }
  .el-main {
    background-color: #eaedf1;
    .bg-box {
      margin-top: 15px;
      padding: 20px;
      background-color: #fff;
      .el-input {
        width: 475px;
        margin-right: 15px;
      }
      .el-table {
        margin-top: 15px;
        .el-button-group {
          ::deep(.el-button) {
            width: 44px;
            height: 28px;
            border-radius: 5px;
            margin-right: 10px;
          }
        }
      }
      .block {
        margin-top: 15px;
      }
    }
  }
}
.el-menu {
  border-right: none;
}

</style>
