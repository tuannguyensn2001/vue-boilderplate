<script>
import {defineComponent,inject} from "vue";


const TodoList = defineComponent({
  name: 'TodoList',
  setup(){

    const auth = inject('auth');

    const changeAuth = inject('changeAuth');


    return {changeAuth,auth};

  }
})



export default TodoList;


</script>

<template>
  <div>
    <button @click="changeAuth">Click me</button>
    <h1>{{auth.isLogin}}</h1>
  </div>
</template>