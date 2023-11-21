function print(info) {
    console.log(info)
}

class Todo {
    constructor(name, isDone=false) {
        this.name = name
        this.isDone = isDone
    }

    markDone() {
        this.isDone = true
    }
}

class Todos {
    constructor() {
        this.tasks = []; // { name: 'what ever', isDone: true }
    }
}

const todoList1 = new Todos();

// todoList1.tasks.push({name: 'what ever',isDone: false})
const todo1 = new Todo('what ever', false);
todoList1.tasks.push(todo1)

print(todoList1.tasks)