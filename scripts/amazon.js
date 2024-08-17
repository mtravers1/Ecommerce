import {cart} from '../data/cart'
import { products } from '../data/products'
// let product = [{
//     image:'images/products/intermediate-composite-basketball.jpg',
//     name:'Intermediate Size Basketball'
//     rating:{
//         stars:4,
//         count:127
//     },
//     price:2095
// },{
//     image:'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name:'  Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating:{
//         stars:4.5,
//         count:87
//     },
//     price:1090
// },{
//     image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name:'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating:{
//         stars:4.5,
//         count:56
//     },
//     price:799
// }
// ]


let productHTML=''
products.forEach((product)=>{
    productHTML+=` <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars *10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $ ${(product.priceCents / 100).toFixed(2)}
    </div>
    <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id=${product.id} data-product-price="${(product.priceCents/100).toFixed(2)}" data-product-name="${product.name}" data-product-image="${product.image}">
            Add to Cart
          </button>
        </div> 
`
})

document.querySelector('.js-products-grid').innerHTML=productHTML;

document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>{
  button.addEventListener('click', ()=>{
    const productPrice=button.dataset.productPrice
    const productName=button.dataset.productName;
    const productImage=button.dataset.productImage;
    const productId=button.dataset.productId
    let matchingitem
   cart.forEach((c)=>{
    if(c.productId===productId){
    matchingitem =c
    }
   })
   if(matchingitem){
    matchingitem.quantity+=1
   }else{
    cart.push({
      productId:productId,
      productName:productName,
      productImage:productImage,
      productPrice:productPrice,
      quantity:1
    })
   }
   let sum=0
   cart.forEach((i)=>{
    
     sum+=i.quantity
    
   })
   document.querySelector('.js-cart-quantity').innerHTML=sum
   console.log(sum)
  });

  
})