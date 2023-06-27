// Создаем новый объект XMLHttpRequest
const xhr = new XMLHttpRequest();

// Открываем соединение и указываем путь к XML-файлу
xhr.open('GET', 'file.xml');

// Устанавливаем тип ответа в XML
xhr.responseType = 'document';

// Обработчик события загрузки
xhr.onload = function() {
  // Получаем XML-документ из ответа
  const xml = xhr.responseXML;

  // Получаем все элементы student
  const students = xml.querySelectorAll('student');

  // Создаем массив объектов на основе элементов student
  const result = {
    list: []
  };
  students.forEach(function(student) {
    const name = student.querySelector('name');
    const first = name.querySelector('first').textContent;
    const second = name.querySelector('second').textContent;
    const lang = name.getAttribute('lang');
    const age = Number(student.querySelector('age').textContent);
    const prof = student.querySelector('prof').textContent;

    result.list.push({
      name: `${first} ${second}`,
      age: age,
      prof: prof,
      lang: lang
    });
  });

  // Выводим результат в консоль
  console.log(result);
};

// Отправляем запрос
xhr.send();