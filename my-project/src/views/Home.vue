<template>
  <div class="home">
    <homeSection1/>
    <homeSection2/>
  </div>
</template>

<script>
// @ is an alias to /src
import homeSection1 from '@/components/home/home.section1.vue'
import homeSection2 from '@/components/home/home.section2.vue'

export default {
  name: 'Home',
  components: {
    homeSection1,
    homeSection2
  },
  data(){
    return{
      scrollPositon:0
    }
  },
  updated(){
  },
 
}
</script>
