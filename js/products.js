// popup content
let prodImg = document.querySelector('.prod-image');
let prodInfo = document.querySelector('.product-popup-info');
let prodName = document.querySelector('.prod-name');

let prodDetails = [
    ['prod1', 'Basita Diamond Satin', 'images/products/diamond-satin.png', 'BASITA DIAMOND SPIRIT SATIN is an acrylic paint and primer that contains an antimicrobial agent to protect the surface of the paint. It contains a significant quantity of talcum. It can be used for interior walls.\n\n Each 24 litre bucket covers more than 120 square meters, 12 litres covers up to 65 square meters, and 5 litres covers up to 30 square meters.'],
    ['prod2', 'Basita Silver Spirit Satin Matt', 'images/products/sliver-satin.png', 'BASITA SILVER SPIRIT SATIN MATT in an interior matte paint. The anti-microbial, mildew-resistant finish has excellent durability, washability and stain resistance. It contains a significant quantity of talcum. It can be used for interior and exterior walls.\n\n Each 24 litres covers more than 120 square meters, 12 litres covers up to 65 square meters, and 5 litres covers up to 30 square meters.']
]

let viewBtn = document.querySelectorAll('.info-btn');
let cancelBtn = document.querySelectorAll('.cancel-btn');
let popup = document.querySelector('.popup-con');

viewBtn.forEach((btn)=>{

    btn.addEventListener(('click'), (e)=>{
        prodDetails.forEach((prod)=>{
            if (e.target.id == prod[0]) {
                prodName.textContent = prod[1];
                prodImg.src = prod[2];
                prodInfo.textContent = prod[3];
            }

            popup.classList.remove('d-none');

            popupItem = popup.querySelector('.product-popup');

            popupItem.animate([
                { opacity: '0' }, { opacity: '1' }
                ],
              {
                duration: 400,
              })
        })
    })
})

cancelBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        popup.classList.add('d-none');
    })
})
