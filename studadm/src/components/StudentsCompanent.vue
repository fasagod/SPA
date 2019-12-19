<template>
  <div>
    <el-table
      :data="groups.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
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

    <el-dialog v-if="dialogFormVisible" title="Group Edit" :visible.sync="dialogFormVisible">
      <el-form :model="selectedGroup">{{selectedGroup._id}}
        <el-form-item label="Direction" >
          <el-input v-model="selectedGroup.direction" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Type" >
          <el-select v-model="selectedGroup.type" placeholder="Please select a type">
            <el-option label="Очная" value="Очная"></el-option>
            <el-option label="Заочная" value="Заочная"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Course">
          <el-input v-model="selectedGroup.course" autocomplete="off"></el-input>
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

export default {
  data() {
    return {
      search: "",
      groups: [],
      error: "",
      selectedGroup : null,
      dialogTableVisible: false,
      dialogFormVisible: false
    };
  },
  async created() {
    try {
      this.groups = await GroupService.getGroups();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    onDelete(id) {
      this.selectedGroup = this.groups[id];
      GroupService.deleteGroup(this.selectedGroup._id);
    },
    onEdit(id) {
      this.dialogFormVisible = true;
      this.selectedGroup = this.groups[id];

    },
    editConfirm(){
      GroupService.updateGroup(this.selectedGroup._id,this.selectedGroup.direction,this.selectedGroup.type,this.selectedGroup.course);
      this.dialogFormVisible = false;

    }
  }
};
</script>