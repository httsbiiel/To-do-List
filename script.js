const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("Por favor, insira uma tarefa antes de clicar em 'Adicionar'.");
  } else {
    let li = document.createElement("li");

    let textContainer = document.createElement("span");
    textContainer.classList.add("text-container");
    textContainer.textContent = inputBox.value;
    li.appendChild(textContainer);

    let completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    li.appendChild(completeButton);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    li.appendChild(deleteButton);

    list.appendChild(li);
    inputBox.value = '';
  }
  saveData();
}

// Add event listener for the "Enter" key
inputBox.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.closest(".complete-button")) {
    e.target.closest(".complete-button").previousElementSibling.classList.toggle("checked");
    saveData();
  } else if (e.target.closest(".delete-button")) {
    e.target.closest(".delete-button").parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showTasks() {
  list.innerHTML = localStorage.getItem("data");
}

showTasks();