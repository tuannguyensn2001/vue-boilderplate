<script>
import {defineComponent} from "vue";
import {useTodoList} from "./hooks";

const TodoList = defineComponent({
  name: 'TodoList',
  setup() {
    const {trans} = useTodoList();

    return {trans};
  }
})


export default TodoList;


</script>

<template>
  <div>
    {{ trans('todolist.task') }}
    <ul>
      <li v-for="item in data" :key="item">{{ item }}</li>
    </ul>
    <h1>{{ trans('todolist.welcome') }}</h1>
    <el-button type="success">Success</el-button>
  </div>
</template>

<style scoped>

</style>