//.displayTodos should show .todo text
//.displayTodos should tell you if todo list is empty
//.displayTodos should show .completed 

var todoList = {
  todos: [],
  displayTodos: function() {
    
    if (this.todos.length === 0){
      console.log("Todo list is empty");
    }else {
      for (i = 0; i<this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log("(X)",this.todos[i].todoText);
        }else {
          console.log("( )",this.todos[i].todoText);
        }
        
        
      }
    }
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
  
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
  
  
  
}
