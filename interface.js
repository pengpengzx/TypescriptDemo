/*
 * @Author: Yepeng Zhang
 * @LastEditors: Yepeng Zhang
 */
/*
function showTodo(todo: {title: string,text: string}){
    console.log(`${todo.title}:${todo.text}` )
}
let myTodo = {title: 'trash', text: 'Take out trash'}

showTodo(myTodo);
*/
function showTodo(todo) {
    console.log(todo.title + ":" + todo.text);
}
var myTodo = { title: 'trash', text: 'Take out trash' };
showTodo(myTodo);
