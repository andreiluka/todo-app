<template lang="pug">
   .todo-item(:class="{checked: todo.checked}")
      label.label
         .input-block
            input(
               type="checkbox"
               @change="checkTodoAsCompleted"
               :checked="todo.checked"
            ).input
            .input-custom 
         .title {{todo.name}}
      .button
         router-link(
            tag="button"
            :to="{name: 'todoData', params: {text: todo.name, todo: todo}}"
            title="просмотр задания"
         ).view
      .button
         button(
            type="button"
            @click="removeExistedTodo"
            title="удалить"
         ).remove
</template>


<script>
import { mapMutations } from "vuex";

export default {
   props: {
      todo: Object
   },
   methods: {
      ...mapMutations(['removeTodo', 'checkTodo']),
      removeExistedTodo() {
         this.removeTodo(this.todo.id);
      },
      checkTodoAsCompleted(e) {
         const todoItem = {
            ...this.todo,
            checked: e.target.checked
         }

         this.checkTodo(todoItem);
      }
   }
}
</script>


<style lang="scss" scoped>
   .todo-item {
      display: flex;
      align-items: center;
      padding-right: 0.3em;

      &:hover {
         .remove, .view {
            visibility: visible;
         }
      }
   }
   
   .checked {
      text-decoration: line-through;
      color: rgba($color: #000000, $alpha: 0.4);
   }

   .label {
      display: flex;
      align-items: center;
      flex: 1;
      overflow: hidden;
      cursor: pointer;
   }

   .input-block {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
   }

   .input {
      display: none;
   }

   .input:checked+.input-custom:after {
      display: block;
   }

   .input-custom {
      display: block;
      width: 23px;
      height: 23px;
      background: #ffffff;
      border: #115338 1px solid;
      border-radius: 50%;
      position: relative;

      &:after {
         content: '';
         width: 20px;
         height: 20px;
         background: url('../assets/check-mark.svg') center center no-repeat;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         display: none;
      }
   }
   
   .title {
      padding: 15px 0;
      display: block;
      line-height: 1.2;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
   }

   .button {
      margin-right: 10px;
      display: flex;
      align-items: center;
      transition: 0.3s;
      
      &:hover {
         transform: rotate(36deg);
      }
   }

   .view {
      background: url('../assets/arrow.svg') center center / contain no-repeat;
      width: 30px;
      height: 30px;
      border: none;
      cursor: pointer;
      visibility: hidden;
   }

   .remove {
      background: url('../assets/cross.svg') center center / contain no-repeat;
      width: 30px;
      height: 20px;
      border: none;
      cursor: pointer;
      visibility: hidden;
   }
</style>