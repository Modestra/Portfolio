class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
    setRate(rate){
        return this.rate = rate;
    }
}
let worker = new Worker('Vasya' , 'Pupkin', 12, 31);
console.log(worker.setRate(10));
console.log(worker.getSalary());
console.log(worker);