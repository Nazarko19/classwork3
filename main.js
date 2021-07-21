
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client  {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client1 = [
    new Client(2,'vasya','kokos','vasya@gmail',380976534,['milk','bread']),
    new Client(1,'vasya','kokos','vasya@gmail',380976534,['milk','bread']),
    new Client(2,'vasya','kokos','vasya@gmail',380976534,['gsdfg',`fsdf`]),
    new Client(3,'vasya','kokos','vasya@gmail',380976534,'dfe'),
    new Client(4,'vasya','kokos','vasya@gmail',380976534,['sdfdsfds','sdgfef','sdfe','fewf']),
    new Client(5,'vasya','kokos','vasya@gmail',380976534,'sfe','sfee','fefef'),
    new Client(7,'vasya','kokos','vasya@gmail',380976534,''),
    new Client(6,'vasya','kokos','vasya@gmail',380976534,''),
    new Client(9,'vasya','kokos','vasya@gmail',380976534,''),
    new Client(10,'vasya','kokos','vasya@gmail',380976534,''),
    new Client(8,'vasya','kokos','vasya@gmail',380976534,'')
]
// console.log(client1);
let gg = client1.sort(function (a,b){
    return a.order.length - b.order.length
})
 console.log(gg)


//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


function Car(model,vurobnuk,year,maxspeed,objem,){
    this.model = model
    this.vurobnuk=vurobnuk
    this.year=year
    this.maxspeed=maxspeed
    this.objem=objem
    this.drive = function (){
        console.log(`їдемо зі швидкістю${maxspeed} на годину`)
    }
    this.info = function (){
        console.log(`
        model:${this.model}
        vurobnuk:${this.vurobnuk}
        year:${this.year}
        maxsped:${this.maxspeed}
        objem:${this.objem}`)
    }
    this.increaseMaxSpeed = function (newSpeed){
           this.maxspeed += newSpeed
    }
    this.changeYear = function (newValue){
        this.year = newValue
    }
    this.addDriver= function (driver){
      this.vodiy === driver
    }
}
let car1 = new Car('bmw','german',2005,260,2.5,'ivan')
car1.drive()
car1.info()
car1.increaseMaxSpeed(20)
car1.changeYear(2009)
car1.addDriver('ivan')
console.log(car1);



// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car



class Car1{
    model;
    vurobnuk;
    year;
    maxspeed;
    objem;

    constructor(model, vurobnuk, year, maxspeed, objem,) {
        this.model = model;
        this.vurobnuk = vurobnuk;
        this.year = year;
        this.maxspeed = maxspeed;
        this.objem = objem;
        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${maxspeed} на годину`)
        }
        this.info = function () {
            console.log(`
             model:${this.model}
             vurobnuk:${this.vurobnuk}
             year:${this.year}
             maxspeed:${this.maxspeed}
             objem:${this.objem}`)

        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxspeed += newSpeed
        }
        this.changeYear = function (newValue) {
            this.year = newValue
        }

    }

}

let car2 = new Car1('audi','german',"2010",300,3,)
car2.drive()
car2.info()
car2.increaseMaxSpeed(20)
car2.changeYear(2012)
console.log(car2)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку



class Qeen{
    name;
    age;
    size;

    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let princes = [
    new Qeen('anna',20,32),
    new Qeen('anna',20,33.5),
    new Qeen('anna',20,35),
    new Qeen('kate',20,30),
    new Qeen('anna',20,31),
    new Qeen('anna',21,34.5),
    new Qeen('anna',20,31.),
    new Qeen('anna',20,32.5),
    new Qeen('anna',20,33),
    new Qeen('olya',20,30.5)
]


class Prince extends Qeen{
    constructor(name, age, size) {
        super(name, age, size);
    }

}
let prince1 = new Prince("artur",23,32)

// function gf() {
//     for (const item of prince1) {
//         for (const one of princes) {
//             if (item.size === one.size) {
//                 prince1[item] === princes[one]
//
//             }
//         }
//
//     }
//     return princes[one]
// }
// gf()


    let pre = princes.find(function (size){
    return size.size == 32
})
console.log(pre)

