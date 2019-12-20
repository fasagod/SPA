<template>
  <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">

    <el-form-item label="ФИО">
          <el-input v-model="formLabelAlign.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Средний балл">
          <el-input v-model="formLabelAlign.avg" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Тип обучения">
          <el-select v-model="formLabelAlign.type" placeholder="Выберите тип обучения">
            <el-option label="Бюджет" value="Бюджет"></el-option>
            <el-option label="Комерция" value="Комерция"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Возраст">
          <el-input v-model="formLabelAlign.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Наличие задолжностей">
          <el-select v-model="formLabelAlign.academ" placeholder="Отметьте наличие задолжностей">
            <el-option label="Да" value="Да"></el-option>
            <el-option label="Нет" value="Нет"></el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="Группа">
          <el-select v-model="formLabelAlign.group" placeholder="Выберите группу">
            <el-option v-for="(group,index) in groups"
            v-bind:item="group"
            v-bind:index="index"
            v-bind:key="group._id"
            v-bind:value="group.direction">
            {{group.direction + group.course}}
            </el-option>
          </el-select>
        </el-form-item>

    <el-button type="primary" @click="onSubmit">Add</el-button>
  </el-form>
</template>

<script>
 import GroupService from "../GroupService.js";
import StudentsService from "../StudentsService.js";

export default {
  data() {
    return {
      labelPosition: "right",
      groups:[],
      formLabelAlign: {
            name:"",
            avg:"",
            typest:"",
            age:"",
            academ:"",
            group:""
      }
    };
  },
  async created() { //mounted
    try {
      this.groups = await GroupService.getGroups();
      window.console.log(this.groups);
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    // todo redirect to groups
    onSubmit() {
      StudentsService.insertStudent(
            this.formLabelAlign.name,
            this.formLabelAlign.avg,
            this.formLabelAlign.typest,
            this.formLabelAlign.age,
            this.formLabelAlign.academ,
            this.formLabelAlign.group
      );
    }
  }
};
</script>