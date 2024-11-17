
let horizintScroll = document.querySelector('.cards');
let leftBtn = document.getElementById('leftbtn')
let rightBtn = document.getElementById('rightbtn')
rightBtn.addEventListener('click',()=>{
  horizintScroll.scrollLeft +=300
});
leftBtn.addEventListener('click',()=>{
    horizintScroll.scrollLeft -=300
  });
