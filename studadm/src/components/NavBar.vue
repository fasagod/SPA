<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item index="1">
        <router-link class="nav-link" to="/">Group</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <template slot="title"><router-link class="nav-link" to="/AddGroup">Add Group</router-link>
</template>
    </el-menu-item>
    <el-menu-item index="3">
        <router-link class="nav-link" to="/AddStudent">Add student</router-link>
    </el-menu-item>
    <el-menu-item index="4">
        <router-link class="nav-link" to="/StudentsInfo">Students info</router-link>
    </el-menu-item>
    <el-menu-item index="5">
        <router-link class="nav-link" to="/GroupsInfo">Groups info</router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
//   methods: {
//     handleSelect(key, keyPath) {
//       console.log(key, keyPath);
//     }
//   }
};
</script>