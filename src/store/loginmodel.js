import api from "../api.js";
const LoginApi = {
    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{
        _login(_,payload){
           return new Promise((resolve, reject) => {
            api.post(`/Users/Login`,payload).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
           }) 
        }
    }
}
export default LoginApi;