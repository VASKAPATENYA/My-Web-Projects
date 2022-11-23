// function Person(name, age) 
// {
//     this.name=name;
//     this.age=age;
// }

//  Person.prototype.showInfos=function(){
//     console.log("Name: " + this.name + " Age: " + this.age);
//  }

// // const person=new Person("Ali", 21);
// // console.log(person)


// function Employee(name,age,salary)
// {
//     // this.name=name;    
//     // this.age=age;    
//     Person.call(this, name, age)
//     this.salary=salary; 
// }

// Employee.prototype=Object.create(Person.prototype);
// Employee.prototype.toString=function(){console.log("Employee");}
// Employee.prototype.showInfos=function(){console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary)}


// const emp=new Employee("Ali", 21, 8000);

// emp.showInfos();
// emp.toString();
// console.log(emp)
//*************************************************************************** */


class Person//SuperClass, BaseClass
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    showInfos()
    {
        console.log("Name: " + this.name + " Age: " + this.age);
    }
}

class Employee extends Person//DerivedClass, SubClass, ChildClass
{
    constructor(name,age, salary)
    {
        // this.name=name;
        // this.age=age;
        // super.showInfos();
        super(name, age)
        this.salary=salary;
    }
    showInfos()
    {
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary)
    }
}

const emp = new Employee("Ali", 21 , 8000)

console.log(emp);
emp.showInfos();