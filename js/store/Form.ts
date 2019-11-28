import { MutationTree, ActionTree, Module } from "vuex";
import { RootState } from "./index";

export type FormState = {
  text: string;
};

const state = (): FormState => ({
  text: ""
});

const MUTATION_TYPE = {
  UPDATE_TEXT: "updateText"
};

const mutations: MutationTree<FormState> = {
  [MUTATION_TYPE.UPDATE_TEXT]: (state: FormState, text: string) => {
    state.text = text;
  }
};

const actions: ActionTree<FormState, RootState> = {
  updateText: ({ commit }, text: string) => {
    commit(MUTATION_TYPE.UPDATE_TEXT, text)
  }
};

const Form: Module<FormState, RootState> = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
};

export default Form;
