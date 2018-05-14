
var todoList = {
  todos: [],
  // displayTodos: function() {
    
  //   if (this.todos.length === 0){
  //     console.log("Todo list is empty");
  //   }else {
  //     for (i = 0; i<this.todos.length; i++){
  //       if(this.todos[i].completed === true){
  //         console.log("(X)",this.todos[i].todoText);
  //       }else {
  //         console.log("( )",this.todos[i].todoText);
  //       }
        
        
  //     }
  //   }
  // },
  
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
    //if everything is complete, toggle them to uncompleted
    var totalTodos = this.todos.length;
    var totalCompleted = 0;

    for (i=0;i<totalTodos; i++){
      if (this.todos[i].completed === true){
        totalCompleted += 1;
      }
    }
    
    if(totalCompleted === totalTodos){
      for(i=0; i<totalTodos; i++){
        this.todos[i].completed = false;
      }
    }else {
      for(i=0; i<totalTodos; i++){
        
        this.todos[i].completed = true;
      }
    }
  }
  
}

  //V7
  //There should be a "Display todos" button and a "Toggle all" button
  //in the app
  //Clicking "Display todos" should run todoList.displayTodos.
  //Clicking "Toggle all" should run todoList.toggleAll.
  
  // var displayTodosButton = document.getElementById("DisplayTodoButton");
  // var toggleAllButton = document.getElementById("ToggleAllButton");
  // displayTodosButton.addEventListener('click', function(){
  //   todoList.displayTodos();
  // });
  
  // toggleAllButton.addEventListener('click', function(){
  //   todoList.toggleAll();
  // })

//->Use the debugger all the time


//refactoring-restruction existing element for easier reading and less code without changing functionality
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
    
    todoListUl.innerHTML = '';
    
    for (i=0; i<todoList.todos.length;i++){
      var todoListLi = document.createElement('li');
      var todoItemObj = todoList.todos[i];
      
      if (todoItemObj.completed === true){
        displayTodosWithCompletion = '(x) '+todoItemObj.todoText;
      }else{
        displayTodosWithCompletion = '( ) '+todoItemObj.todoText;
      }
      
      todoListLi.textContent = displayTodosWithCompletion;
      todoListUl.appendChild(todoListLi);
      todoListLi.id = i;
      todoListLi.appendChild(this.createDeleteButton());
      
      
    }
  },
  
  // v10
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




















