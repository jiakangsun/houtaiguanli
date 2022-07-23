<template>
  <el-container class="container">
    <el-header>
      <div>
        <img src="@/assets/1.png" alt="" />
        <span>后台管理系统</span>
      </div>
      <el-button class="tuichu" @click="logouts">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '49px' : '200px'">
        <el-menu
          background-color="#373d41"
          text-color="#fff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          active-text-color="red"
          router
        >
          <el-radio-group v-model="isCollapse">
            <el-button
              @click="onClick"
              class="fold"
              :width="isCollapse ? '49px' : '200px'"
              >| | |</el-button
            >
          </el-radio-group>
          <el-submenu v-for="(item,index) in leftList" :key="index" :index="item.path">
            <template #title>
              <i class="el-icon-s-custom"></i>
              {{ item.authName }}</template
            >
            <el-menu-item
              v-for="(item1,index1) in item.children"
              :key="index1"
              :index="item1.path"
            >
              <i class="el-icon-menu"></i>
              {{ item1.authName }}</el-menu-item
            >
          </el-submenu>
          <!-- <el-submenu index="2">
            <template #title>
              <i class="el-icon-s-marketing"></i>
              权限管理</template
            >
            <el-menu-item index="roles">
              <i class="el-icon-menu"></i>
              角色列表</el-menu-item
            >
            <el-menu-item index="quanxian">
              <i class="el-icon-menu"></i>
              权限列表</el-menu-item
            >
          </el-submenu>
          <el-submenu index="3">
            <template #title>
              <i class="el-icon-s-goods"></i>
              商品管理</template
            >
            <el-menu-item index="goodsList">
              <i class="el-icon-menu"></i>
              商品列表</el-menu-item
            >
            <el-menu-item index="parameter">
              <i class="el-icon-menu"></i>
              分类参数</el-menu-item
            >
            <el-menu-item index="classification">
              <i class="el-icon-menu"></i>
              商品分类</el-menu-item
            >
          </el-submenu>
          <el-submenu index="4">
            <template #title>
              <i class="el-icon-s-order"></i>
              订单管理</template
            >
            <el-menu-item index="order">
              <i class="el-icon-menu"></i>
              订单列表</el-menu-item
            >
          </el-submenu>
          <el-submenu index="5">
            <template #title>
              <i class="el-icon-s-platform"></i>
              数据统计</template
            >
            <el-menu-item index="datas">
              <i class="el-icon-menu"></i>
              数据报表</el-menu-item
            >
          </el-submenu> -->
        </el-menu>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getMenus } from '@/api/home'
export default {
  created () {
    this.getMenus()
  },
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
      currentPage4: 4,
      leftList: []
    }
  },
  methods: {
    logouts () {
      this.$store.dispatch('user/logouts')
      this.$router.push('/login')
    },
    onClick () {
      this.isCollapse = !this.isCollapse
      console.log(this.isCollapse)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    async getMenus () {
      const res = await getMenus()
      console.log('menus', res)
      this.leftList = res.data.data
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
