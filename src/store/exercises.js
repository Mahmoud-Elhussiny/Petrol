import api from '../api.js';

const ExercisesApi = {
    state:{
        AllStaduims:[],
        AllTeams:[],
        SelectedStaduim :{},
        SelectedTeam :{}
    },
    mutations:{
        
        SetAllStaduims :(state,data)=>{
            state.AllStaduims = data;
        },
        SetAllTeams :(state,data)=>{
            state.AllTeams = data;
        },
        SetSelectedStaduim :(state,data)=>{
            state.SelectedStaduim = data;
        },
        SetSelectedTeam :(state,data)=>{
            state.SelectedTeam = data;
        },

    },
    getters:{
        GetAllStaduims:state => state.AllStaduims,
        GetAllTeams:state => state.AllTeams,
        GetSelectedStaduim:state => state.SelectedStaduim,
        GetSelectedTeam:state => state.SelectedTeam,

    },
    actions:{
        AllStaduims({commit}){
            return new Promise((resolve, reject) => {
                api.get(`/Stadiums/GetAll`)
                .then((res)=> {
                    debugger
                    if(res.data.StatusCode == "200"){
                        commit('SetAllStaduims',res.data);
                    }
                    console.log(res);
                    resolve(res);
                })
                .catch((err)=>{
                    debugger
                    console.log(err);
                    reject(err)
                })
            });
        },
        AllTeams({commit}){
            return new Promise((resolve, reject) => {
                api.get(`/Teams/GetAll`)
                .then((res)=>{
                    if(res.data.StatusCode == "200"){
                        commit('SetAllTeams',res.data);
                    }
                    resolve(res)  
                }) 
                .catch((err)=>reject(err))
            });
        }
    }
}

export default ExercisesApi;