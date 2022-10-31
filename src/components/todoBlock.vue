<template lang="pug">
   .todo
      .todo-component
         todo-input(
            :checkedAll="checkedAll"
         )
         todo-list(
            v-if="todos.length > 0"
            :todos="filteredTodos"
         )
</template>

<script>
import todoInput from './todoInput';
import todoList from './todoList';
import { mapState, mapMutations } from "vuex";

export default {
   components: {
      todoInput,
      todoList
   },
   computed: {
      ...mapState({
         todos: state => state.todos.todos,
         filter: state => state.todos.filter,
         checkedAll: state => state.todos.checkedAll
      }),
      filteredTodos() {
         let filter;
         switch(this.filter) {
            case 'all' :
               filter = this.todos;
               break
            case 'active' :
               filter = this.todos.filter(item => item.checked === false);
               break
            case 'completed' :
               filter = this.todos.filter(item => item.checked);
         }
         return filter;
      }
   },
   methods: {
      ...mapMutations(['controllerCheckedAll'])
   },
   watch: {
      todos() {
         this.controllerCheckedAll();
      }
   }
}
</script>

<style lang="scss" scoped>
   .todo-component {
      margin-top: 100px;
      background: #fff;
      box-shadow: 0 2px 4px 0 rgba(#000000, .4), 0 25px 40px 0 rgba(#000000, .4);
      border-radius: 3px;
   }
</style>