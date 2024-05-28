const config = require("../../config");
const editNotes = async (title, content, tags, id) => {
  const response = await fetch(`${config.Url}/api/notes/updatenotes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
    body: JSON.stringify({ title, content, tags }),
  });
  const res = response.json();
  return res;
};

module.exports = editNotes;
