const config = require("../../config");
const CreateNote = async (title, description, tags) => {
  const response = await fetch(`${config.Url}/api/notes/createnotes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({ title, description, tags }),
  });
  const res = response.json();
  return res;
};

module.exports = CreateNote;
