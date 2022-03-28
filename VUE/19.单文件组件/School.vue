<template>
  <!-- 组件的结构 -->
  <div id="root">
      <h2>学校名称：{{fullName}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
    // 组件的交互(默认暴露)
    export default {
        name:'School',
        data() {
            return {
                fullName : '尚硅谷',
                address:'上海',
            }
        },
        methods: {
            showName(){
                alert(this.fullName);
            }
        },
    }
</script>

<style>
/* 组件的样式 */
    .root{
        background-color: pink;
    }
</style>