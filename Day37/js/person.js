let per = {
    name: "홍길동",
    age: 23,

    show : function(){
        return `이름 : ${per.name} | 나이 : ${per.age}세`;
    },

    eat : function(food) {
        return `${per.name}이 ${food} 을(를) 먹는다`;
    }
}