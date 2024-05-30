const config = require("../../config");
const createTodo = async (title, isDone) => {
  const res = await fetch(`${config.Url}/api/todo/createTodo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({ title, isDone }),
  });
  const json = await res.json();
  return json;
};
module.exports = createTodo;
