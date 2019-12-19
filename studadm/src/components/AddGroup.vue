<template>
  <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
    <el-form-item label="direction">
      <el-input v-model="formLabelAlign.direction"></el-input>
    </el-form-item>
    <!-- <el-form-item label="type">
      <el-input v-model="formLabelAlign.type"></el-input>
    </el-form-item> -->
    <el-form-item label="type">
    <el-select v-model="formLabelAlign.type" placeholder="Please select a type">
      <el-option label="Очная" value="Очная"></el-option>
      <el-option label="Заочная" value="Заочная"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="course">
      <el-input v-model="formLabelAlign.course"></el-input>
    </el-form-item>
    <el-button type="primary" @click="onSubmit">Add</el-button>
  </el-form>
</template>

<script>
import GroupService from "../GroupService.js";
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        direction: "",
        type: "",
        course: ""
      }
    };
  },
  methods: {
    // todo redirect to groups
    onSubmit() {
      GroupService.insertGroup(
        this.formLabelAlign.direction,
        this.formLabelAlign.type,
        this.formLabelAlign.course
      );
    }
  }
};
</script>