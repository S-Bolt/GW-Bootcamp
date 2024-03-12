var KeyEl = document.querySelctor("#key");
var keyCodeEl = document.querySelctor("#code");


function keydownAction(event) {
  document.querySelector("#status").textContent = "KEYDOWN Event"
  // TODO: Complete keydown function
}


function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
// TODO: Add Event Listener for "keydown" event

