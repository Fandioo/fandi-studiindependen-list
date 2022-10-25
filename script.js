// Mendeklarasikan sebuah selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//function
function addTodo(event) {
  //prevent form from submiting
  event.preventDefault();

  const list = document.createElement("div");
  list.classList.add("todo");

  const addList = document.createElement("li");
  addList.innerText = todoInput.value;
  addList.classList.add("todo-item");
  list.appendChild(addList);
  //Tanda cek
  const listCheck = document.createElement("button");
  listCheck.innerHTML = '<i class="fas fa-check"> </i>';
  listCheck.classList.add("complete-btn");
  list.appendChild(listCheck);
  //tombol hapus
  const deleteList = document.createElement("button");
  deleteList.innerHTML = '<i class="fas fa-trash"> </i>';
  deleteList.classList.add("trash-btn");
  list.appendChild(deleteList);

  //append to list
  todoList.appendChild(list);
  //clear input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //function untuk menghapus list
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animasi
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //animasi yang akan muncul ketika tombol selesai di klik
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
