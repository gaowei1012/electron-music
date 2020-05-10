// import axios from "axios";

import qs from "qs";
import axios from "axios";

export function request(url, data = {}, method) {
  const base_url = "http://localhost:3000/";
  return new Promise((resolve, reject) => {
    axios({
      baseURL: base_url,
      url: url,
      data: qs.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
    })
      .then((res) => {
        const result = res.data;
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
