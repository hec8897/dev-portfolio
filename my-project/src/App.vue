<template>
  <div id="app">
    <appNav />
  <router-view/>
  </div>
</template>

<script>
import appNav from '@/common/nav.vue'

export default {
   name: 'App',
   components:{
     appNav
   }
  }
</script>
