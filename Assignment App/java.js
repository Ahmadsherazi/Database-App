const nameBox = document.getElementById("name-box");
const emailBox = document.getElementById("email-box");
const listTable = document.getElementById("listtable");

function addData(){
    let tr = document.createElement("tr");
    listTable.appendChild(tr);

    let td1 = document.createElement("td");
    td1.innerHTML = nameBox.value;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = emailBox.value;
    tr.appendChild(td2);

    console.log("data");

}





// const inn1= document.getElementById("inn1");
// const email=document.getElementById("inn2");
// const listtable1= document.getElementById("listtable");

// const inn2= document.getElementById("inn1");
// const email2=document.getElementById("inn2");
// const listtable2= document.getElementById("listtable");





// function AddTask(){
//     let td1=document.createElement("td");
//     listtable.appendChild("td");
//     td.innerHTML= inn1.value;




//     // let td2=document.createElement("td");
//     // listlable.appendchild("td");
//     // td.innerHTML=inn2.value


// }