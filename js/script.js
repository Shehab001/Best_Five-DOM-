var count = 0;
function addDisableClass(btn) {
  if (count < 5) {
    var btnElement = document.getElementById(btn);
    btnElement.className += " disabled";

    //getting parent id
    var parentDiv = document.getElementById(btn).parentElement;
    var id = parentDiv.id;

    //getting children

    const name = document.getElementById(id).children[0].innerText;
    //alert(name);

    //---------------------------adding name
    let ul = document.getElementById("order");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(name));

    //---------------------adding style to new created element
    li.className += " stylee";

    ul.appendChild(li);
  } else {
    alert("Maximum Selected");
    return 0;
  }
  count++;
}

/////--------------------------------calculation part
function validation(value, name) {
  if (isNaN(value)) {
    alert("Please Enter A Number..");
    let cost = document.getElementById(name);
    cost.value = "";
  } else {
    return 1;
  }
}

function cost() {
  return parseInt(document.getElementById("cost").value);
}

function totalCost(btn) {
  let fcost = cost();
  if (validation(fcost, "cost") == 1) {
    //alert(cost * count);
    let expense = document.getElementById("expense");
    expense.innerText = fcost * count;
  }
}

function totalCalculation() {
  let manager = parseInt(document.getElementById("manager").value);
  let coach = parseInt(document.getElementById("coach").value);

  if (validation(manager, "manager") + validation(coach, "coach") == 2) {
    let total = document.getElementById("total");
    total.innerText = manager + coach + cost() * count;
  }
}
