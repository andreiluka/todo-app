<template lang="pug">
   .todo-input
      div.error {{validation.firstError('todo.name')}}
      div(
         class="check-all"
         :class="{'checked-all': checkedAll}"
         @click="handleClickCheckedAll"
      )
         img(
            src="../assets/logo.png"
            class="check-all__img"
            alt="отметить все"
         )
      input(
         type="text"
         placeholder="Todo Name"
         autofocus
         v-model="todo.name"
         :class="{'valid-error' : validation.hasError('todo.name')}"
         @keydown.enter="addNewTodo"
      ).input
</template>

<script>
import { Validator } from "simple-vue-validator";
import { mapMutations } from "vuex";

let uniqId = 0;

export default {
   mixins: [require('simple-vue-validator').mixin],
   validators: {
      'todo.name'(value) {
         return Validator.value(value).required('Поле не может быть пустым');
      }
   },
   props: {
      checkedAll: Boolean
   },
   data() {
      return {
         todo: {
            id: 0,
            name: '',
            checked: false
         }
      }
   },
   methods: {
      ...mapMutations(['addTodo', 'clickCheckedAll']),
      addNewTodo() {
         this.$validate().then(success => {
            if (!success) return;

            uniqId++;
            this.todo.id = uniqId;
            this.addTodo({...this.todo});
            this.todo.name = '';

            this.validation.reset();
         });
      },
      handleClickCheckedAll() {
         this.clickCheckedAll();
      }
   }
}
</script>

<style lang="scss" scoped>
   .todo-input {
      display: flex;
      position: relative;
   }

   .error {
      position: absolute;
      top: -30px;
      left: 0;
      color: firebrick;
   }

   .check-all {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      margin-left: 16px;
      opacity: 0.5;
      cursor: pointer;
   }
   
   .check-all__img {
      width: 100%;
   }
   
   .checked-all {
      opacity: 1;
   }

   .input {
      font-size: 24px;
      padding: 16px 16px 16px 42px;
      border: none;
      box-shadow: inset 0 -2px 1px rgba(#000000, .03);
      line-height: 1.4em;
      outline: none;
      color: inherit;
      width: 100%;
      background: #fff;
      font-family: 'Balsamiq Sans', cursive;

      &::placeholder {
         color: rgb(201, 201, 201);
      }
   }

   .valid-error {
      box-shadow: inset 0 -2px 0px firebrick;
   }
</style>