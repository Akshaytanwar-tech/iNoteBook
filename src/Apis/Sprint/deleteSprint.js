const config = require("../../config");
const deleteSprint = async (id) => {
  await fetch(`${config.Url}/api/sprint/deleteSprint/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
module.exports = deleteSprint;
