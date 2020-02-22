<template>
  <div>
    <el-table
      :data="students.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="ФИО" prop="name"></el-table-column>
      <el-table-column label="Средний балл" prop="avg"></el-table-column>
      <el-table-column label="Тип обучения" prop="typest"></el-table-column>
      <el-table-column label="Возраст" prop="age"></el-table-column>
      <el-table-column label="Наличие задолжностей" prop="academ"></el-table-column>
      <el-table-column label="Группа" prop="group"></el-table-column>

      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="onEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="onDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- Диалоговое окно -->
    <el-dialog v-if="dialogFormVisible" title="Student Edit" :visible.sync="dialogFormVisible">
      <el-form :model="selectedStudent">
        <p hidden="hidden">{{selectedStudent._id}}</p>
        <el-form-item label="ФИО">
          <el-input v-model="selectedStudent.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Средний балл">
          <el-input v-model="selectedStudent.avg" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Тип обучения">
          <el-select v-model="selectedStudent.typest" placeholder="Please select a type">
            <el-option label="Бюджет" value="Бюджет"></el-option>
            <el-option label="Комерция" value="Комерция"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Возраст">
          <el-input v-model="selectedStudent.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Наличие задолжностей">
          <el-select v-model="selectedStudent.academ" placeholder="Please select a type">
            <el-option label="Да" value="Да"></el-option>
            <el-option label="Нет" value="Нет"></el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="Группа">
          <el-select v-model="selectedStudent.group" placeholder="Please select a type">
            <el-option v-for="(group,index) in groups"
            v-bind:item="group"
            v-bind:index="index"
            v-bind:label="group.direction + group.course"
            v-bind:key="group._id"
            v-bind:value="group._id">
            {{group.direction + group.course}}
            </el-option>

          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="editConfirm">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import GroupService from "../GroupService";
import StudentsService from '../StudentsService';

export default {
  data() {
    return {
      students:[],
      search: "",
      groups: [],
      error: "",
      selectedStudent: null,
      dialogTableVisible: false,
      dialogFormVisible: false
    };
  },
  async created() { //mounted
    try {
      this.groups = await GroupService.getGroups();
      this.students = await StudentsService.getStudents();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    onDelete(id) {
      this.selectedStudent = this.students[id];
      StudentsService.deleteStudent(this.selectedStudent._id);
    },
    onEdit(id) {
      this.dialogFormVisible = true;
      this.selectedStudent = this.students[id];
    },
    editConfirm() {
      StudentsService.updateGroup(
        this.selectedStudent._id,
        this.selectedStudent.name,
        this.selectedStudent.avg,
        this.selectedStudent.typest,
        this.selectedStudent.age,
        this.selectedStudent.academ,
        this.selectedStudent.group
      );
      this.dialogFormVisible = false;
    }
  }
};
</script>