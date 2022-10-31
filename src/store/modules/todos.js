const todos = {
   state: {
      todos: [],
      filter: 'all',
      checkedAll: false
   },
   mutations: {
      addTodo(state, todo) {
         state.todos.push(todo);
      },
      removeTodo(state, todoId) {
         state.todos = state.todos.filter(item => item.id != todoId);
      },
      editTodo(state, editedTodo) {
         state.todos = state.todos.map(todo => {
           return todo.id === editedTodo.id ? editedTodo : todo;
         });
      },
      checkTodo(state, todoItem) {
         state.todos = state.todos.map(item => (item.id === todoItem.id ? todoItem : item));
      },
      filterTodos(state, filter) {
         state.filter = filter;
      },
      clearCompleted(state) {
         state.todos = state.todos.filter(item => item.checked == false);
      },
      clickCheckedAll(state) {
         state.checkedAll = !state.checkedAll;
         for (let item of state.todos) {
            item.checked = state.checkedAll;
         }
      },
      controllerCheckedAll(state) {
         state.checkedAll = state.todos.every(item => item.checked == true);
      }
   }
}

export default todos;