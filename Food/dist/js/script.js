window.addEventListener(`DOMContentLoaded`,() =>{
           
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









});