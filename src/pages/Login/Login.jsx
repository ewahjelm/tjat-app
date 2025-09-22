import React from "react";
import { LoginForm } from "../../components";
const Login = ({ username, password }) => {
  return (
    <div>
      <h3>Logga in</h3>
      <LoginForm />
    </div>
  );
};
export default Login;
