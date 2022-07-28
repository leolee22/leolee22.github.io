let add = document.querySelector("form button");
add.addEventListener("click", function (e) {
  e.preventDefault();

  let form = e.target.parentElement;
  let todo = form.children[1].value;

  let add = document.createElement("div");
});
