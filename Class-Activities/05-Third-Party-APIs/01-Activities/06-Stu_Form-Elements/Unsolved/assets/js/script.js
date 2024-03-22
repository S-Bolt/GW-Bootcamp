var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var shoppingInputEl =$(`#shopping-input`);

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault();

var newItem = shoppingInputEl.val();

if (newItem !== ``) {
    shoppingListEl.append(`<li>` + newItem + `</li>`);
    shoppingInputEl.val(``);
}

    
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
};
shoppingFormEl.on(`submit`, handleFormSubmit);

