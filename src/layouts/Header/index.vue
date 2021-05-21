<script>
  import {defineComponent,reactive} from "vue";
  const Header =  defineComponent({
    name: 'Header',
    setup(){
      const routes = reactive({
        home: {
          name: 'home'
        },
        about: {
          name: 'about'
        },
        todolist: {
          name: 'todolist'
        }
      })

      return {routes}
    }
  });

  export default Header;
</script>

<template>
  <div>
    <router-link :to="routes.home">Home</router-link>
    <router-link :to="routes.about">About</router-link>
    <router-link :to="routes.todolist">Todolist</router-link>

  </div>
</template>