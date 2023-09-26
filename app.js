let app = new Vue({
    el:"#app",
    data:{
        address: "https://facebook.com"  ,
        age: new Date().toLocaleString
    },
    methods:{
        birth(num){
            return `you birth of date is ${num}`
        }
    }
})