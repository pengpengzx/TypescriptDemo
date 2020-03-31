/*
 * @Author: Yepeng Zhang
 * @LastEditors: Yepeng Zhang
 */
let myString: string;
let myNum: number;
let myBoolean: boolean;
let myVar: any;

/*
let strArr : string[];
let numberArr : number[];
let boolArr: boolean[];
let anyArr: any[];
 */
let strArr: Array<string>;
let numberArr: Array<number>;
let anyArr: Array<any>;
let boolArr: Array<any>;

let strNumTuple: [string, number];

myString = 'Hello World';
myNum = 5;
myBoolean = false;
myVar = true;

strArr = ['Hello', 'World'];
numberArr = [1, 2, 3];
boolArr = [true, false, false]
anyArr = ['hello', 1, true];

strNumTuple = ['123', 123]
console.log(strArr);