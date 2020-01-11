const name = document.getElementById("name");
const email = document.getElementById("email");
var list = document.getElementById("myList");

var submit = document.getElementById("submit");

submit.addEventListener("click", showList);



function showList(e) {
  e.preventDefault();
  console.log("clicked!!");
    console.log(name.value, email.value);


var new_li = document.createElement('li');
new_li.className = "list-group-item mt-2";

   new_li.append(document.createTextNode(`Name:${name.value} Email:${email.value}`));

    list.appendChild(new_li);

console.log(list);

}
