<template>
  <el-container class="container">
    <el-container>
      <el-main>
        <div class="bg-box">
          <el-table :data="rightsList" border stripe style="width: 100%">
            <el-table-column type="index" label="#" width="50">
            </el-table-column>
            <el-table-column prop="authName" label="权限名称" width="180">
            </el-table-column>
            <el-table-column prop="path" label="路径"> </el-table-column>
            <el-table-column prop="level" label="权限等级">
              <template solt-scope="prop">
                <el-tag>等级一</el-tag>
                <el-tag>等级二</el-tag>
                <el-tag>等级三</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getRightsList } from '@/api/rights'
export default {
  created () {
    this.getRightsList()
  },
  data () {
    return {
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
      rightsList: []
    }
  },
  methods: {
    async getRightsList () {
      const res = await getRightsList('list')
      console.log(res)
      this.rightsList = res.data.data
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
    }
  }
}
.el-menu {
  border-right: none;
}
</style>
