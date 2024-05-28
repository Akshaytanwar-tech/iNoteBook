const config = require("../../config");
const SignIn = async (email, password) => {
  const res = await fetch(`${config.Url}/api/auth/signin`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();

  return json;
};
module.exports = SignIn;
