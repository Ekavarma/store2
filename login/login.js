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

// document.getElementById("form2").addEventListener("submit", (e) => {
//     e.preventDefault();

//     let inputName = document.getElementById("name").value.trim();
//     let inputPassword = document.getElementById("pswd").value.trim();
    
//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     let user = users.find((u) => u.name === inputName && u.password === inputPassword);

//     if (user) {
//         alert("Login successful!");
//         window.location.href = "./mainpage.html";
//     } else {
//         alert("Wrong credentials. Please try again.");
//     }
// });


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

document.getElementById("form2").addEventListener("submit", (e) => {
    e.preventDefault();

    let inputName = document.getElementById("name").value.trim();
    let inputPassword = document.getElementById("pswd").value.trim();
    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find((u) => u.name === inputName && u.password === inputPassword);

    if (user) {
        alert("Login successful!");
        window.location.href = "../main/mainpage.html";
    } else {
        alert("Wrong credentials. Please try again.");
    }
});










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


// let login=document.getElementById("login")

// login.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let inputemail=document.getElementById("Number").value.trim()
//     let inputpswd=document.getElementById("pswd").value.trim()
//     let alluserdata=JSON.parse(localStorage.getItem("details"))
//     if( data=alluserdata.find(x=>x.email===inputnumber && x.pswd===inputpswd)){
//         alert("login succesfully!")
//         window.location.href="./mainpage.html"

//     }else{
//         alert("wrong credentials. Please try again")


//     }
   
// })
