const config = require("../../config");
const updateTime = async (id) => {
  await fetch(`${config.Url}/api/sprint/updateTime/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
module.exports = updateTime;
