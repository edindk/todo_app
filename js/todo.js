todos = [];

function showTodo() {

    if (JSON.parse(localStorage.getItem('todos')) && todos.length == 0) {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    if (todos) {
        var str = '<ul>';

        todos.forEach(function (element) {
            str += `<li style="margin-top: 5px;">${element.todo}</li>`
            if (element.status) {
                console.log('hello');
                str += `<div><input type="text" id="${element.id}"></input><input type="checkbox" checked><button style="margin-top: 10px; margin-left: 10px; background-color: green; color: white;" onclick="updateTodo(${element.id})">Update</button><button style="margin-left: 10px; margin-top: 10px; background-color: red; color: white;" onclick="deleteTodo(${element.id})">Delete</button></div>`
            }
            else {
                str += `<div><input type="text" id="${element.id}"></input><input type="checkbox" onclick(changeStatus(${element.todo + element.id}))><button style="margin-top: 10px; margin-left: 10px; background-color: green; color: white;" onclick="updateTodo(${element.id})">Update</button><button style="margin-left: 10px; margin-top: 10px; background-color: red; color: white;" onclick="deleteTodo(${element.id})">Delete</button></div>`
            }
        });

        str += '</ul>';

    }
    document.getElementById('todoList').innerHTML = str;
}

function addTodo(todo) {
    if (todo) {
        var obj = {
            id: new Date().valueOf(),
            todo: todo,
            status: false
        };
    }
    todos.push(obj);
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodo();
}

function deleteTodo(id) {
    tempArr = todos.filter(element => {
        return element.id != id;
    });

    todos = tempArr;
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodo();
}

function updateTodo(id) {
    let index = todos.findIndex((obj => obj.id == id));

    if (document.getElementById(id).value) {
        todos[index].todo = document.getElementById(id).value;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodo();
}

function changeStatus(txt) {
    document.getElementById(txt).checked = true;
}
