let viewBtn = document.querySelectorAll('.info-btn');
let cancelBtn = document.querySelectorAll('.cancel-btn');
let popup = document.querySelector('.popup-con');

viewBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        popup.classList.remove('d-none');
    })
})

cancelBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        popup.classList.add('d-none');
    })
})