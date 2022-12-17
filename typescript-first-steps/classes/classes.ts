interface Eat {
    eat: boolean;
}

class Person implements Eat{
  constructor(name: string, age: number, eat: boolean) {
    this.name = name;
    this.age = age;
    this.eat = eat;
  }
    eat: boolean;
  name: string;
  age: number;
}

const p = new Person("the future programmer", 25, true);
const {age} = p;

console.log(age);
