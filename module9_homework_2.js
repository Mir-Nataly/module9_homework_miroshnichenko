/* Задание 2 Модуль 9 */

const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`
 
 let data = JSON.parse(jsonString);
 console.log(data);

/* JSON

{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   } */

/*    Результат

   {
    list: [
      { name: 'Petr', age: 20, prof: 'mechanic' },
      { name: 'Vova', age: 60, prof: 'pilot' },
    ]
  } */