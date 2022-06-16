window.addEventListener(`DOMContentLoaded`,() =>{
           
        const tabs = document.querySelectorAll(`.tabheader__item`),
              tabsContent = document.querySelectorAll(`.tabcontent`),
              tabsParent = document.querySelector(`.tabheader__items`);  // определяем переменные из HTML
         
        function hideTabContent()  {
            tabsContent.forEach(item => {
                   item.style.display = `none`;  // скрыли элементы tabsContent
            });
            tabs.forEach(item => {
                item.classList.remove(`tabheader__item_active`);  // удалили элементы tabsContent
         });
        }  
        
        function showTabContent(i = 0)  { // задаем по умолчанию запуск с 1 элемента
              tabsContent [i].style.display = ``;  // показали элементы tabsContent
              tabs[i].classList.add(`tabheader__item_active`);  // дописали элементы tabsContent
           }
  
           hideTabContent();
           showTabContent(); // вызов фуий
           
           tabsParent.addEventListener(`click`, (e) => { // обработчик события 
                      const target = e.target;  // техн. переменная, что бы не писать e.target порстоянно
                      if (target && target.classList.contains(`tabheader__item`) )
           })









});