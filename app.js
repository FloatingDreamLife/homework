new Vue({
   el:"#vue-app",
    data:{
       name:"yiku",
        job:"",
        website:"www.baidu.com",
        websiteTap:"<a href='www.baidu.com'>111</a>"
    },
    methods:{
        greet:function(time){
            return "Good" + time + " " +this.name + "!";
        }
    }
})
/*
* el:element 需要获取的元素， 一定是HTML中的根元素
* data:用于数据的储存
* methods:用于储存数据的方法
* */