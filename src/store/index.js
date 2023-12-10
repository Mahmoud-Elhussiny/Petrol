import Vuex from 'vuex';
import exercises from './exercises.js';
import login from './loginmodel.js';

export default new Vuex.Store({
    state:{
        name:"ma7moud"
    },
    getters:{
        get_name:state => state.name
    },
    mutations:{
        set_name(state,data){
          state.name = data; 
        }
    },
    modules:{
        exercises,login
    }
})