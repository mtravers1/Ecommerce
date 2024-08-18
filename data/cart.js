export let cart=[{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:1
},
{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1
}]

export const addToCart=(productId)=>{
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
        // productName:productName,
        // productImage:productImage,
        // productPrice:productPrice,
        quantity:1
      })
     }
  
  }
  

  export let removerItem=(productId)=>{
        let newCart=[]

        cart.forEach((i)=>{
            if(i.productId !== productId){
                newCart.push(i)
            }
        })
        cart=newCart
  }