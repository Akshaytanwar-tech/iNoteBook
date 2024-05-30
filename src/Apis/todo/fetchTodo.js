const config = require("../../config");
const fetchTodo = async () => {
  const res = await fetch(`${config.Url}/api/todo/fetchTodo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const json = await res.json();
  return json;
};
module.exports = fetchTodo;
