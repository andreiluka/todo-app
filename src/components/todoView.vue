<template lang="pug">
   .todo-view 
      h1.title Задание №{{editedTodo.id}}
      textarea(
         class="text"
         v-model="editedTodo.name"
         @input="resize"
         :style="{ height: heightTextarea + 'px'}"
         ref="text"
      )
      .button
         button(
            class="go-back"
            @click="goBack"
            title="назад"
         ) 
</template>

<script>
import { mapMutations } from 'vuex';

export default {
   props: ['todo'],
   data() {
      return {
         editedTodo: {...this.todo},
         heightTextarea: 'auto'
      }
   },
   methods: {
      ...mapMutations(['editTodo']),
      goBack() {
         this.editTodo(this.editedTodo);
         this.$router.go(-1);
      },
      resize() {
         this.heightTextarea = this.$refs.text.scrollHeight;
      }
   },
   mounted() {
      console.log(this.$refs.text.scrollHeight);
      this.heightTextarea = this.$refs.text.scrollHeight;
   }
}
</script>

<style lang="scss" scoped>
   .todo-view {
      max-width: 600px;
      margin: 0 auto;
      height: auto;
   }

   .text {
      width: 100%;
      min-height: 200px;
      font-family: Courier, monospace;
      font-size:20px;
      line-height: 40px;
      padding: 45px 30px 35px 100px;
      background:
         url(../assets/lines.png) repeat-y, 
         url(../assets/paper.png) repeat;
      resize: none;
      outline: none;
      border: none;
      border-radius: 12px;
      box-shadow: 0px 2px 14px #000;
      overflow: hidden;
   }

   .button {
      margin-top:20px;
      text-align: end;
   }

   .go-back {
      width: 70px;
      height: 70px;
      background: url('../assets/arrow.svg') center center / contain no-repeat;
      border: none;
      cursor: pointer;
      transform: rotate(180deg);
      transition: 0.3s;

      &:hover {
         transform: rotate(216deg);
      }
   }
</style>