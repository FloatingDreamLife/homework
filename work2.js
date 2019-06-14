new Vue({
    el:"#vue-work2",
    data:{
        age:20,
        x:0,
        y:0
    },
    methods:{
        add:function(inc){
            return this.age += inc;
        },
        subtract:function(dec){
            return this.age -= dec;
        },
        stopmoving:function(){
            event.stopPropagation();
        },
        move:function(){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        prevent:function(){
            alert("hello world");
        }
    }
})