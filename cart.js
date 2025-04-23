function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
      cart[index].quantity++;
    }else {
      cart.push({name, price, quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }