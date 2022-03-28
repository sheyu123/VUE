<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    //引入其他模块
    import School from './School.vue';
    import Student from './Student.vue';

    //默认暴露
    export default {
        //注册组件
        components:{
            School,
            Student,
        }
    }
</script>

<style>

</style>