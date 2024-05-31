const config = require("../../config");
const CreateSchedule = async (date, subject, starttime, endtime, workDes) => {
  await fetch(`${config.Url}/api/schedule/createSchedule`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({ date, subject, starttime, endtime, workDes }),
  });
};

export default CreateSchedule;
