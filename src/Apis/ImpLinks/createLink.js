const config = require('../../config')
const createLink = async (title, link) => {
  const res = await fetch(`${config.Url}/api/link/createlink`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({ title, link }),
  });
  const json = await res.json();
  return json;
};
module.exports = createLink;
