"use strict"



const allDishes =[];

function Dish(id,name,type,price) {
    this.id=id;
    this.name=name;
    this.type=type;
    this.price=price;
    allDishes.push(this);
}


Dish.prototype.render = function() {

    let x = document.getElementById("tbody");
    let tableRow = document.createElement("tr");
    let tableData1 = document.createElement("td");
    let tableData2 = document.createElement("td");
    let tableData3 = document.createElement("td");
    let tableData4 = document.createElement("td");
    tableData1.textContent = this.id;
    tableData2.textContent = this.name;
    tableData3.textContent = this.type;
    tableData4.textContent = this.price;
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);
    x.appendChild(tableRow);
}

let newDish = document.getElementById("form")

newDish.addEventListener("submit",doSubmit)

function doSubmit(event) {
event.preventDefault();
let name = event.target.name.value;
let type = checks();
let price = event.target.price.value;

let food = new Dish(createId(),name,type,price);
food.render();
saveData();


function saveData() {
    
    let srtngf = JSON.stringify(allDishes);
    localStorage.setItem("allData" , srtngf);
   
}

function createId() {
    if(name==false)
    {
        return "fill the form please";
    }
    else{
        return Math.floor(Math.random() * (2000 - 1000+1)) + 1000;
    }
    
}
function checks() {

    if (event.target.fv.checked) {return "Fruit and Vegetble"};
    if (event.target.sf.checked) {return "Starchy food"};
    if (event.target.df.checked) {return "Diary food"};
    if (event.target.protein.checked) {return "Protein food"};
}}



function getData() {
    let data = localStorage.getItem("allData");
    let newData = JSON.parse(data);
    if (newData != null) {

    
    for(let i =0 ; i<newData.length ; i++){

     let  k = new Dish(newData[i].id,newData[i].name,newData[i].type,newData[i].price);
        
     k.render();
    }
}
    
    
    
    
    
}

getData();