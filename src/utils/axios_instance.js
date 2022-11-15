import axios from "axios";
import Config from "../configs/Config";

export const baseURLLink = Config.API_URL;

const axios_instance = axios.create({
    baseURL: baseURLLink,
    timeout: 10000,
    //crossDomain: true,
  });

//请求拦截器
axios_instance.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      // 在请求错误时要做的事儿
      console.log(err);
      // 该返回的数据则是axios.catch(err)中接收的数据
      return Promise.reject(err);
    }
  );
  
  //响应拦截器
  axios_instance.interceptors.response.use(
    (res) => {
      // 请求成功对响应数据做处理
      console.log(res);
      if (res.data.authorization) {
        localStorage.setItem("authorization", res.data.authorization);
      }
      if (res.data.code === 500 && res.data.message === "Invalid JWT") {
        localStorage.removeItem("authorization");
        window.location.href = "/login";
      }
      return res;
    },
    (err) => {
      // 在请求错误时要做的事儿
      console.log(err);
      if (err.response) {   // 诸如timeout等情况时response是undefined，会引起另一个error
        if (err.response.status === 401) {
          localStorage.removeItem("authorization");
          window.location.href = "/login";
        } else if (err.response.status === 403) {
          //跳回首页
          window.location.href = "/login";
        }
        // 在err.response合法时才能够这么返回
        // 该返回的数据则是axios.catch(err)中接收的数据
        return Promise.reject(err.response);
      } else {
        return Promise.reject(err);   // 返回err本身
      }
    }
  );


  export {axios_instance};
