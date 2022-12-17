var Person = /** @class */ (function () {
    function Person(name, age, eat) {
        this.name = name;
        this.age = age;
        this.eat = eat;
    }
    return Person;
}());
var p = new Person("the future programmer", 25, true);
var age = p.age;
console.log(age);
