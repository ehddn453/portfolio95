const elHeader = document.querySelector('header'),
      elBurgerBtn = document.querySelector('.burger'),
      elHeadBurger = document.querySelector('.burger_menu'),
      elBurgerNav = document.querySelector('.burger_menu nav'),
      elColorAll = document.querySelector('.colorAll');

elBurgerBtn.addEventListener('click',function(){
    elHeader.classList.toggle('active');
    elHeadBurger.classList.toggle('active');
    setTimeout(function(){
        elColorAll.classList.toggle('active');
        elBurgerNav.classList.toggle('active');
    },1000);
});

