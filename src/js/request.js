import axios from "axios";
// import qs from "qs";

export function request(url, methods) {
  const base_url = "http://localhost:3000";

  console.log("url", url);
  return new Promise((resolve, reject) => {
    axios({
      baseURL: base_url,
      url: url,
      methods: methods,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
