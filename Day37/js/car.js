class Car{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }

    show(){
        return `${this.name} (${this.speed} km/h)`;
    }

    
    speedUp(n){
        this.speed += n
        return `${n} km/h 가속 (현재 ${this.speed}km/h)` 
    }
    
    speedDown(n){
        this.speed -= n
        return `${n} km/h 감속 (현재 ${this.speed}km/h)` 
    }
}