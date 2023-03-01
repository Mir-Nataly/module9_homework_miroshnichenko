/* Задание 3 Модуль 9 */

/* Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести
 любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по 
URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.
После получения данных вывести ниже картинки на экран.

Подсказка

Получение данных из input:

const value = document.querySelector('input').value; */

const btn = document.querySelector(".btn");
let value = 0;

const inpNode = document.getElementById("message");
const input = document.querySelector('input');
const imgWrapper = document.querySelector("#download_pics");

let images = [];

btn.addEventListener('click', () => {
    value = +input.value;
    sendXHR(value);
    input.value = "";
});

input.addEventListener('input', () => {
   inpNode.innerHTML = "";
});

function sendXHR(value) {
    if(value>=1&&value<=10){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://picsum.photos/v2/list?limit=${value}`, true);
        
        xhr.send();
        xhr.onload = function() {
            
            if (xhr.status = 200) {
                let imgList = JSON.parse(xhr.response);
            initImages(imgList);
            }
        };    
    }
    else {
        inpNode.innerHTML = "Число вне диапазона";
    }  
}

function initImages(imgList) {
    let collectionHtml = ''
    for(let i=0; i<imgList.length; i++){
        let url = imgList[i].download_url;
        collectionHtml += `<div style="background-image: url(${url})" class= "d_pics"></div>`;
    }
    imgWrapper.innerHTML = collectionHtml;
};
