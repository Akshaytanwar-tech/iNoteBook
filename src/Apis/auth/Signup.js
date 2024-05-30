const config = require("../../config");

const Signup = async (formdata) => {
  try {
    const response = await fetch(`${config.Url}/api/auth/signup`, {
      method: "POST",
      body: formdata,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
export default Signup;
