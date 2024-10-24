let productsHTML = ''; //sabke liye ek html generate hoga iske pehle console me har product ke liye pura alag html generate hora tha
//line 32 ki wajah se teeno ek saath combine hojaayenge
products.forEach((product) => {
    productsHTML += ` 
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)} 
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

          <button class="add-to-cart-button button-primary js-add-to-cart" 
           data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>
    `;
});

 //using dom to take the above html and put it on the page instead of console

document.querySelector('.js-products-grid').
  innerHTML = productsHTML;//isse new product add hoga toh usme sab kuch already rahega grid ke ander 
  //and now we dont need the html code which already present in the js file except for the classes
document.querySelectorAll('.js-add-to-cart')
  .forEach( (button)=> {
    button.addEventListener('click', ()=>{
      const productId = button.dataset.productId;

      let matchingItem;

      cart.forEach((item)=> {
        if(productId === item.productId){
          matchingItem = item;
        }
      });

      if (matchingItem){
        matchingItem.quantity += 1;
      }
      else{
        cart.push({
          productId: productId,
          quantity: 1
        });
      };

       console.log(cart);
    });
  });