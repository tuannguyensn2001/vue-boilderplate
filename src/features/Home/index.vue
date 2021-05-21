<script>
import {defineComponent} from "vue";
import {useI18n} from 'vue-i18n';

export default defineComponent({
  name: 'Home',
  setup(){
    const {t:trans} = useI18n();

    return {trans};
  }
})

</script>

<template>
  <div>
   
  </div>

</template>