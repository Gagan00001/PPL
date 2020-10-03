// export const Login = "Login";

const login = (data) =>
  console.log("data", data) || {
    type: "Login",
    data,
  };

export { login };
