<!--
作者：Loong
时间：2020/04/19
-->
<!-- index [ Index ] -->
<template>

    <div id='index'>
        <button @click="toLink('page1')">测试</button>
        <button @click="toLink('page2')">项目</button>

        <router-view></router-view>
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

        toLink(name){
            this.$router.push({name: name})
        }
    },
}
</script>

<style lang='less'>

</style>

<style lang='less' scoped>

</style>