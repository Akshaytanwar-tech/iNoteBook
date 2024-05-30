const config = require("../../config");
const deleteLink = async (id) => {
  await fetch(`${config.Url}/api/link/deletelink/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
module.exports = deleteLink;
