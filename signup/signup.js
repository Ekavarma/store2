document.getElementById("ic").onclick = function () {
    let input = document.getElementById("pswd");
    if (input.type === "password") {
        input.type = "text";
        this.className = "fa-solid fa-eye";
    } else {
        input.type = "password";
        this.className = "fa-solid fa-eye-slash";
    }
};

document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault();

    let nameRegex = /^[a-zA-Z ]{3,}$/;
    let numberRegex = /^[0-9]{10}$/;
    let passwordRegex = /^[a-zA-Z0-9!@#$%&*]{8,15}$/;

    let name = document.getElementById("name").value.trim();
    let number = document.getElementById("number").value.trim();
    let password = document.getElementById("pswd").value.trim();

    let nameError = document.getElementById("nameerror");
    let numberError = document.getElementById("emailerror");
    let passwordError = document.getElementById("pswderror");

    let isValid = true;

    if (!nameRegex.test(name)) {
        nameError.textContent = "Please enter at least 3 characters";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if (!numberRegex.test(number)) {
        numberError.textContent = "Please enter a valid 10-digit number";
        isValid = false;
    } else {
        numberError.textContent = "";
    }

    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be 8-15 characters";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (isValid) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ name, number, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful! Redirecting to login.");
        window.location.href = "../login/login.html";
    }
});

























// document.getElementById("ic").onclick = function () {
//     let input = document.getElementById("pswd");
//     if (input.type === "password") {
//         input.type = "text";
//         this.className = "fa-solid fa-eye";
//     } else {
//         input.type = "password";
//         this.className = "fa-solid fa-eye-slash";
//     }
// };

// document.getElementById("form1").addEventListener("submit", (e) => {
//     e.preventDefault();

//     let nameRegex = /^[a-zA-Z ]{3,}$/;
//     let numberRegex = /^[0-9]{10}$/;
//     let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;

//     let name = document.getElementById("name").value.trim();
//     let number = document.getElementById("number").value.trim();
//     let password = document.getElementById("pswd").value.trim();

//     let nameError = document.getElementById("nameerror");
//     let numberError = document.getElementById("emailerror");
//     let passwordError = document.getElementById("pswderror");

//     let isValid = true;

//     if (!nameRegex.test(name)) {
//         nameError.textContent = "Please enter at least 3 characters";
//         isValid = false;
//     } else {
//         nameError.textContent = "";
//     }

//     if (!numberRegex.test(number)) {
//         numberError.textContent = "Please enter a valid 10-digit number";
//         isValid = false;
//     } else {
//         numberError.textContent = "";
//     }

//     if (!passwordRegex.test(password)) {
//         passwordError.textContent = "Password must be 8-15 characters, include uppercase, lowercase, number, and special character";
//         isValid = false;
//     } else {
//         passwordError.textContent = "";
//     }

//     if (isValid) {
//         let users = JSON.parse(localStorage.getItem("users")) || [];
//         users.push({ name, number, password });
//         localStorage.setItem("users", JSON.stringify(users));

//         alert("Signup successful! Redirecting to login.");
//         window.location.href = "../login/login.html";
//     }
// });









// let input=document.getElementById("pswd")
// let icon=document.getElementById("ic")
// icon.onclick = function (){
//     if(input.type ==="password"){
//         input.type="text"
//         icon.className="fa-solid fa-eye"
//     }
//     else{
//         input.type="password"
//         icon.className="fa-solid fa-eye-slash"
//     }
// }



// let signup = document.getElementById("signup")
// signup.addEventListener("submit", (e) => {
//     e.preventDefault()

//     let rename = /^[a-zA-Z]{3,}$/
//     let regNumber = /^[0-9]{9}$/
//     let regpassword = /^[a-zA-Z0-9!@#$%&*]{8,15}$/
//     let a = document.getElementById("name").value.trim()
//     let b = document.getElementById("Number").value.trim()
//     let c = document.getElementById("pswd").value.trim()
//     let Nameerror = document.getElementById("nameerror")
//     let Numbererror = document.getElementById("Numbererror")

//     let Pswderror = document.getElementById("pswderror")

//     let isvalidate = true


//     if (!rename.test(a)) {
//         Nameerror.textContent = "please enter atleast 4 characters"
//         isvalidate = false
//     }
//     else{
//         Nameerror.textContent =" "

//     }
//     if (!regNumber.test(b)) {
//         Numbererror.textContent = "please enter valid number"
//         isvalidate = false

//     }else{
//         Numbererror.textContent =" "
//     }
//     if (!regpassword.test(c)) {
//         Pswderror.textContent = "please enter atlesat 8 characters"
//         isvalidate = false

//     }else{
//         Pswderror.textContent =" "
//     }
//     if (isvalidate) {
//         let userdata = JSON.parse(localStorage.getItem("details")) || []
//     userdata.push({ name: a, number: b, pswd: c })
//     localStorage.setItem("details", JSON.stringify(userdata))
//     console.log("details")

//     window.location.href = "../login/login.html"

// }
    

// }

//     // else{
//     //     window.location.href="./signup.html"
//     //     alert("enter all fields")
//     // }

// )


























