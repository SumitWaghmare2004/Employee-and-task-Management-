let Btn = document.querySelector("#addBtn");

let panel = document.getElementsByClassName("card-body");

let submit = document.getElementById("#submit");


Btn.addEventListener("click", () => {
    // alert(1);
    // panel.setAttribute("style", "visibility: visible;");
})


Btn.addEventListener("click", () => {
    // panel.setAttribute("style", "visibility: hidden;");

})

function showModal() {
    // alert(1);
    console.log(panel);
    panel[0].style.visibility = 'visible';
}

function hideModal() {
    // alert(1);
    console.log(panel);
    panel[0].style.visibility = 'hidden';
}







document.getElementById('crud-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let designation = document.getElementById('Priority1').value;
    let id = document.getElementById('Priority2').value;
    let name = document.getElementById('Priority3').value;
    let email = document.getElementById('Priority4').value;
    let task = document.getElementById('Priority5').value;
    let startdate = document.getElementById('Priority6').value;
    let enddate = document.getElementById('Priority7').value;
    let priority = document.getElementById('taskPriority').value;

    addRow(designation, id, name, email, task, startdate, enddate, priority);

    document.getElementById('crud-form').reset();
});

function addRow(designation, id, name, email, task, startdate, enddate, priority) {
    let table = document.getElementById('crud-table').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    let degCell = newRow.insertCell(0);
    let idCell = newRow.insertCell(1);
    let nameCell = newRow.insertCell(2);
    let emailCell = newRow.insertCell(3);
    let taskCell = newRow.insertCell(4);
    let startdateCell = newRow.insertCell(5);
    let enddateCell = newRow.insertCell(6);
    let priorityCell = newRow.insertCell(7);

    let ActionCell = newRow.insertCell(8);


    degCell.textContent = designation;
    idCell.textContent = id;
    nameCell.textContent = name;
    emailCell.textContent = email;
    taskCell.textContent = task;
    startdateCell.textContent = startdate;
    enddateCell.textContent = enddate;
    priorityCell.textContent = priority;

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        editRow(newRow);
    };

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteRow(newRow);
    };

    ActionCell.appendChild(editButton);
    ActionCell.appendChild(deleteButton);
}

function editRow(row) {

    let degCell = row.cells[0];
    let idCell = row.cells[1];
    let nameCell = row.cells[2];
    let emailCell = row.cells[3];
    let taskCell = row.cells[4];
    let startdateCell = row.cells[5];
    let enddateCell = row.cells[6];
    let priorityCell = row.cells[7];




    let newdeg = prompt("Enter new name:", degCell.textContent);
    let newid = prompt("Enter new email:", idCell.textContent);
    let newName = prompt("Enter new name:", nameCell.textContent);
    let newEmail = prompt("Enter new email:", emailCell.textContent);
    let newtask = prompt("Enter the new tash:", taskCell.textContent);
    let newstartdt = prompt("Enter the new tash:", startdateCell.textContent);
    let newenddt = prompt("Enter the new tash:", enddateCell.textContent);
    let newpriority = prompt("Enter the new tash:", priorityCell.textContent);



    if (newdeg && newid && newName && newEmail && newtask && newstartdt && newenddt && newpriority) {
        degCell.textContent = newdeg;
        idCell.textContent = newid;
        nameCell.textContent = newName;
        emailCell.textContent = newEmail;
        taskCell.textContent = newtask;
        startdateCell.textContent = newstartdt;
        enddateCell.textContent = newenddt;
        priorityCell.textContent = newpriority;


    }
}

function deleteRow(row) {
    row.parentNode.removeChild(row);
}


fetch("https://api.slingacademy.com/v1/sample-data/files/employees.json").then((data) => {
    // console.log(data);
    return data.json();
}).then((objectData) => {
    console.log(objectData);
    let tabledata = "";
    objectData.map((values) => {
        tabledata +=
            `     <tr>
                    <th scope="row">${values.first_name}</th>
                    <td>${values.id}</td>
                    <td>${values.email}</td>
                    <td>${values.phone}</td>
                       </tr>`;


    }); document.getElementById("tabledata").innerHTML = tabledata;

})
