// window.sayHello = sayHello;
/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    alert("Hello!");
}
document.getElementById('button1').addEventListener('click', sayHello);