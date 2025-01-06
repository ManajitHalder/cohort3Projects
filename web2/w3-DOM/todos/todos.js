
let todosIdIndex = 1;

function addTodos() {
    const newTodo = document.querySelector('input').value;

    if (newTodo.length) {
        const newDivEle = document.createElement('div')
        newDivEle.id = `todos-${todosIdIndex}`;
        deleteText = "x"
        newDivEle.innerHTML = `
            <div class="todosStyle">${newTodo}<button onClick="deleteTodos(${todosIdIndex})">${deleteText}</button></div>
            <div class="todos-separator"></div>
        `

        document.getElementById('todos-main').appendChild(newDivEle);
        todosIdIndex += 1;

        // Reset input to empty after adding the todo item
        document.querySelector('input').value = '';
    }
}

function deleteTodos(index) {
    const todoItem = document.getElementById('todos-'+index);
    todoItem.parentNode.removeChild(todoItem);
} 
