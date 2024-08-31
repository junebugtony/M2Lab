/**
 * This function returns an alert containing 'hello'
 * @return {alert} hello
 */
export function sayHello() {
    alert("Hello!");
}
document.getElementById('button1').addEventListener('click', sayHello);