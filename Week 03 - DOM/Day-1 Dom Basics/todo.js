
let todos = [];

function clicked() {
    const input = document.querySelector("Input");
    const value = input.value.trim();
    if (value.length == 0) {
        return;
    }
    else {
        todos.push({ text: value, done: false });
        input.value = "";
        renderTodos();
    }
}

function renderTodos() {
    const todolists = document.querySelector("#todoList");
    todolists.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const newElement = document.createElement("div");
        newElement.addEventListener("click", function () {
            todos[i].done = !todos[i].done;
            renderTodos();
        });
    newElement.innerHTML = todos[i].text 
    + '<span><button onClick="event.stopPropagation(); deletecall(' + i + ')">❌</button></span>'
    +'<span><button onClick=" event.stopPropagation(); editcall(' + i + ')">✏️</button></span>';

        todolists.appendChild(newElement);
        if (todos[i].done) {
            newElement.classList.add("completed");
        }
    }
}
function deletecall(index) {
    todos.splice(index, 1);
    renderTodos();

}
function editcall(index){
    const newtext=prompt("Edit Your Todo",todos[index].text);
    if(newtext!==null && newtext.trim()!==""){
        todos[index].text=newtext.trim();
        renderTodos();
    }

}
function clearcall(){
    todos.length=0;
    renderTodos();
}