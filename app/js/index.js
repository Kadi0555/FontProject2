const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed:500,
    effect:'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard:true
  });
  
let x = document.body.querySelector('.swiper');
const bd = document.body;

function next(event){
  if (event.target.className == 'img'){
    document.body.querySelector('.swiper-button-next').style.cssText = `
      transition:all 0.5s ease-in-out 0s;
      opacity:1;
    `
    document.body.querySelector('.swiper-button-prev').style.cssText = `
      transition:all 0.5s ease-in-out 0s;
      opacity:1;
    `
  }else if(event.target.className == 'swiper-button-next'){
    document.body.querySelector('.swiper-button-next').style.cssText = `
      opacity:1;
    `
    document.body.querySelector('.swiper-button-prev').style.cssText = `
      opacity:1;
    `
  }else if(event.target.className == 'swiper-button-prev'){
    document.body.querySelector('.swiper-button-next').style.cssText = `
      opacity:1;
    `
    document.body.querySelector('.swiper-button-prev').style.cssText = `
      opacity:1;
    `
  }else{
    document.body.querySelector('.swiper-button-next').style.cssText = `
      opacity:0;
    `
    document.body.querySelector('.swiper-button-prev').style.cssText = `
      opacity:0;
    `
  }

}
x.addEventListener('mouseover',next)
bd.addEventListener('mouseover',next)