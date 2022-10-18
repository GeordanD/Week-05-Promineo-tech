/*
Object-Oriented Programming!
DVD Player
--------- Properties
Height:
Weight:
Width:
Color:
---------- Functionality
Play:
Fast Forward:
Rewind:
Pause:
----------
DVD
--------- Another object can interact with object
Movie Length:
Image:
Size:

Classes Group code together to represent objects // blueprint.
Classes use pascal case EachWordStartsWithACapitalLetter
Not a Function its a method.
Each Class should be in charge of one thing. each time you need new role make a new class.
||new|| keyword is used to make a new object in the class
*/
class Student {
    constructor(firstName, lastName, phoneNUmber, grade) {
        this.firstName = firstName;//{this} function refers too this CLASS
        this.lastName = lastName;
        this.phoneNUmber = phoneNUmber;
        this.grade = grade;
    }
    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNUmber}`);
    }
}

let student1 = new Student("Tom", "Sawyer", "8157589845", "A");
let student2 = new Student("April", "Sherry", "8157485656", "F");

student1.introduce();
student2.introduce();
/*
INHERITANCE FROM CLASSES HAS TO BE CALLED IN THE CONSTRUCTOR OF THE NEW CLASS IT WILL BE INHERITING TOO.......
call to method named *super* refers to the parent class we inherent from always call from parent class that extends
Important to know that if a method is repeating itself to make it a separate class and then extended it too the classes that need to use it .
*/
class NotificationSender {
  constructor(status) {
    this.status = status;
  }
  sendNotification(notification) {
    console.log("Sending: " + notification);
  }
  findUsersWithStatus(status) {
    let users = getUsers(status);
    return users;
  }
}

class PromotionSender extends NotificationSender {
    constructor(status) {
        super(status);
    }

    calculateDiscount(status) {
        if (status === "GOLD") {
            return .3;
        } else if (status === "SILVER") {
            return .15;
        }
        return 0;
    }
}

class CollectionSender extends NotificationSender {
    constructor(status) {
        super(status);
    }
    calculateFee(status) {
        if (status === "OVERDUE") {
            return 10;
        } else if (status === "DELINQUENT") {
            return 25;
        }
        return 5;
    }
}


let collectionSender = new CollectionSender("OVERDUE");
collectionSender.sendNotification("this is a test collections notification. ");
/*
try block and catch block   code from another persons library one example of where to use a catch block.
*/
try {
    list.push("hello");
} catch (err) {
    console.error("error");
}
console.log("goodbye");