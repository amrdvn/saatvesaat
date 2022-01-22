import Vue from 'vue';
import Vuex from 'vuex';
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./gettes"
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
Vue.use(Vuex);



export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})