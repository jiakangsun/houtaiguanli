<template>
  <el-container>
    <el-container class="container">
      <el-main>
        <div class="bg-box">
          <el-button type="primary">添加角色</el-button>
          <el-table :data="roleList" border stripe style="width: 100%">
            <el-table-column type="expand" prop="id" label="#" width="50">
              <template>
                <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple">
                      <el-tag>订单管理</el-tag>
                    </div></el-col
                  >
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light">
                      <el-row>
                        <el-col :span="6"
                          ><div class="grid-content bg-purple">
                            <el-tag type="success">订单管理</el-tag>
                          </div></el-col
                        >
                        <el-col :span="18"
                          ><div class="grid-content bg-purple-light">
                            <el-tag closable>订单管理</el-tag>
                          </div></el-col
                        >
                      </el-row>
                    </div></el-col
                  >
                </el-row>
              </template>
            </el-table-column>
            <el-table-column type="index" label="#" width="50"> </el-table-column>
            <el-table-column prop="roleName" label="角色名称"> </el-table-column>
            <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
            <el-table-column prop="role" label="操作">
              <template>
                <el-button type="primary" icon="el-icon-edit"></el-button>
                <el-button type="danger" icon="el-icon-delete"></el-button>
                <el-button type="warning" icon="el-icon-setting"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getRoleList } from '@/api/role'
export default {
  created () {
    this.getRoleList()
  },
  data () {
    return {
      roleList: []
    }
  },
  methods: {
    async getRoleList () {
      const res = await getRoleList()
      console.log(res)
      this.roleList = res.data.data
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
    }
  }
}
.el-menu {
  border-right: none;
}

.el-aside {
  width: 200px;
  .fold {
    width: 200px;
    height: 40px;
    background-color: #ff68b5;
    border: none;
    border-radius: 0;
    color: #fff;
  }
}
</style>
