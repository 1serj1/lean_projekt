window.addEventListener(`DOMContentLoaded`,() =>{
           
        const tabs = document.querySelectorAll(`.tabheader__item`),
              tabsContent = document.querySelectorAll(`.tabcontent`),
              tabsParent = document.querySelector(`.tabheader__items`);  // определяем переменные из HTML
         
        function hideTabContent()  {
            tabsContent.forEach(item => {
                   item.style.display = `none`;  // скрыли элементы tabsContent
            });
            tabs.forEach(item => {
                item.classList.remove(`tabheader__item_active`);  // скрыли элементы tabsContent
         });
        }  
        




});