// Retrieve cart data from localStorage
let cartData = JSON.parse(localStorage.getItem("cartdata")) || [];

// Ensure every item has a quantity property
cartData = cartData.map(item => ({
    ...item,
    quantity: item.quantity || 1, // Default to 1 if quantity is not defined
}));

// Select elements
const cartContainer = document.getElementById("cart-container");
const totalAmountElement = document.getElementById("total-amount");
const totalItemsElement = document.getElementById("total-items");

// Update total amount and item count
function updateTotals() {
    const total = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cartData.reduce((count, item) => count + item.quantity, 0);
    totalAmountElement.textContent = total.toFixed(2);
    totalItemsElement.textContent = totalItems;
}

// Display cart items
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

        // Increase quantity button
        const increaseButton = card.querySelector(".increase-quantity");
        increaseButton.addEventListener("click", () => {
            cartData[index].quantity += 1;
            localStorage.setItem("cartdata", JSON.stringify(cartData));
            displayCartItems();
        });

        // Decrease quantity button
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

        // Remove item button
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
// "Buy Now" functionality
document.getElementById("buy-now").addEventListener("click", () => {
    if (cartData.length === 0) {
        // Notify user to add items to the cart
        alert("Your cart is empty. Please add items to your cart to proceed with the purchase.");
        return; // Prevent further action
    }

    // Calculate the total amount
    const totalAmount = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Confirm with the user before proceeding
    const userConfirmed = confirm(`The total amount is ₹${totalAmount.toFixed(2)}. Do you want to proceed?`);
    if (userConfirmed) {
        // Save total amount in localStorage and redirect to address page
        localStorage.setItem("cartTotal", JSON.stringify(totalAmount));
        window.location.href = "address.html"; // Redirect to the address page
    }
});
displayCartItems();


























