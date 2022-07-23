<template>
  <div class="bg-box">
    <el-input placeholder="请输入内容" v-model="input1">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-button
      @click="
        addShow = true;
        edit = false;
      "
      type="primary"
      >添加用户</el-button
    >
    <el-table :data="userList" border stripe style="width: 100%">
      <el-table-column type="index" label="#" width="50"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="mobile" label="电话"> </el-table-column>
      <el-table-column prop="role_name" label="角色"> </el-table-column>
      <el-table-column prop="mg_state" label="状态">
        <template v-slot="scope">
          <el-switch
            @click.native="reviesStatus(scope.row.id, scope.row.mg_state)"
            v-model="scope.row.mg_state"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="role" label="操作">
        <template v-slot="scope">
          <el-button
            @click="compile(scope.row)"
            type="primary"
            icon="el-icon-edit"
          ></el-button>
          <el-button
            @click="delUser(scope.row.id)"
            type="danger"
            icon="el-icon-delete"
          ></el-button>
          <el-button type="warning" icon="el-icon-setting"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageObj.pagenum"
        :page-size="pageObj.pagesize"
        :page-sizes="[2, 3, 4, 5]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 添加操作  对话框  @close 关闭对话框后的回调  用来做表单重置 -->
    <el-dialog
      @close="reset"
      :title="edit ? '编辑用户' : '添加用户对话框'"
      width="50%"
      :visible.sync="addShow"
    >
      <el-form :model="form" :rules="rules" label-width="80px" ref="myForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item v-if="!edit" label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="onClick" type="primary">确定</el-button>
        <el-button @click="addShow = false">取消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { getUsersList, delUsers, addUsers, reviesStatus, editUsers } from '@/api/user'
export default {
  created () {
    this.getUsersList()
  },
  data () {
    return {
      input1: '',
      currentPage4: 4,
      pageObj: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      userList: [],
      total: null,
      addShow: false, // 添加用户对话框
      form: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名称不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3-8之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3-8之间', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3-8之间', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号格式不正确', trigger: 'blur' }
        ]
      },
      addUserInfo: {},
      edit: false,
      userId: null
    }
  },
  methods: {
    // 获取用户数据列表
    async getUsersList () {
      const res = await getUsersList(this.pageObj)
      console.log('getUsersList', res)
      this.userList = res.data.data.users
      this.total = res.data.data.total
    },
    handleCurrentChange (pagenum) {
      // console.log(pagenum)
      this.pageObj.pagenum = pagenum
      this.getUsersList() // 重新获取数据   更新
    },
    handleSizeChange (pagesize) {
      // console.log(pagesize)
      this.pageObj.pagesize = pagesize
      this.getUsersList() // 重新获取数据   更新
    },
    // 删除单个数据
    delUser (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await delUsers(id)
        console.log(res)
        // 删除当前这一页最后一项  就要跳转到上一页
        if (this.userList.length === 1 && this.pageObj.pagenum > 1) {
          this.pageObj.pagenum-- // 跳到到上一页
        }
        this.getUsersList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 编辑操作
    compile (id) {
      this.addShow = true
      this.edit = true
      this.userId = id.id
      this.form = id
    },
    // 添加用户
    onClick () {
      // 二次校验
      this.$refs.myForm.validate(async (bool) => {
        if (!bool) return this.$message.error('表单数据非法')
        if (this.edit) {
          // 编辑用户
          const res = await editUsers({ id: this.userId, email: this.form.email, mobile: this.form.mobile })
          console.log(res)
        } else {
          // 添加用户
          const res = await addUsers(this.form)
          console.log(res)
        }
        this.getUsersList() // 重新获取数据   更新
        this.addShow = false
      })
    },
    // 关闭对话框后  重置表单内容
    reset () {
      this.$refs.myForm.resetFields()
    },
    // 修改用户状态
    async reviesStatus (id, mgstate) {
      const res = await reviesStatus(id, mgstate)
      console.log(res)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
  }
}
</script>

<style scoped lang='scss'>
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
</style>
