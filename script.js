
var todoList = {
  todos: [],
  
  addTodo: function(todoText) {
    this.todos.push({
      todoText:todoText,
      completed:false
    });
  },
  
  changeTodo: function(position, newTodoText) {
    this.todos[position].todoText = newTodoText;
  },
  
  deleteTodo: function(position) {
    this.todos.splice(position, 1);

  },
  
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  
  //V6
  toggleAll: function() {
    
    var totalTodos = this.todos.length;
    var totalCompleted = 0;

    // for (i=0;i<totalTodos; i++){
    //   if (this.todos[i].completed === true){
    //     totalCompleted += 1;
    //   }
    // }
    
    this.todos.forEach(function(todo){
      if (todo.completed === true){
        totalCompleted += 1;
      }
    });
    
    //if everything is complete, toggle them to uncompleted
    if(totalCompleted === totalTodos){
      // for(i=0; i<totalTodos; i++){
      //   this.todos[i].completed = false;
      // }
      this.todos.forEach(function(todo){
        todo.completed = false;
      });
      
    }else {
      // for(i=0; i<totalTodos; i++){
      //   this.todos[i].completed = true;
      // }
      
      this.todos.forEach(function(todo){
        todo.completed = true;
      });
    }
  }
  
};

var handler = {
  toggleAll:function(){
    todoList.toggleAll();
    viewTodo.displayTodos();
  },
  addTodo: function(){
    var text = document.getElementById('inputText');
    todoList.addTodo(text.value);
    text.value = '';
    viewTodo.displayTodos();
  },
  changeTodo: function(){
    var position = document.getElementById('changeTodoPosition');
    var text = document.getElementById('changeTodoText');
    todoList.changeTodo(position.valueAsNumber,text.value);
    position.value = '';
    text.value = '';
    viewTodo.displayTodos();
  },
  //button for deleting todos
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    viewTodo.displayTodos();
  },
  //button for toggle todos
  toggleTodo: function(){
    var toggleTodoPositionInput = document.getElementById('toggleTodoPositionInput');
    todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
    toggleTodoPositionInput.value = '';
    viewTodo.displayTodos();
  }
}

var viewTodo = {
  displayTodos: function(){
    var todoListUl = document.querySelector('ul');
    var displayTodosWithCompletion = '';
    var i = 0;
    
    todoListUl.innerHTML = '';
    
    // for (i=0; i<todoList.todos.length;i++){
      
    //   var todoListLi = document.createElement('li');
    //   var todoItemObj = todoList.todos[i];
      
    //   if (todoItemObj.completed === true){
    //     displayTodosWithCompletion = '(x) '+todoItemObj.todoText;
    //   }else{
    //     displayTodosWithCompletion = '( ) '+todoItemObj.todoText;
    //   }
      
    //   todoListLi.textContent = displayTodosWithCompletion;
    //   todoListUl.appendChild(todoListLi);
    //   todoListLi.id = i;
    //   todoListLi.appendChild(this.createDeleteButton());
    // }
    
    todoList.todos.forEach(function(todo){
      var todoListLi = document.createElement('li');
      
      if(todo.completed === true){
        displayTodosWithCompletion = '(x) '+todo.todoText;
      }else{
        displayTodosWithCompletion = '( ) '+todo.todoText;
      }
      
      todoListLi.textContent = displayTodosWithCompletion;
      todoListUl.appendChild(todoListLi);
      todoListLi.id = i;
      i++;
      todoListLi.appendChild(this.createDeleteButton());
    }, this);
  },
  
  createDeleteButton: function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
      }
}

var todoUl = document.querySelector('ul');
  todoUl.addEventListener('click',function(event){
  if (event.target.className == 'deleteButton'){
  handler.deleteTodo(event.target.parentNode.id);
  }
  
  
})




















