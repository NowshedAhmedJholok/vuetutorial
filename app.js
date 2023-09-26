let app = new Vue({
    el:"#app",
    data:{
        name: "jholok"  ,
        age: new Date().toLocaleString
    },
    methods:{
        birth(num){
            return `you birth of date is ${num}`
        }
    }
})