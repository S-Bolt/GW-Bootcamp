var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.classList.box);
  console.log("checked if clicked on a box");

  const number = element.getAttribute("data-number");
  const state = element.getAttribute("data-state");

  if (element.getAttribute("data-state")=== "hidden") {
    element.innerText = number; 
    console.log(number);
    element.setAttribute("data-state", "revealed");
  } else {
    element.innerText = "";
    element.setAttribute("data-state", "hidden");
  }

});
