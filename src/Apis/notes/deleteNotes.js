const config = require("../../config");
const deleteNotes = async (id) => {
  const res = await fetch(`${config.Url}/api/notes/deletenote/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const result = res.json();
  return result;
};

module.exports = deleteNotes;
