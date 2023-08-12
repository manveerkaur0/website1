document.addEventListener("DOMContentLoaded", function () {
    const addButtonList = document.querySelectorAll(".item button");
    const cartItem = document.getElementById("cartItem");
    const totalElement = document.getElementById("total");
    const countElement = document.getElementById("count");
  
    let cart = [];
    let total = 0;
  
    addButtonList.forEach((button, index) => {
      button.addEventListener("click", () => {
        const inputElement = document.getElementById(`item${index + 1}`);
        const quantity = parseInt(inputElement.value);
        if (quantity > 0) {
          const priceElement = document.querySelectorAll(".item h6")[index];
          const price = parseFloat(priceElement.textContent.slice(1));
          const subtotal = price * quantity;
  
          const newItem = {
            index: index,
            name: `Item ${index + 1}`,
            quantity: quantity,
            subtotal: subtotal,
          };
  
          cart.push(newItem);
          total += subtotal;
  
          updateCartUI();
        }
      });
    });
  
    function updateCartUI() {
      cartItem.innerHTML = "";
      cart.forEach((item) => {
        cartItem.innerHTML += `<div>${item.name} - Quantity: ${item.quantity}</div>`;
      });
  
      totalElement.textContent = `$ ${total.toFixed(2)}`;
      countElement.textContent = cart.length;
    }
  });
  