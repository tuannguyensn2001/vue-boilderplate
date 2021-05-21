<template>
  <div>
    <Header/>
    <router-view></router-view>
  </div>

</template>

<script>

import Header from './layouts/Header';
import {provide, reactive} from "vue";

export default {
  name: 'App',
  components: {
    Header
  },
  setup() {

    const auth = reactive({
      token: 'abcsdd',
      id: 1,
      isLogin: true
    });

    provide('auth',auth);

    provide('changeAuth',() => {
      console.log('click');
      auth.isLogin = !auth.isLogin;
      auth.id++;
    })

    return {auth}


  }
}
</script>

