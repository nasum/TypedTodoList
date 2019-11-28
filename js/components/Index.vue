<template>
  <div class="main">
    <h1>Typed Todo List</h1>
    <form>
      <input type="text" :value="text" @input="inputText" />
      <button type="button" @click="submit">submit</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todoList" :key="index">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";

const formNamespace = createNamespacedHelpers("Form");
const listNamespace = createNamespacedHelpers("List");

export default Vue.extend({
  name: "Index",
  computed: {
    ...formNamespace.mapState(["text"]),
    ...listNamespace.mapState(["todoList"])
  },
  methods: {
    ...formNamespace.mapActions(["updateText"]),
    ...listNamespace.mapActions(["pushTodoList"]),
    inputText(e: Event) {
      if (e.target instanceof HTMLInputElement) {
        this.updateText(e.target.value);
      }
    },
    submit() {
      this.pushTodoList(this.text);
      this.updateText("");
    }
  }
});
</script>

<style lang="scss" scoped>
.main {
  border: 1px solid #1f1f1f;
  padding: 5px;
}
</style>
