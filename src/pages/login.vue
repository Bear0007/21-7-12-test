<!--
作者：Loong
时间：2021/07/01
-->
<!-- login [ 登录 ] -->
<template>

    <div id='login'>
        登录
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
    // @import '../../style/css/_login.less';
</style>

<style lang='less' scoped>
    // @import '../../style/style.less';
</style>