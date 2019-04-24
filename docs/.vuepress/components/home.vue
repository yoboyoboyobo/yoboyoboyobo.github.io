<template>
  <div class="theme-container">
    hahahahha{{aaa}}
   <div class="theme-container-header">{{aaa}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aaa: 23333
    }    
  },
  mounted() {
    console.error(111)
    console.error(2333)
    this.aaa = 6666
    console.error(6666)
  }
}
</script>

<style scoped>
.theme-container-header {
  height: 100px;
  width: 200px;
  border: 1px solid red;
}
</style>

