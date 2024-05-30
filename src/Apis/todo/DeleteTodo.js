const config = require("../../config");
const deleteTodo = async (id) => {
  await fetch(`${config.Url}/api/todo/deleteTodo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
module.exports = deleteTodo;
