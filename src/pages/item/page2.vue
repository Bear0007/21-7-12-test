<!--
作者：Loong
时间：2021/07/01
-->
<!-- page2 [ page2 ] -->
<template>

    <div id='page2'>
        page2
        <router-view></router-view>
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
    // @import '../../style/css/_page2.less';
</style>

<style lang='less' scoped>
    // @import '../../style/style.less';
</style>