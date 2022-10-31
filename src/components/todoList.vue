<template lang="pug">
   .todo-list
      .content
         ul.list
            li.item(v-for="todo in todos")
               todo-list-item(
                  :todo="todo"
               )
      .footer
         .footer-content
            .counter {{todos.length}} items left
            .filter
               todo-list-filter
            button.clear(
               @click="clearAllCompleted"
            ) clear completed
</template>

<script>
import todoListFilter from './todoListFilter';
import todoListItem from './todoListItem';
import { mapMutations } from "vuex";

export default {
   components: {
      todoListFilter,
      todoListItem
   },
   props: {
      todos: Array
   },
   methods: {
      ...mapMutations(['clearCompleted']),
      clearAllCompleted() {
         this.clearCompleted();
      }
   }
}
</script>

<style lang="scss" scoped>
   .list {
      font-size: 24px;
      border-bottom: 1px solid #ededed;
   }

   .item {
      border-bottom: 1px solid #ededed;
      &:last-child {
         border-bottom: none;
      }
   }


   .footer {
      color: #777;
      padding: 10px 15px;
      text-align: center;
      position: relative;
      font-size: 14px;

      &:before {
         content: '';
         position: absolute;
         right: 0;
         bottom: 0;
         left: 0;
         height: 50px;
         overflow: hidden;
         box-shadow: 
            0 1px 1px rgba(#000000, .2), 
            0 8px 0 -3px #f6f6f6, 
            0 9px 1px -3px rgba(#000000, .2),
            0 20px 0 -9px #f6f6f6, 
            0 21px 1px -9px rgba(#000000, .2);
      }
   }

   .footer-content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
   }

   .filter {
      flex: 1;
      flex-basis: 177px;
      margin-bottom: 5px;
   }

   .clear {
      padding: 0 10px;
      background: transparent;
      font-weight: 300;
      color: inherit;
      border: 1px solid rgba(175, 47, 47, 0.2);
      border-radius: 3px;
      cursor: pointer;
      outline: none;
      transition: .1s;

      &:hover {
         transform: translateY(-1px);
         box-shadow: 0 1px 1px rgba(#000000, .2);
      }
   }
</style>