class Student{
  constructor(firstname,lastname,surname){ //construtor
    this.firstname = firstname; //dot notation
    this.lastname = lastname;
    this.surname = surname;
    //Here, the this keyword refers to the new instance. Therefore, it is using dot notation to assign the received values to its corresponding keys.
  }
}

let dev = new Student('steve','ryan','wachira'); //object as instance of Student class
console.log(dev);
let okumu = new Student('Eric', 'dr', 'Intel'); //object as instance of Student class
console.log(okumu);

