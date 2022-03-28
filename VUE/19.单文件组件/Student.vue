<template>
  <!-- 组件的结构 -->
  <div>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="showName">点我提示学生名字</button>
  </div>
</template>

<script>
    // 组件的交互(默认暴露)
    export default {
        name:'School',
        data() {
            return {
                name : '刘德华',
                age: 18,
            }
        },
        methods: {
            showName(){
                alert(this.name);
            }
        },
    }
</script>