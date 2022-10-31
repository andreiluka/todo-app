<template lang="pug">
   .todo-filter 
      button(
         v-for="filter in filters"
         type="button"
         :class="{active: currentFilter === filter}"
         @click="filterCurrentTodos(filter)"
      ) {{filter}}
</template>

<script>
import { mapMutations } from "vuex";

export default {
   data() {
      return {
         filters: ['all', 'active', 'completed'],
         currentFilter: 'all'
      }
   },
   methods: {
      ...mapMutations(['filterTodos']),
      filterCurrentTodos(filter) {
         this.filterTodos(filter);
         this.currentFilter = filter;
      }
   }
}
</script>

<style lang="scss" scoped>
   button {
      margin-right: 20px;
      background: transparent;
      font-weight: 300;
      color: inherit;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 3px;
      outline: none;

      &.active {
         border-color: rgba(175, 47, 47, 0.2);
      }

      &:last-child {
         margin-right: 0;
      }
   }
</style>