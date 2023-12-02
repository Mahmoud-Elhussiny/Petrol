import axios from "axios";
import { serverBasePath } from "../src/consts";

// const config = {
//   baseURL: serverBasePath + 'api'
// }
const config = {
  baseURL: "https://jsonplaceholder.typicode.com",
};

const client = axios.create(config);

// const authInterceptor = config => {
//  config.headers['Access-Control-Allow-Origin'] = '*'
//   return config
// }

// client.request.apply();

client.interceptors.request.use(
  (conf) => {
    return conf;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    // Handle errors here
    throw error;
  }
);

// client.response.use(
//   response => Promise.resolve(response),
//   error => {

//       // if (error.response.status === 401){
//       //   alert("لقد تم الدخول بهذا المستخدم على جهاز اخر")
//       //   console.error(error)
//       //   router.push('/')

//       // }
//       //   else if (error.response.status === 501){
//       //     alert("ctrl+f5 لقد تم التحديث برجاء الضغط على ")
//       //     console.error(error)
//       //     router.push('/')}
//       //      else if (error.response.status === 301){

//       //        alert("لقد تم اعادة تشغيل الخادم الرئيسى برجاء الدخول مجددا")
//       //        console.error(error)
//       //        router.push('/')
//       //      }

//     throw error

//   }
// );

export default client;
