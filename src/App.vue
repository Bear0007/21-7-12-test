<!--
作者：Loong
时间：2020/04/11
-->
<!-- APP [ App ] -->
<template>

  <div id='app'>
    <router-view />
  </div>

</template>

<script>
export default {
  components: { },

  props: [],

  data() {
    return{
      
    }
  },

  computed: { },

  watch: {
    $route: {
      handler: function(val, old){

      },
      deep: true
    }
  },

  created(){

  },

  mounted(){
    this.loadMain();

    this.getData();
  },

  methods:{
    loadMain(){

    },

    getData(){

    },
  },
}
</script>

<style lang='less'>

</style>

<style lang='less' scoped>

</style>