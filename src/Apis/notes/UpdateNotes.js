const config = require("../../config");
const UpdateNotes = async (title, description, tags, id) => {
  await fetch(`${config.Url}/api/notes/updatenotes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({ title, description, tags }),
  });
};

export default UpdateNotes;
