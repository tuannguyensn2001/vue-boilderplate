<script>
import {defineComponent, reactive,ref} from "vue";
import {useI18n} from 'vue-i18n';
import {useTodoList} from "./hooks";

const TodoList = defineComponent({
  name: 'TodoList',
  setup() {
    const form = reactive({
      task: '',
    });
    const formRef = ref(null);
    const {t: trans} = useI18n();
    const {lists, addTask} = useTodoList();

    const onSubmit = () => {
      addTask(form.task);
      formRef.value.resetFields();
      form.task = '';
    }

    return {form, trans, lists, addTask,onSubmit,formRef};
  }
})


export default TodoList;


</script>

<template>
  <div>
    <el-row :gutter="20">

      <el-form ref="formRef" :model="form">
        <el-form-item :label="trans('todolist.task')">
          <el-input  v-model="form.task"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit" type="primary">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>

    </el-row>

    <el-row>
      <ul>
        <li v-for="item in lists" :key="item">{{ item }}</li>
      </ul>
    </el-row>
  </div>
</template>