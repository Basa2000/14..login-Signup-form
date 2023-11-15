import React from "react";
import signup from "../assets/signup.png"
import Template from "../components/Template";

function Signup({setIsLoggedIn}) {
  return (
    <Template
        title="join the millions learning to code with StudyNotion for free."
        desc1="build skills for today, tommorrow and beyond."
        desc2="Eduacation to future-proof your career."
        image={signup}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}

      />
  );
}

export default Signup;
