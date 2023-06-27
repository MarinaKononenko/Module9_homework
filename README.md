# Module9_homework
Module9_homework
# Задание 1

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

XML:

```xml
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
```

JS-объект:

```javascript
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}
```

# Задание 2

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

JSON:

```json
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
}
```

JS-объект:

```javascript
{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
}
```
# Задание 3

Напишите код приложения, интерфейс которого представляет собой `input` и кнопку. В `input` можно ввести любое число. При клике на кнопку происходит следующее:

- Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
- Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL `https://picsum.photos/v2/list?limit=10`, где GET-параметр `limit` — это введённое число.

Пример. Если пользователь ввёл 5, то запрос будет вида: `https://picsum.photos/v2/list?limit=5`.

После получения данных вывести ниже картинки на экран.

# Задание 4

Напишите код приложения, интерфейс которого представляет собой 2 `input` и кнопку `submit`. В `input` можно ввести любое число.

При клике на кнопку происходит следующее:

- Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
- Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью `fetch` по URL `https://picsum.photos/200/300`, где первое число — ширина картинки, второе — высота.

Пример. Если пользователь ввёл 150 и 200, то запрос будет вида `https://picsum.photos/150/200`.

После получения данных вывести ниже картинку на экран.


# Задание 5

Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».

Заголовок второго input — «лимит».

Заголовок кнопки — «запрос».

При клике на кнопку происходит следующее:

- Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
- Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
- Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
- Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL `https://picsum.photos/v2/list?page=1&limit=10`, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.

Пример. Если пользователь ввёл 5 и 7, то запрос будет вида `https://picsum.photos/v2/list?page=5&limit=7`.

После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать `localStorage`).



# Task 1

You are given a template and the result that you should get. Your task is to write the code that will convert XML to a JS object and output it to the console.

XML:

```xml
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
```

JS object:

```javascript
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}
```


# Task 2

You are given a template and the result that you should get. Your task is to write the code that will convert JSON to a JS object and output it to the console.

JSON:

```json
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
}
```

JS object:

```javascript
{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
}
```

# Task 3

Write the code for an application that consists of an `input` field and a button. Any number can be entered into the `input` field. When the button is clicked, the following should happen:

- If the number is not in the range from 1 to 10, display the text "number is out of range from 1 to 10" below.
- If the number is in the range from 1 to 10, send a request using XHR to the URL `https://picsum.photos/v2/list?limit=10` where the GET parameter `limit` is the entered number.

Example. If the user entered 5, the request will be in the form of: `https://picsum.photos/v2/list?limit=5`.

After receiving the data, display the images below.

# Task 4

Write the code for an application that consists of 2 `input` fields and a `submit` button. Any number can be entered into the `input` fields.

When the button is clicked, the following should happen:

- If both numbers are not in the range from 100 to 300 or if a non-number is entered, display the text "one of the numbers is out of range from 100 to 300" below.
- If the numbers are in the range from 100 to 300, send a request using `fetch` to the URL `https://picsum.photos/200/300`, where the first number is the width of the image and the second is the height.

Example. If the user entered 150 and 200, the request will be in the form of `https://picsum.photos/150/200`.

After receiving the data, display the image below.

# Task 5

Write the code for an application that consists of two `input` fields and a button. Any number can be entered into the `input` fields.

The title of the first `input` field is "page number".

The title of the second `input` field is "limit".

The title of the button is "request".

When the button is clicked, the following should happen:

- If the number in the first `input` field is not in the range from 1 to 10 or is not a number, display the text "Page number is out of range from 1 to 10" below.
- If the number in the second `input` field is not in the range from 1 to 10 or is not a number, display the text "Limit is out of range from 1 to 10" below.
- If both the first and second `input` fields are not in the range or are not numbers, display the text "Page number and limit are out of range from 1 to 10" below.
- If the numbers are in the range from 1 to 10, send a request to the URL `https://picsum.photos/v2/list?page=1&limit=10`, where the GET parameter `page` is the number from the first
