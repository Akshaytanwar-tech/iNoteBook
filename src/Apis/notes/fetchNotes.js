const config = require("../../config");

const fetchNotes = async () => {
  const response = await fetch(`${config.Url}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const json = await response.json();
  return json;
};
export default fetchNotes;
