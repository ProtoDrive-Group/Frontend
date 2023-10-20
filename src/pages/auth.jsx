import React from "react";
import { useSearchParams } from "next/navigation";

const Auth = () => {
  const authParams = useSearchParams();

  const token = authParams.get("token");

  console.log("Token sir soming", token);

  // URL -> /dashboard?search=my-project
  // search -> 'my-project'
  return <div></div>;
};

export default Auth;
