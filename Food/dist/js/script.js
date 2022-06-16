window.addEventListener(`DOMContentLoaded`,() =>{
           
        const tabs = document.querySelectorAll(`.tabheader__item`),
              tabsContent = document.querySelectorAll(`.tabcontent`),
              tabsParent = document.querySelector(`.tabheader__items`);  // определяем переменные из HTML
         
        function hideTabContent()  {
            tabsContent.forEach(item => {
                  // item.style.display = `none`;  // скрыли элементы tabsContent  - bpyfxfkmyj
                  item.classList.add(`hide`);
                  item.classList.remove(`show`); // один класс добавляем, другой - удаляем
                  // toggle  не добавляется, что бы не было путаницы
            });
            tabs.forEach(item => {
                item.classList.remove(`tabheader__item_active`);  // удалили элементы tabsContent
         });
        }  
        
        function showTabContent(i = 0)  { // задаем по умолчанию запуск с 1 элемента
             // tabsContent [i].style.display = ``;  // показали элементы tabsContent - первоначальный вариант
             tabsContent [i].classList.add(`show`);
             tabsContent [i].classList.remove(`hide`);
             tabs[i].classList.add(`tabheader__item_active`);  // дописали элементы tabsContent
           }
  
           hideTabContent();
           showTabContent(); // вызов фуий
           
           tabsParent.addEventListener(`click`, (e) => { // обработчик события 
                      const target = e.target;  // техн. переменная, что бы не писать e.target порстоянно
                      if (target && target.classList.contains(`tabheader__item`)) { // если цель имеет tabheader__item
                            tabs.forEach((item,i) =>{  // перебираем массив элементов
                                   if (target == item){  // цель - это элемент
                                          hideTabContent();
                                          showTabContent(i);   // запускаем фуии, при этом на эл-те i  запускаем показ
                                   }
                            });

                      }
           });









});