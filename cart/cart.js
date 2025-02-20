
let cartData = JSON.parse(localStorage.getItem("cartdata")) || [];

cartData = cartData.map(item => ({
    ...item,
    quantity: item.quantity || 1,
}));


const cartContainer = document.getElementById("cart-container");
const totalAmountElement = document.getElementById("total-amount");
const totalItemsElement = document.getElementById("total-items");


function updateTotals() {
    const total = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cartData.reduce((count, item) => count + item.quantity, 0);
    totalAmountElement.textContent = total.toFixed(2);
    totalItemsElement.textContent = totalItems;
}


function displayCartItems() {
    cartContainer.innerHTML = "";

    if (cartData.length === 0) {
        cartContainer.innerHTML = `<h2>Your Cart is Empty</h2>`;
        totalAmountElement.textContent = "0.00";
        totalItemsElement.textContent = "0";
        return;
    }

    cartData.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.Image}" alt="${item.name}" />
            <h2>${item.name}</h2>
            <p>Weight: ${item.weight}</p>
            <p>Price per item: ₹${parseFloat(item.price).toFixed(2)}</p>
            <p>Total Price: ₹${(item.price * item.quantity).toFixed(2)}</p>
            <div class="quantity-controls">
                <button class="decrease-quantity" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class="increase-quantity" data-index="${index}">+</button>
            </div>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;

    
        const increaseButton = card.querySelector(".increase-quantity");
        increaseButton.addEventListener("click", () => {
            cartData[index].quantity += 1;
            localStorage.setItem("cartdata", JSON.stringify(cartData));
            displayCartItems();
        });

        
        const decreaseButton = card.querySelector(".decrease-quantity");
        decreaseButton.addEventListener("click", () => {
            if (cartData[index].quantity > 1) {
                cartData[index].quantity -= 1;
            } else {
                const confirmed = confirm("This is the last item. Do you want to remove it?");
                if (confirmed) {
                    cartData.splice(index, 1);
                }
            }
            localStorage.setItem("cartdata", JSON.stringify(cartData));
            displayCartItems();
        });

        
        const removeButton = card.querySelector(".remove-item");
        removeButton.addEventListener("click", () => {
            const confirmed = confirm("Are you sure you want to remove this item?");
            if (confirmed) {
                cartData.splice(index, 1);
                localStorage.setItem("cartdata", JSON.stringify(cartData));
                displayCartItems();
            }
        });

        cartContainer.appendChild(card);
    });

    updateTotals();
}

document.getElementById("buy-now").addEventListener("click", () => {
    if (cartData.length === 0) {
        alert("Your cart is empty. Please add items to your cart to proceed.");
        return;
    }

    
    const userName = prompt("Enter your name:");
    const userPhone = prompt("Enter your phone number:");

    if (!userName || !userPhone) {
        alert("Please enter valid name and phone number.");
        return;
    }


    let orderMessage = `🛒 *New Order Received* \n\n👤 *Name:* ${userName}\n📞 *Phone:* ${userPhone}\n\n📦 *Cart Items:* \n`;

    cartData.forEach((item, index) => {
        orderMessage += `${index + 1}. *${item.name}* - ${item.quantity} x ₹${item.price} = ₹${(item.quantity * item.price).toFixed(2)}\n`;
    });

    const totalAmount = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderMessage += `\n💰 *Total Amount:* ₹${totalAmount.toFixed(2)}`;

    
    const whatsappMessage = encodeURIComponent(orderMessage);
    const whatsappURL = `https://wa.me/+919652180269?text=${whatsappMessage}`;

    
    window.open(whatsappURL, "_blank");

    
    localStorage.removeItem("cartdata");
    cartData = [];
    displayCartItems();
});



displayCartItems();


























