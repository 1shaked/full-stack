
class Todo:
    def __init__(self, name, isDone=False):
        self.name = name
        self.isDone = isDone

    def markDone(self):
        self.isDone = True
      


class Todos:
    def __init__(self):
        self.tasks = []



todoList1 = Todos()

# todoList1.tasks.append({'name': 'what ever','isDone': False})
todo1 = Todo('nameTask', False)
todoList1.tasks.append(todo1)
print(todoList1.tasks)
