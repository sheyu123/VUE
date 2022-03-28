//引入app
import App from './App.vue';

//创建Vue实例
new Vue({
    //模板
    template:`
        <APP></App>
    `,
    //指定容器
    el:'#root',
    //注册组件
    components:{
        App,
    }
});