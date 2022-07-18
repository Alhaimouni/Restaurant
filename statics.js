"use strict"





function getData() {
    let data = localStorage.getItem("allData");
    let newData = JSON.parse(data);
    if (newData != null) {

    
    for(let i =0 ; i<newData.length ; i++){

    let x = document.getElementById("tbody");
    let tableRow = document.createElement("tr");
    let tableData1 = document.createElement("td");
    let tableData2 = document.createElement("td");  
    let tableData3 = document.createElement("td");
    let tableData4 = document.createElement("td");
    tableData1.textContent = newData[i].id;
    tableData2.textContent = newData[i].name;
    tableData3.textContent = newData[i].type;
    tableData4.textContent = newData[i].price;
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);
    x.appendChild(tableRow);    

}
}  
}

getData();




