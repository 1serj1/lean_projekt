window.addEventListener(`DOMContentLoaded`,() =>{
   // ТАБЫ       
        const tabs = document.querySelectorAll(`.tabheader__item`),
              tabsContent = document.querySelectorAll(`.tabcontent`),
              tabsParent = document.querySelector(`.tabheader__items`);  // определяем переменные из HTML
         
        function hideTabContent()  {
            tabsContent.forEach(item => {  // перебираем элементы в объекте   tabsContent = document.querySelectorAll(`.tabcontent`),
                  // item.style.display = `none`;  //  исключили элементы tabsContent  
                  item.classList.add(`hide`); // добавили класс элементов hide - удалено (из выдачи браузера)
                  item.classList.remove(`show`,`fade`); // один класс добавляем, другой - удаляем
                  // toggle  не добавляется, что бы не было путаницы
                   //fade - класс CSS, отвечающий за анимацию.
            });
            tabs.forEach(item => {
                item.classList.remove(`tabheader__item_active`);  // удалили элемент `tabheader__item_active` в  tabsContent
         });
        }  
        // как итог убрали элементы с классом CSS .hide
        function showTabContent(i = 0)  { // задаем по умолчанию запуск с 1 элемента
             // tabsContent [i].style.display = ``;  // показали элементы tabsContent - первоначальный вариант
             tabsContent [i].classList.add(`show`,`fade`); // в итом элемете массива tabsContent = document.querySelectorAll(`.tabcontent`), добавляем класс show и fade
             tabsContent [i].classList.remove(`hide`);// в итом элемете массива tabsContent = document.querySelectorAll(`.tabcontent`), удаляем класс hide
             tabs[i].classList.add(`tabheader__item_active`);  // дописали элементы tabsContent в итый элемент
           }
  
           hideTabContent();
           showTabContent(); // вызов фуий
         
           tabsParent.addEventListener(`click`, (e) => { // обработчик события 
                      const target = e.target;  // техн. переменная, что бы не писать e.target порстоянно
                      if (target && target.classList.contains(`tabheader__item`)) { // если цель клика  имеет tabheader__item
                            tabs.forEach((item,i) =>{  // перебираем массив элементов числом i
                                   if (target == item){  // цель - это элемент
                                          hideTabContent();
                                          showTabContent(i);   // запускаем фуии, при этом на эл-те i  запускаем показ
                                   }
                            });

                      }
           });


// ВАЖНО!!! Создание таймера. План:
// 1. Фия таймера
// 2. Фия считающая дедлайн
// 3. Фия обновления таймера


// 1. Фия таймера
const deadLine = `2022-08-23`; // создаем дату - точка отсчета
// формат страки в таком виде, ибо так выдает бэкенд, может приходить динамически с панели администратора 

//фуя считающая разницу мезду дедлайном и текущим  временем 
// 2. Фия считающая дедлайн
function getTimerRemainihg(endtime) {
       const t = Date.parse(endtime) - Date.parse(new Date()),
       // преобразуем в миллисекунды и получаем разницу
             days = Math.floor (t/(1000*60*60*24)), 
       // Math.floor - округлили, t  - всего милисекунд, 1000*60*60*24 - сколько милисекунд в сутках
             hours =  Math.floor ((t/(1000*60*60)%24)),
       // также , но в часах, %24 - возвращает остаток от суток, что бы не было 67 часов в счетчике 
             minutes =  Math.floor ((t/1000/60)%60),
             seconds =  Math.floor ((t/1000)%60);

             // т.к. переменные внутри фуии, для их использования возвращаем объект
       return {
              "total": t,
              "days":  days,
              "hours": hours,
              "minutes": minutes,
              "seconds": seconds 
       };
}

// если число из одной цифры - приписываем  0 вначале
function getZero (num) {
         if (num >= 0 && num < 10) { 
// num >= 0 проверка на отриц. число - на всякий случай
              return `0${num}`;
// если цифра одна - дописываем 0 
         } else {
              return num;
// если нет - пишем ее
         }

}



// 3. Фия обновления таймера
function setClock(selector, endtime) {
       const timer = document.querySelector(selector), // с каким HTML
              days = document.querySelector(`#days`), 
              hours = document.querySelector(`#hours`), 
              minutes = document.querySelector(`#minutes`), 
              seconds = document.querySelector(`#seconds`),
              timyInterval = setInterval(updateClouck,1000); // перезапуск фии updateClouck каждую секунду

              updateClouck(); // запуск с открытия - что бы не моргало

       function updateClouck(){
                 const t = getTimerRemainihg(endtime); // задействуем фую выше, используя ее итоговый объект
        
                 // первоначальный вариант, без дописывания нуля 
              //    days.innerHTML = t.days;
              //    hours.innerHTML = t.hours;
              //    minutes.innerHTML = t. minutes;
              //    seconds.innerHTML = t.seconds;


              // с дописанным нулем 
                 days.innerHTML = getZero(t.days);
                 hours.innerHTML = getZero(t.hours);
                 minutes.innerHTML = getZero(t. minutes);
                 seconds.innerHTML = getZero(t.seconds);


                 if (t.total <= 0) {  // если время кончилось - отключить перезапуск
                      clearInterval( timyInterval);
                 }
       }    
}

setClock (`.timer`, deadLine);

//  ВАЖНО!!! Работа с окном юзера: вызов и т.п.   MODAL


// первоначальный вариант


// const  modalTrigger = document.querySelector(`[data-modal]`), // [data-modal] = первый элементс этим атрибутом
//         modal = document.querySelector(`.modal`),
//         modalCloseBtn  = document.querySelector(`[data-close]`);


        // выбираем элементы


       //  modalTrigger.addEventListener(`click`, () => {
       //        modal.classList.add(`show`);
       //        modal.classList.remove(`hide`);
       //        // по клику добавляем или удаляем элементы
       //        document.body.style.overflow = `hidden`;
       //        // добавляем CSS стиль hidden, запрещающий прокрутку неактивировангных элементов
       //        // overflow: hidden  Контент обрезается, без предоставления прокрутки
       //         // hidden - спрятанный,hide - прятать
       
       // });



       // modalCloseBtn.addEventListener(`click`, () => {
       //        modal.classList.add(`hide`);
       //        modal.classList.remove(`show`);
       //  });
// по клику добавляем или удаляем элементы наоборот
// не работает с CSS  display: "" - только с display: block


// ПОТОМ
const  modalTrigger = document.querySelectorAll(`[data-modal]`), // [data-modal] = все элементы с этим атрибутом
        modal = document.querySelector(`.modal`),
        modalCloseBtn  = document.querySelector(`[data-close]`);

        modalTrigger.forEach(btn => {
              // цикл переборав кнопок
              btn.addEventListener(`click`, () => {
                     //        // по клику добавляем или удаляем элементы
                     modal.classList.toggle(`show`);
                     // если есть - добавляем, если нет - удаляем
                     document.body.style.overflow = `hidden`;  
              });
          
       });

       // ВАЖНО!!! Что бы не плодить одинаковый код, повторяющую часть делаем функцией
       
       function closeModal () {
              modal.classList.toggle(`show`);
              document.body.style.overflow = ``;  
       }

       modalCloseBtn.addEventListener(`click`, closeModal);
       // используем closeModal  после клика
       
        // если юзер просто кликнул на странице
        modal.addEventListener(`click`, (e) => {
              // если е событие произошло на modal элементе
              //  е событие ОБЯЗАТЕЛЬНО задавать (e), если нет - это фуууу, но может работать, но не везде
              if (e.target ===  modal)
              closeModal ();
               // вызываем closeModal  после клика И УСЛОВИЯ
        });
   

        //ВАЖНО!!!  если нажать Escape - отключение модалок, список названий клавиш - в поисковике
        document.addEventListener(`keydown`, (e) => { 
              if (e.code ===  "Escape" &&  modal.classList.contains(`show`)){
              // &&  - и!  modal.classList.contains(`show`) - окно открыто
              closeModal ();
               // вызываем closeModal  после клика И УСЛОВИЯ
              }
        });







});