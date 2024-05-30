const config = require("../../config");
const createSprint = async (task, Subtasks, timeFrame) => {
  const res = await fetch(`${config.Url}/api/sprint/createSprint`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({ task, Subtasks, timeFrame }),
  });
  const json = await res.json();
  return json;
};
export default createSprint;
