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
