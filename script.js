music.volume = 0.5;
var num = 50;


// Функция для добавления обработчика событий
 function addHandler(object, event, handler) {
   if (object.addEventListener) {
     object.addEventListener(event, handler, false);
   }
   else if (object.attachEvent) {
     object.attachEvent('on' + event, handler);
   }
   else alert("Обработчик не поддерживается");
 }
 // Добавляем обработчики для разных браузеров
 addHandler(window, 'DOMMouseScroll', wheel);
 addHandler(window, 'mousewheel', wheel);
 addHandler(document, 'mousewheel', wheel);
 // Функция, обрабатывающая событие
 function wheel(event) {
   var delta; // Направление колёсика мыши
   event = event || window.event;
   // Opera и IE работают со свойством wheelDelta
   if (event.wheelDelta) { // В Opera и IE
     delta = event.wheelDelta / 120;
     // В Опере значение wheelDelta такое же, но с противоположным знаком
     if (window.opera) delta = -delta; // Дополнительно для Opera
   }
   else if (event.detail) { // Для Gecko
     delta = -event.detail / 3;
   }
   // Запрещаем обработку события браузером по умолчанию
   if (event.preventDefault) event.preventDefault();
   event.returnValue = false;

   if (delta > 0) {
     music.volume += 0.02;
     num += 2;
   } else {
     music.volume -= 0.02;
    num -= 2;
   } ;
   document.getElementById("volume").textContent = num;
 }

 const audio = new Audio("https://myradio24.org/phora");
 const buttons = document.querySelectorAll("div");

 buttons.forEach(button => {
   button.addEventListener("click", () => {
     audio.play();
  });
});
