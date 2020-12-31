let addToCartBtn = document.querySelector('#addToCart');


addToCartBtn.addEventListener('click', function(){
    let number = 1;
    let random = Math.floor(Math.random()*60);
    let numberAmount = random*number;
// text and buttons

    let input = document.querySelector('#input').value;
    let newText = document.createElement('h2');
    newText.innerHTML = input;
    let amount = document.createElement('h2');
    amount.classList.add('amount');
    amount.innerText= number;
    let price = document.createElement('h2');
    price.classList.add('price');
    price.innerText=' $ '+''+ numberAmount;
    let delBtn = document.createElement('button');
    delBtn.classList.add('btn','delete');
    let substractBtn = document.createElement('button');
    substractBtn.classList.add('btn');
    let addBtn = document.createElement('button');
    addBtn.classList.add('btn','add');

    delBtn.innerHTML='Delete';
    substractBtn.innerHTML='-';
    addBtn.innerHTML='+';

// Divs

   let textBox = document.createElement('div');
   textBox.classList.add('box');
   textBox.appendChild(newText);
   
   let changeBox =  document.createElement('div');
   changeBox.classList.add('box','change-box');
   changeBox.append(substractBtn,amount,addBtn);

   let priceBox = document.createElement('div');
   priceBox.classList.add('box','price-box');
   priceBox.append(price);

   let deleteBox = document.createElement('div');
   deleteBox.classList.add('box','delete-box');
   deleteBox.append(delBtn);

   let container = document.createElement('div');
   container.classList.add('container');
   container.append(textBox,priceBox,changeBox,deleteBox)
   document.querySelector('.area').append(container);

// adding events to buttons

substractBtn.addEventListener('click', decrement =>{
    if(number > 1){
        number--;
    }
    
    amount.innerHTML=number;
    price.innerHTML=' $ '+''+ numberAmount*number;
})

addBtn.addEventListener('click',increment =>{
    
    if(number >= 1){
        number++;
    }
    amount.innerHTML=number;
    price.innerHTML=' $ '+''+ number*numberAmount;
})

// adding events to div to delete

container.addEventListener('click', function(e){
   let remove = e.target;
   
   if(remove.innerHTML === 'Delete'){
       container.remove();
       
   }
})
document.querySelector('#input').value ='';

})

 