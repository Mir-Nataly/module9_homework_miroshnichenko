/* Задание 5 Модуль 9 */


/* Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст
 «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст
 «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы
 и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по 
URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, 
а GET-параметр limit — это введённое число второго input.
Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно 
выполненного запроса (использовать localStorage). */


const btn = document.querySelector('.btn-request');
let sun = document.getElementById('res');

btn.addEventListener('click', () => {
    const page = +document.getElementById('input1').value;
    const limit = +document.getElementById('input2').value;

    
    sun.textContent = '';
 
  let nomerError = 0;
  let limitError = 0;
 
    if (!(page >= 1 && page <= 10)) {
        nomerError = 'Номер страницы вне диапазона от 1 до 10';      
    }
 
  if (!(limit >= 1 && limit <= 10)) {
       limitError = 'Лимит вне диапазона от 1 до 10';       
    }
  if(limitError !=0)
  {
    sun.textContent = "Лимит вне диапазона от 1 до 10";   
  } 
  if(nomerError !=0)
  {
    sun.textContent = 'Номер страницы вне диапазона от 1 до 10';     
  }
 
  if(nomerError != 0 && limitError != 0)
  {
    sun.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';   
  }
   
  if(nomerError == 0 && limitError == 0)
  {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      .then((response) => {     
        return response.json();
      })
      .then((data) => {
       
        let res = document.querySelector('#result');
      for(i=0;i<data.length;i++)
      {  
          console.log(data[i].download_url);
        sun.innerHTML += "<img src =' " + data[i].download_url + " '> " + '<br>';
      }
      console.log(data);
      localStorage.setItem('url', JSON.stringifly(data));
    });
  } 
});