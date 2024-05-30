const config = require("../../config");
const fetchLink = async () => {
  const res = await fetch(`${config.Url}/api/link/fetchalllink`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const json = await res.json();
  return json;
};
export default fetchLink;
