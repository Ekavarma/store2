
let filterdata = JSON.parse(localStorage.getItem("filteredData")) || [];
let container = document.getElementById("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "space-around";
container.style.gap = "20px";
container.style.margin = "20px";

function displaycards(y) {
    container.textContent = "";
    y.forEach(x => {
        let card = document.createElement("div");

        card.style.border = "1px solid #ccc";
        card.style.borderRadius = "8px";
        card.style.width = "25%";
        card.style.padding = "10px";
        card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        card.style.textAlign = "center";
        card.style.backgroundColor = "#fff";

        card.innerHTML = `
                <div style="overflow: hidden; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <img src="${x.Image}" 
                         style="width: 100%; height: 200px; object-fit: cover;" />
                </div>
                <h2>${x.name}</h2>
                <h3>₹${x.Price} per kg</h3>
                <div style="margin-bottom: 15px;">
                    <label for="weightSelect">Select Weight: </label>
                    <select class="weightSelect">
                        <option value="500g">500g - ₹${(x.Price / 2).toFixed(2)}</option>
                        <option value="1kg">1kg - ₹${x.Price}</option>
                    </select>
                </div>
                <div style="margin-top: 10px;"> <!-- Added extra margin here -->
                    <button class="addToCart" style="margin-bottom: 10px;">Add to Cart</button>
                    <button>
                        <a href="./cart.html" style="text-decoration: none;">Go to Cart</a>
                    </button>
                </div>
            `;

        const addToCartButton = card.querySelector(".addToCart");
        addToCartButton.addEventListener("click", () => {
            const weightSelect = card.querySelector(".weightSelect");
            const selectedWeight = weightSelect.value;
            let price = selectedWeight === "500g" ? x.Price / 2 : x.Price;
        
            let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
            if (!Array.isArray(cartdata)) {
                cartdata = [];
            }
        
            // Clone the item and add weight and price details
            let cartItem = { ...x, weight: selectedWeight, price: parseFloat(price) }; // Ensure price is stored as a number
            cartdata.push(cartItem);
        
            localStorage.setItem("cartdata", JSON.stringify(cartdata));
            alert(`${selectedWeight} of ${x.name} added to cart!`);
        });
        

        container.append(card);
    });
}

displaycards(filterdata);






















// let filterdata = JSON.parse(localStorage.getItem("filteredData")) || [];
// let container = document.getElementById("container");
// container.style.display = "flex";
// container.style.flexWrap = "wrap";
// container.style.justifyContent = "space-around";
// container.style.gap = "20px";
// container.style.margin = "20px";

// function displaycards(y) {
//     container.textContent = "";
//     y.forEach(x => {
//         let card = document.createElement("div");

//         card.style.border = "1px solid #ccc";
//         card.style.borderRadius = "8px";
//         card.style.width = "25%";
//         card.style.padding = "10px";
//         card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
//         card.style.textAlign = "center";
//         card.style.backgroundColor = "#fff";

//         card.innerHTML = `
//                 <div style="overflow: hidden; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
//                     <img src="${x.Image}" 
//                          style="width: 100%; height: 200px; object-fit: cover;" />
//                 </div>
//                 <h2>${x.name}</h2>
//                 <h3>₹${x.Price} per kg</h3>
//                 <div>
//                     <label for="weightSelect">Select Weight: </label>
//                     <select class="weightSelect">
//                         <option value="500g">500g - ₹${(x.Price / 2).toFixed(2)}</option>
//                         <option value="1kg">1kg - ₹${x.Price}</option>
//                     </select>
//                 </div>
//                 <button class="addToCart">Add to Cart</button>
//                 <button>
//                     <a href="../cart/addtocart.html" style="text-decoration: none;">Go to Cart</a>
//                 </button>
//             `;

//         const addToCartButton = card.querySelector(".addToCart");
//         addToCartButton.addEventListener("click", () => {
//             const weightSelect = card.querySelector(".weightSelect");
//             const selectedWeight = weightSelect.value;
//             let price = selectedWeight === "500g" ? x.Price / 2 : x.Price;

//             let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
//             if (!Array.isArray(cartdata)) {
//                 cartdata = [];
//             }

//             // Clone the item and add weight and price details
//             let cartItem = { ...x, weight: selectedWeight, price: price.toFixed(2) };
//             cartdata.push(cartItem);

//             localStorage.setItem("cartdata", JSON.stringify(cartdata));
//             alert(`${selectedWeight} of ${x.name} added to cart!`);
//         });

//         container.append(card);
//     });
// }

// displaycards(filterdata);












// let filterdata = JSON.parse(localStorage.getItem("filteredData")) || [];
// let container = document.getElementById("container");
// container.style.display = "flex";
// container.style.flexWrap = "wrap";
// container.style.justifyContent = "space-around";
// container.style.gap = "20px";
// container.style.margin = "20px";

// function displaycards(y) {
//     container.textContent = "";
//     y.forEach(x => {
//         let card = document.createElement("div");

//         card.style.border = "1px solid #ccc";
//         card.style.borderRadius = "8px";
//         card.style.width = "25%";
//         card.style.padding = "10px";
//         card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
//         card.style.textAlign = "center";
//         card.style.backgroundColor = "#fff"; // Adding a background for better contrast

//         card.innerHTML = `
//                 <div style="overflow: hidden; border-radius: 12px; border: 3px solid #007BFF; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);">
//                     <img src="${x.Image}" 
//                          style="width: 100%; height: 200px; object-fit: cover; 
//                                 transition: transform 0.3s ease-in-out;"/>
//                 </div>
//                 <h2>${x.name}</h2>
//                 <h3>₹${x.Price} per kg</h3>
//                 <p>500g: ₹${x.Price / 2} | 1kg: ₹${x.Price}</p>
//                 <div style="display:flex; justify-content:space-around;">
//                     <button class="addtocart" data-weight="500g">Add 500g</button>
//                     <button class="addtocart" data-weight="1kg">Add 1kg</button>
//                     <button>
//                         <a href="../cart/addtocart.html" style="text-decoration: none;">Go to Cart</a>
//                     </button>
//                 </div>
//             `;

//         // Adding hover effect to the image
//         const img = card.querySelector("img");
//         img.addEventListener("mouseover", () => {
//             img.style.transform = "scale(1.05)"; // Slight zoom effect
//         });
//         img.addEventListener("mouseout", () => {
//             img.style.transform = "scale(1)";
//         });

//         const buttons = card.querySelectorAll(".addtocart");
//         buttons.forEach(button => {
//             button.addEventListener("click", () => {
//                 let weight = button.getAttribute("data-weight");
//                 let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
//                 if (!Array.isArray(cartdata)) {
//                     cartdata = [];
//                 }

//                 // Clone the item and add weight information
//                 let cartItem = { ...x, weight, price: weight === "500g" ? x.Price / 2 : x.Price };
//                 cartdata.push(cartItem);

//                 localStorage.setItem("cartdata", JSON.stringify(cartdata));
//                 alert(`${weight} of ${x.name} added to cart!`);
//             });
//         });

//         container.append(card);
//     });
// }

// displaycards(filterdata);







// let filterdata = JSON.parse(localStorage.getItem("filteredData")) || [];
// let container = document.getElementById("container")
// container.style.display = "flex";
// container.style.flexWrap = "wrap";
// container.style.justifyContent = "space-around";
// container.style.gap = "20px";
// container.style.margin = "20px";

// function displaycards(y) {
//     container.textContent = "";
//     y.forEach(x => {
//         let card = document.createElement("div")

//         card.style.border = "1px solid #ccc";
//         card.style.borderRadius = "8px";
//         card.style.width="25%"
//         card.style.padding = "10px";
//         card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
//         card.style.textAlign = "center";
        
//         card.innerHTML = `
//                 <img src="${x.Image}" style="border-radius: 10px; width: 100%; height: 200px; object-fit: cover;";/>
//                 <h2>${x.name}</h2>
//                 <h3>₹${x.Price}</h3>
//             <div style="display:flex;justify-content:space-around";><button class="addtocart">AddtoCart</button><button><a href="../cart/addtocart.html" style>gotocart</a></button></div>
//                  `;
//         const button =card.querySelector(".addtocart")
//         button.addEventListener("click",()=>{
//             let cartdata=JSON.parse(localStorage.getItem("cartdata")) || []
//             if(!Array.isArray(cartdata)){
//                 cartdata=[]
//             }
//             cartdata.push(x)
//             localStorage.setItem("cartdata",JSON.stringify(cartdata));
//             alert("added to card")
//         })


//         container.append(card);
//     });
// }
// displaycards(filterdata)