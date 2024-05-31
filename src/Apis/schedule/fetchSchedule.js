const config = require("../../config");
const fetchSchedule = async () => {
  const res = await fetch(`${config.Url}/api/schedule/fetchSchedule`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const result = await res.json();
  return result;
};

export default fetchSchedule;
