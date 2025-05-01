  function addToCart(button, name, price) {

      const qtyElement = button.parentElement.querySelector('.d');
      const quantity = parseInt(qtyElement?.innerText) || 1; 
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const index = cart.findIndex(item => item.name === name);

      if (index !== -1) {
        cart[index].quantity += quantity;
      }else {
        cart.push({name, price, quantity });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert('x' + quantity + " " + name + ' added to cart for ' + (price * quantity)+ ' EGP ✅');
      qtyElement.innerText = 1;
  }
