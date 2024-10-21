const ul = document.querySelector("#shopList");
const input = document.querySelector("#item");
const button = document.querySelector("#addItem");

let value;

function deleteItem(item) {
    item.remove();
    input.focus();
}

function clickButton() {
    console.log('clicked');
    value = input.value;
    if (value.length < 1) return;
    input.value = '';
    const listItem = document.createElement("li");
const listText = document.createElement("span");
const deleteButton = document.createElement("button");

listItem.appendChild(listText);
listItem.appendChild(deleteButton);

deleteButton.textContent = "Delete";
listText.textContent = value;

ul.appendChild(listItem);
deleteButton.addEventListener('click', () => deleteItem(deleteButton.parentNode));

input.focus();
}


button.addEventListener("click", clickButton); 

