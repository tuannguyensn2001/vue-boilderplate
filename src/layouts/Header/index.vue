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
  </div>
</template>