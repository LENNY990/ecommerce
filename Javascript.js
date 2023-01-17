
// Create an array to store the products
let products = [
    {
      name: "IPHONE 11",
      description: "This is a sample product",
      price: "$100.00",
      image: "Unknown.png"
    },
    {
      name: "IPHONE 12",
      description: "This is a sample product",
      price: "$200.00",
      image: "Screenshot 2023-01-16 at 11.29.40 PM.png"
    },
    {
      name: "IPHONE 14",
      description: "This is a sample product",
      price: "$300.00",
      image: "Screenshot 2023-01-16 at 11.30.28 PM.png"
    }
  ];
  
  // Create an empty array to store the items in the cart
  let cart = JSON.parse(localStorage.getItem('cart'));
  
  // Create a variable to store the total cost of the items in the cart
  let cartTotal = 0;
  
  // Get the "Add to Cart" buttons
  let addToCartButtons = document.getElementsByClassName("add-to-cart");
  console.log(addToCartButtons)
  // let addToCartButton = document.getElementsById("add-to-cart");

  // Add an event listener to each "Add to Cart" button
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
      // Add the product to the cart
      cart.push(products[i]);
      localStorage.setItem('cart', JSON.stringify(cart))
      // Update the cart total
      cartTotal += parseFloat(products[i].price.slice(1));
      console.log(cart);
      console.log(`Cart total: ${cartTotal}`);
    });
  }

  console.log(cart);

  for (i = 0; i < cart.length; i++) {
    let li = document.createElement('li')
    li.className = 'cart-item'
    let name = document.createElement('p')
    name.appendChild(document.createTextNode(cart[i].name)) 
    li.appendChild(name)
    let description = document.createElement('p')
    description.appendChild(document.createTextNode(cart[i].description)) 
    li.appendChild(description)
    let price = document.createElement('p')
    price.appendChild(document.createTextNode(cart[i].price)) 
    li.appendChild(price)
    let image = document.createElement('p')
    image.innerHTML = `<img src='${cart[i].image}'>`
    li.appendChild(image)
    

    document.getElementById('cart').appendChild(li)
  }