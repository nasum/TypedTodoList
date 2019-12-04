import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

import Form, { FormState } from "./Form";
import List, { ListState } from "./List";

Vue.use(Vuex);

export interface MyRootState {
  Form: FormState;
  List: ListState;
}

const store = new Vuex.Store<MyRootState>({
  plugins: [createLogger({})],
  modules: {
    Form,
    List
  }
});

export default store