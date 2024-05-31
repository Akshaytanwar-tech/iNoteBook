const config = require("../../config");
const deleteSchedule = async (id) => {
  await fetch(`${config.Url}/api/schedule/deleteSchedule/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default deleteSchedule;
