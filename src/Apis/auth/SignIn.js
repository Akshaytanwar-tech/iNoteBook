const config = require("../../config");
const SignIn = async (email, password) => {
  const res = await fetch(`${config.Url}/api/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();

  return json;
};
export default SignIn;
