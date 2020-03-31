/*
 * @Author: Yepeng Zhang
 * @LastEditors: Yepeng Zhang
 */
//   只能在class内部使用
interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log(`User Created: ${this.name}`)
    }

    register() {
        console.log(`${this.name} is now registered.`);
    }

    payInvoice() {
        console.log('pay in voice!')
    }
}

let user1 = new User('pengpengzx', 'hellolittlewhite@gmail.com', 28);

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice()
    }
}

let mike: User = new Member(1, 'Yepeng Zhang', 'hellolittlewhite@gmail.com', 33)