import { products } from '../data/products.js'

let inventory=``
console.log('slider script')
let p =products.splice(0, 9)
p.forEach((product)=>{
        inventory+=` <div class="main-slide">
        <div class="product-image-slider">
          <img class="product-image"
            src="${product.image}">
        </div>
    
        <div class="itemname">
          ${product.name}
        </div>
    
     
       
    
          
    
             
            </div> 
    `
})
{/* <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id=${product.id} data-product-price="${(product.priceCents/100).toFixed(2)}" data-product-name="${product.name}" data-product-image="${product.image}">
Add to Cart
</button> */}
{/* <div class="product-rating-container">
<img class="product-rating-stars"
  src="images/ratings/rating-${product.rating.stars *10}.png">
<div class="product-rating-count link-primary">
  ${product.rating.count}
</div>
</div>

<div class="product-price">
$ ${(product.priceCents / 100).toFixed(2)}
</div> */}
let slider=document.querySelector('#slide')
slider.innerHTML=inventory
