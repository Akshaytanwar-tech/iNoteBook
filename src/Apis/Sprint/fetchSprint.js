const config = require("../../config");
const fetchSprint = async () => {
  const res = await fetch(`${config.Url}/api/sprint/fetchSprint`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const json = await res.json();
  return json;
};
export default fetchSprint;
