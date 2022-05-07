document.body.style = "display: flex; justify-content: center; align-items: center; height: 95vh";

var table = document.createElement('table');
table.style.width = "100%";
table.style.height = "300px";
table.style.border = "2px solid black";
table.style.borderCollapse = "collapse";

function addRowData(Name,age,dob,email,company,thead){
    var tr = document.createElement("tr");   

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement('td');

    var input1 = document.createTextNode(Name);
    var input2 = document.createTextNode(age);
    var input3 = document.createTextNode(dob);
    var input4 = document.createTextNode(email);
    var input5 = document.createTextNode(company);

    
    td1.appendChild(input1);
    td2.appendChild(input2);
    td3.appendChild(input3);
    td4.appendChild(input4);
    td5.appendChild(input5);

    td1.style = thead;
    td2.style = thead;
    td3.style = thead;
    td4.style = thead;
    td5.style = thead;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
    document.body.appendChild(table);
}
addRowData("Name","Age","DOB","Email","Company","border:1px solid black;font-weight:bold;text-align:center;padding:5px");
addRowData("Hritik","21","09 Apr 2001","ranjanhritik8@gmail.com","Gemini Solutions","border:1px solid black;text-align:center;padding:5px");
addRowData("Nikhil","22","25 Dec 2000","nikhilraj@gmail.com","Capgemini","border:1px solid black;text-align:center;padding:5px");
addRowData("Sanchit","20","27 Mar 2002","sanchitvarshney24@gmail.com","Pimco","border:1px solid black;text-align:center;padding:5px");
addRowData("Ritik","22","12 Jan 2000","ritikagarwal3@gmail.com","Wipro","border:1px solid black;text-align:center;padding:5px");
addRowData("Abhishek","21","04 Nov 2001","abhishekbhadauriya12@gmail.com","TCS","border:1px solid black;text-align:center;padding:5px");
