import axios from "axios";

export function request(url) {
  const base_url = "http://localhost:3000";

  return new Promise((resolve, reject) => {
    axios({
      baseURL: base_url,
      url: url,
      methods: "GET",
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
