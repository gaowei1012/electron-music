export function getItem(key) {
  return localStorage.getItem(key);
}

export function setItem(key, value) {
  return localStorage.setItem(key, value);
}

export function removeItem(key) {
  console.log("removeItem--key:", key);
  // 这里你把那个放这里
  return localStorage.removeItem(key);
}
