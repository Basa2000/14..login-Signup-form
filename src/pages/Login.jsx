import React from "react";
import Template from  "../components/Template"
import login from "../assets/login.png"

function Login({setIsLoggedIn}) {
  return (
      <Template
        title="Welcome Back"
        desc1="build skills for today, tommorrow and beyond."
        desc2="Eduacation to future-proof your career."
        image={login}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}

      />
  );
}

export default Login;
