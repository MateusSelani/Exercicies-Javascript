class Animal {
  constructor(eat: boolean, sleep: boolean) {
    this.eat = eat;
    this.sleep = sleep;
  }
  eat: boolean;
  sleep: boolean;

  run(res: boolean): void {
    if (res) {
      console.log(`Running...`);
    } else {
      console.log(`Not Running`);
    }
  }
}

class Dog extends Animal {}

const bryanFamilyGuy = new Dog(true, true);
console.log(bryanFamilyGuy);
bryanFamilyGuy.run(true);
