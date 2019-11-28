import { MutationTree, ActionTree, Module } from "vuex";
import { RootState } from "store";

type Todo = {
  text: string;
};

export type ListState = {
  todoList: Todo[];
};

const state: ListState = {
  todoList: []
};

const MUTATION_TYPE = {
  PUSH_TODO_LIST: "pushTodoList"
};

const mutations: MutationTree<ListState> = {
  [MUTATION_TYPE.PUSH_TODO_LIST]: (state: ListState, text: string) => {
    state.todoList.push({ text: text });
  }
};

const actions: ActionTree<ListState, RootState> = {
  pushTodoList: ({ commit }, text: string) => {
    commit(MUTATION_TYPE.PUSH_TODO_LIST, text);
  }
};

const List: Module<ListState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default List;
