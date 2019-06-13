new Vue({
    el:"#vue-app",
    data:{
        age:30,
        x:0,
        y:0
    },
    methods:{
        add:function(inc){
            this.age += inc;
        },
        subtract:function(dec){
            this.age -= dec;
        },
        move:function(){
            this.x=event.offsetX;
            this.y=event.offsetY;//鼠标移动坐标
        }
    }
})