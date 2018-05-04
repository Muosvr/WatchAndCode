//requirements:
// todoList.addToDo should add objects
// todoList.changeTodo should change the todo Text property
// todoList.toggleCompleted should change the completed property


var todoList = {
  todos: [],
  displayTodos: function() {
    console.log("My Todos", this.todos);
  },
  
  addTodo: function(todoText) {
    this.todos.push({
      todoText:todoText,
      completed:false
    });
    this.displayTodos();
  },
  
  changeTodo: function(position, newTodoText) {
    this.todos[position].todoText = newTodoText;
    this.displayTodos();
  },
  
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  
  togggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
  
}