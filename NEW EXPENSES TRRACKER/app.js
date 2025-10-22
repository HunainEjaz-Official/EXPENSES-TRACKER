

function signup() {
    var signupEmail = document.getElementById("signupEmail").value;
    var signupPassword = document.getElementById("signupPassword").value;
    if (signupEmail == "" || signupPassword == "") {
        Swal.fire("Please Fill Required Fields!");

    }
    else {
        localStorage.setItem("signupEmail", signupEmail);
        localStorage.setItem("signupPassword", signupPassword);

        setTimeout(function () {
            location.href = "./login.html";
        }, 100);

    }
}
function login() {
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;
    if (loginEmail == "" || loginPassword == "") {
        Swal.fire("Please Fill Required Fields!");

    }
    else {
        var storedEmail = localStorage.getItem("signupEmail");
        var storedPassword = localStorage.getItem("signupPassword");

        if (loginEmail == storedEmail && loginPassword == storedPassword) {
            location.href = "./Dashboard.html";
        } else {
            Swal.fire("Invalid Credentials");

        }

    }
}

var TransName = document.getElementById("TransName");
var Amount = document.getElementById("Amount");
var addbtn = document.getElementById("addbtn")
var Firstbtn = document.getElementById("Firstbtn")
TransName.style.display = "none"
Amount.style.display = "none"
addbtn.style.display = "none"

//   var TransName = document.getElementById("TransName");
function AddTransaction() {
    TransName.style.display = "inline-block"
    Amount.style.display = "inline-block"
    addbtn.style.display = "inline-block"
    Firstbtn.style.display = "none";
    document.getElementById("inputGroup").style.display = "flex";
    document.getElementById("Firstbtn").style.display = "none";
}
function Add() {
    var TransName = document.getElementById("TransName");

    var Amount = document.getElementById("Amount").value;
    var income = document.getElementById("income").value;
    var expenses = document.getElementById("expenses").innerText;
    var currentBalance = document.getElementById("currentBalance").value;
    var List = document.getElementById("list");
    var itemsName = document.createElement("li")
    if (TransName.value == "" || Amount == "") {

        Swal.fire("Please Fill Required Fields!");
    } else {
        income = 20000;
        currentBalance = 20000
        expenses = parseFloat(expenses);
        Amount = parseFloat(Amount);
        expenses += Amount
        currentBalance = income - expenses
        document.getElementById("expenses").innerText = expenses + " " + "Rs";
        currentBalance = document.getElementById("currentBalance").innerText = currentBalance;
        itemsName.innerHTML = `<span style="flex: 1; text-align: left;">${TransName.value}</span><span style="flex: 1; text-align: right;">${Amount} Rs</span>`;
        List.appendChild(itemsName);
        document.getElementById("TransName").value = "";
        document.getElementById("Amount").value = "";
    }
}
