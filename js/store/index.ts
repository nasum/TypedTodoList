import Vue from "vue";
import Vuex, { Store, Action, Mutation } from "vuex";
import createLogger from "vuex/dist/logger";

import Form, { FormState } from "./Form";
import List, { ListState } from "./List";

Vue.use(Vuex);

export interface RootState {
  Form: FormState;
  List: ListState;
}

export default new Vuex.Store({
  plugins: [createLogger({})],
  modules: {
    Form,
    List
  }
});
