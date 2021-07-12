<!--
作者：Loong
时间：2021/07/01
-->
<!-- register [ 注册 ] -->
<template>

    <div id='register'>
        注册
        <button @click="$router.back()">后退</button>
    </div>

</template>

<script>
export default {
    components: { },

    props: [],

    data() {
        return{

        }
    },

    computed: { },

    watch: {
        $route: {
            handler: function(val, old){

            },
            deep: true
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

<style lang='less'>
    // @import '../../style/css/_register.less';
</style>

<style lang='less' scoped>
    // @import '../../style/style.less';
</style>