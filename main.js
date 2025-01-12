let url="http://localhost:3000/preethisri"

let alldata=[]
// console.log(alldata)

async function getdata(){
    let data =await fetch(url)
    // console.log(data)
    let data2=await data.json()
    console.log(data2)
    alldata=data2;

}
getdata()



let btn1=document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    let filterdata=alldata.filter(x=>x.category=="vegetables")
    localStorage.setItem("filteredData", JSON.stringify(filterdata))
    window.location.href="./filtereddata.html";
    
})
let btn2=document.getElementById("btn2");
btn2.addEventListener("click",()=>{
    let filterdata=alldata.filter(x=>x.category=="Fruits")
    localStorage.setItem("filteredData", JSON.stringify(filterdata))
    window.location.href="./filtereddata.html"
    
})

let btn3=document.getElementById("btn3");
btn3.addEventListener("click",()=>{

    let filterdata=alldata.filter(x=>x.category=="chocolate")
    localStorage.setItem("filteredData", JSON.stringify(filterdata))
    window.location.href="./filtereddata.html";
    
    
})

let btn4=document.getElementById("btn4");
btn4.addEventListener("click",()=>{

    let filterdata=alldata.filter(x=>x.category=="nutty" )
    localStorage.setItem("filteredData", JSON.stringify(filterdata))
    window.location.href="./filtereddata.html";
    
    

})

let input=document.querySelector("input");
input.addEventListener(("keypress"),(e)=>{
    
    if(e.key == "Enter"){
    let inputvalue=input.value.trim().toLowerCase();

        
        const searchdata=alldata.filter(x=>x.name.toLowerCase().includes(inputvalue))
        localStorage.setItem("searchData",JSON.stringify(searchdata))
        window.location.href="./search.html"
        

    }
    
})





    
    
    

