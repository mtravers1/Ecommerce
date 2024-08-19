import { removerItem, cart, addToCart } from "../data/cart.js";
import { deliveryOption } from "../data/deliveryOption.js";
import { products } from "../data/products.js";
import  {format} from "../scripts/utils/money.js"
import daysjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
let cartHTML=''
// console.log("hello")
let deliveryOptionHTML=(matchingitem)=>{
    let dhtml=''

    deliveryOption.forEach((d)=>{
        const today=daysjs();
        const deliverDate=today.add(
            d.deliveryDays,
            'days'
        )
        const dateString = deliverDate.format('dddd, MMMM D')

        const priceString = d.priceCents===0?'Free':`${format(d.priceCents)}`
         dhtml+=
        `<div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchingitem.productId}>
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping
            </div>
          </div>
        </div>`
    })
    return dhtml
}

cart.forEach((cartItem)=>{
    const productId=cartItem.productId
    let matchingitem;

    products.forEach((prod)=>{
        // console.log(prod)
        if(productId===prod.id){
            matchingitem=prod
        }
    
    })
            cartHTML+=
            `
            <div class="cart-item-container js-cart-item-container-${matchingitem.productId} ">
            <div class="delivery-date js-delivery-date">
              Delivery date: Tuesday, June 21
            </div>
        
            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingitem.image}">
        
              <div class="cart-item-details">
                <div class="product-name">
                ${matchingitem.name}
                </div>
                <div class="product-price">
                  $${format(matchingitem.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity:${matchingitem.quantity} <span class="quantity-label">2</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-quantity-link data-product-${matchingitem.productId}">
                    Delete
                  </span>
                </div>
              </div>
        
              <div class="delivery-options">
                
                ${deliveryOptionHTML(matchingitem)}
              </div>
            </div>
          </div>
         <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$42.75</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$4.99</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$47.74</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$4.77</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$52.51</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>
      </div>
          `
        

})

// let deliveryOptionHTML=(matchingitem)=>{
//     let dhtml=''

//     deliveryOption.forEach((d)=>{
//         const today=daysjs();
//         const deliverDate=today.add(
//             d.deliveryDays,
//             'days'
//         )
//         const dateString = deliverDate.format('dddd, MMMM D')

//         const priceString = d.priceCents===0?'Free':`${format(d.priceCents)}`
//          dhtml+=
//         `<div class="delivery-options">
//         <div class="delivery-options-title">
//           Choose a delivery option:
//         </div>
//         <div class="delivery-option">
//           <input type="radio" checked
//             class="delivery-option-input"
//             name="delivery-option-${matchingitem.productId}>
//           <div>
//             <div class="delivery-option-date">
//               ${dateString}
//             </div>
//             <div class="delivery-option-price">
//               ${priceString} Shipping
//             </div>
//           </div>
//         </div>`
//     })
//     return dhtml
// }




document.querySelector('.js-order-summary').innerHTML=cartHTML

document.querySelectorAll('.js-delete-quantity-link').forEach((link)=>{
    link.addEventListener('click', ()=>{
        const productId=link.dataset.productId
       removerItem(productId)
      const container=  document.querySelector(`.js-cart-item-container-${productId}`)
       console.log(container)
       container.remove()
    })
})
const today=daysjs();

const deliver=today.add(7,'day')
console.log(deliver.format('dddd, MMMM D'))
