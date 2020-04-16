<template>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">SKILL</router-link>
      <router-link to="/publish">Publishing</router-link>
      <router-link to="/dev">Development</router-link>
    </div>
</template>
<script>
      export default {
        name: 'appNav'
        }
</script>
<style lang="scss">
#nav {
    padding: 20px;
    text-align: left;
    background: rgba(0,0,0,0.5);
    position: fixed;
    width: 100%;
    z-index: 999;

  a {
    display: inline-block;
    font-weight: bold;
    color: #fff;
    margin: 0px 20px;
    text-decoration: none;
  
    &::after{
      content: '';
      display: block;
      width: 0%;
      height: 2px;
      background: #42b983;
      margin: 0 auto;
      transition: 0.1s ease-in;
    }
    &:hover{
      color: #42b983;
    }
    &:hover::after{
      width: 100%;
    }

    &.router-link-exact-active {
      color: #42b983;
      &::after{
        width: 100%;
      }
    }
  }
}
</style>