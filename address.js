// Retrieve total amount from localStorage
const totalAmount = JSON.parse(localStorage.getItem("cartTotal")) || 0;

// Form submission handler
const form = document.getElementById("address-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const area = document.getElementById("area").value.trim();
    const landmark = document.getElementById("landmark").value.trim();
    const district = document.getElementById("district").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const state = document.getElementById("state").value.trim();

    if (!name || !phone || !area || !landmark || !district || !pincode || !state) {
        alert("Please fill in all the details.");
        return;
    }

    // Save the address in localStorage
    const userAddress = { name, phone, area, landmark, district, pincode, state };
    localStorage.setItem("userAddress", JSON.stringify(userAddress));

    // Show payment method options
    document.body.innerHTML = `
        <h1>Select Payment Method</h1>
        <p>Total Amount: ₹${totalAmount}</p>
        <div id="payment-options">
            <label>
                <input type="radio" name="payment-method" value="Cash on Delivery">
                Cash on Delivery
            </label><br>
            <label>
                <input type="radio" name="payment-method" value="PhonePe">
                PhonePe
            </label><br>
            <label>
                <input type="radio" name="payment-method" value="Card Payment">
                Card Payment
            </label><br><br>
            <button id="buy-button">Buy Now</button>
        </div>
        <div id="payment-details"></div>
    `;

    const paymentOptions = document.getElementsByName("payment-method");
    const buyButton = document.getElementById("buy-button");
    const paymentDetails = document.getElementById("payment-details");

    buyButton.addEventListener("click", () => {
        const selectedPaymentMethod = [...paymentOptions].find(option => option.checked)?.value;

        if (!selectedPaymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        if (selectedPaymentMethod === "Cash on Delivery") {
            placeOrder("Cash on Delivery");
        } else if (selectedPaymentMethod === "PhonePe") {
            // Display PhonePe payment options
            paymentDetails.innerHTML = `
                <h2>PhonePe Payment</h2>
                <p>Choose an option:</p>
                <button id="scan-to-pay">Scan QR Code</button>
                <button id="pay-with-number">Enter Phone Number</button>
                <div id="phonepe-details"></div>
            `;

            document.getElementById("scan-to-pay").addEventListener("click", () => {
                document.getElementById("phonepe-details").innerHTML = `
                    <h3>Scan to Pay</h3>
                    <img src="./phonepay.jpg" alt="PhonePe QR Code" style="width: 200px; height: 200px;">
                `;
            });

            document.getElementById("pay-with-number").addEventListener("click", () => {
                document.getElementById("phonepe-details").innerHTML = `
                    <h3>Enter Phone Number</h3>
                    <label>PhonePe Number: <input type="text" id="phonepe-number" maxlength="10"></label><br><br>
                    <button id="pay-now">Pay Now</button>
                `;

                document.getElementById("pay-now").addEventListener("click", () => {
                    const phonepeNumber = document.getElementById("phonepe-number").value.trim();
                    if (!phonepeNumber || phonepeNumber.length !== 10) {
                        alert("Please enter a valid 10-digit PhonePe number.");
                        return;
                    }

                    // Attempt to open PhonePe app with deep link
                    const phonePeDeepLink = `upi://pay?pa=${phonepeNumber}@ybl&pn=YourBusinessName&am=${totalAmount}&cu=INR`;

                    window.location.href = phonePeDeepLink;

                    // Fallback message if the app doesn't open
                    setTimeout(() => {
                        alert("If the PhonePe app did not open, please ensure it is installed and try again.");
                    }, 3000);
                });
            });
        } else if (selectedPaymentMethod === "Card Payment") {
            // Display card payment form
            paymentDetails.innerHTML = `
                <h2>Enter Card Details</h2>
                <label>Card Number: <input type="text" id="card-number" maxlength="16"></label><br>
                <label>Name on Card: <input type="text" id="card-name"></label><br>
                <label>CVV: <input type="text" id="card-cvv" maxlength="3"></label><br><br>
                <button id="pay-now">Pay Now</button>
            `;

            document.getElementById("pay-now").addEventListener("click", () => {
                const cardNumber = document.getElementById("card-number").value.trim();
                const cardName = document.getElementById("card-name").value.trim();
                const cardCVV = document.getElementById("card-cvv").value.trim();

                if (!cardNumber || !cardName || !cardCVV || cardNumber.length !== 16 || cardCVV.length !== 3) {
                    alert("Please enter valid card details.");
                    return;
                }

                // Simulate payment success
                alert("Payment successful!");
                placeOrder("Card Payment");
            });
        }
    });

    function placeOrder(paymentMethod) {
        document.body.innerHTML = `
            <h1>Thank you for your purchase!</h1>
            <p>Payment Method: ${paymentMethod}</p>
            <p>Your order will be delivered soon.</p>
            <a href="mainpage.html" style="color: blue; text-decoration: underline;">Shop More</a>
        `;

        // Clear cart data
        localStorage.removeItem("cartdata");
        localStorage.removeItem("cartTotal");
    }
});



















// // Retrieve total amount from localStorage
// const totalAmount = JSON.parse(localStorage.getItem("cartTotal")) || 0;

// // Form submission handler
// const form = document.getElementById("address-form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     const area = document.getElementById("area").value.trim();
//     const landmark = document.getElementById("landmark").value.trim();
//     const district = document.getElementById("district").value.trim();
//     const pincode = document.getElementById("pincode").value.trim();
//     const state = document.getElementById("state").value.trim();

//     if (!name || !phone || !area || !landmark || !district || !pincode || !state) {
//         alert("Please fill in all the details.");
//         return;
//     }

//     // Save the address in localStorage
//     const userAddress = { name, phone, area, landmark, district, pincode, state };
//     localStorage.setItem("userAddress", JSON.stringify(userAddress));

//     // Display thank-you message and navigation link
//     document.body.innerHTML = `
//         <h1>Thank you for purchasing!</h1>
//         <p>Continue for more shopping.</p>
//         <a href="mainpage.html" style="color: blue; text-decoration: underline;">Shop More</a>
//     `;

//     // Clear localStorage for cart items (optional)
//     localStorage.removeItem("cartdata");
//     localStorage.removeItem("cartTotal");
// });



// // Retrieve total amount from localStorage
// const totalAmount = JSON.parse(localStorage.getItem("cartTotal")) || 0;

// // Retrieve cart items from localStorage
// const cartItems = JSON.parse(localStorage.getItem("cartdata")) || [];

// // Retrieve saved address from localStorage
// const savedAddress = JSON.parse(localStorage.getItem("userAddress"));

// // Prefill form if address exists
// if (savedAddress) {
//     document.getElementById("name").value = savedAddress.name || "";
//     document.getElementById("phone").value = savedAddress.phone || "";
//     document.getElementById("area").value = savedAddress.area || "";
//     document.getElementById("landmark").value = savedAddress.landmark || "";
//     document.getElementById("district").value = savedAddress.district || "";
//     document.getElementById("pincode").value = savedAddress.pincode || "";
//     document.getElementById("state").value = savedAddress.state || "";
// }

// // Form submission handler
// const form = document.getElementById("address-form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     const area = document.getElementById("area").value.trim();
//     const landmark = document.getElementById("landmark").value.trim();
//     const district = document.getElementById("district").value.trim();
//     const pincode = document.getElementById("pincode").value.trim();
//     const state = document.getElementById("state").value.trim();

//     if (!name || !phone || !area || !landmark || !district || !pincode || !state) {
//         alert("Please fill in all the details.");
//         return;
//     }

//     // Save the address in localStorage
//     const userAddress = { name, phone, area, landmark, district, pincode, state };
//     localStorage.setItem("userAddress", JSON.stringify(userAddress));

//     // Format cart items
//     const formattedCartItems = cartItems
//         .map((item, index) => `${index + 1}. ${item.name} - Qty: ${item.quantity} - Price: ₹${item.price}`)
//         .join("\n");

//     // WhatsApp message
//     const message = encodeURIComponent(
//         `Order Details:\n\nName: ${name}\nPhone: ${phone}\nArea: ${area}\nLandmark: ${landmark}\nDistrict: ${district}\nPincode: ${pincode}\nState: ${state}\n\nCart Items:\n${formattedCartItems}\n\nTotal Amount: ₹${totalAmount.toFixed(2)}`
//     );

//     // WhatsApp deep link
//     const whatsappNumber = "9652180269"; // The WhatsApp number to send the message to
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

//     // Open WhatsApp
//     window.open(whatsappURL, "_blank");

//     // Display thank-you message
//     document.body.innerHTML = `
//         <h1>Thank you for purchasing!</h1>
//         <p>Your order has been placed successfully. You can continue shopping more.</p>
//         <button onclick="window.location.href='index.html'">Continue Shopping</button>
//     `;

//     // Clear localStorage (optional, keep address stored for reuse)
//     localStorage.removeItem("cartdata");
//     localStorage.removeItem("cartTotal");
// });

// // Edit address button functionality
// document.getElementById("edit-address").addEventListener("click", () => {
//     alert("You can now edit your address.");
//     document.getElementById("area").focus();
// });












// // // Retrieve total amount from localStorage
// // const totalAmount = JSON.parse(localStorage.getItem("cartTotal")) || 0;

// // // Retrieve cart items from localStorage
// // const cartItems = JSON.parse(localStorage.getItem("cartdata")) || [];

// // // Retrieve saved address from localStorage
// // const savedAddress = JSON.parse(localStorage.getItem("userAddress"));

// // // Prefill form if address exists
// // if (savedAddress) {
// //     document.getElementById("name").value = savedAddress.name || "";
// //     document.getElementById("phone").value = savedAddress.phone || "";
// //     document.getElementById("area").value = savedAddress.area || "";
// //     document.getElementById("landmark").value = savedAddress.landmark || "";
// //     document.getElementById("district").value = savedAddress.district || "";
// //     document.getElementById("pincode").value = savedAddress.pincode || "";
// //     document.getElementById("state").value = savedAddress.state || "";
// // }

// // // Form submission handler
// // const form = document.getElementById("address-form");
// // form.addEventListener("submit", (e) => {
// //     e.preventDefault();

// //     const name = document.getElementById("name").value.trim();
// //     const phone = document.getElementById("phone").value.trim();
// //     const area = document.getElementById("area").value.trim();
// //     const landmark = document.getElementById("landmark").value.trim();
// //     const district = document.getElementById("district").value.trim();
// //     const pincode = document.getElementById("pincode").value.trim();
// //     const state = document.getElementById("state").value.trim();

// //     if (!name || !phone || !area || !landmark || !district || !pincode || !state) {
// //         alert("Please fill in all the details.");
// //         return;
// //     }

// //     // Save the address in localStorage
// //     const userAddress = { name, phone, area, landmark, district, pincode, state };
// //     localStorage.setItem("userAddress", JSON.stringify(userAddress));

// //     // Format cart items
// //     const formattedCartItems = cartItems
// //         .map((item, index) => `${index + 1}. ${item.name} - Qty: ${item.quantity} - Price: ₹${item.price}`)
// //         .join("\n");

// //     // WhatsApp message
// //     const message = encodeURIComponent(
// //         `Order Details:\n\nName: ${name}\nPhone: ${phone}\nArea: ${area}\nLandmark: ${landmark}\nDistrict: ${district}\nPincode: ${pincode}\nState: ${state}\n\nCart Items:\n${formattedCartItems}\n\nTotal Amount: ₹${totalAmount.toFixed(2)}`
// //     );

// //     // WhatsApp deep link
// //     const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your WhatsApp number in international format without "+" (e.g., "919876543210" for India)
// //     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

// //     // Open WhatsApp
// //     window.open(whatsappURL, "_blank");

// //     // Clear localStorage (optional)
// //     localStorage.removeItem("cartdata");
// //     localStorage.removeItem("cartTotal");

// //     // Redirect to confirmation page (optional)
// //     // window.location.href = "confirmation.html";
// // });

// // // Edit address button functionality
// // document.getElementById("edit-address").addEventListener("click", () => {
// //     alert("You can now edit your address.");
// //     document.getElementById("area").focus();
// // });





















