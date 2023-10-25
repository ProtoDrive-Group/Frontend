import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AUTH } from '@/constants/main'
import Cookies from "universal-cookie";

const Auth = () => {
  const authParams = useSearchParams();
  const router = useRouter();

  const cookies = new Cookies(null, { path: '/', maxAge: 34560000 })
  const token = authParams.get("token");

  useEffect(() => {
    if (token) {
      cookies.set(AUTH.SESSION_TOKEN, token, {})
      router.push('/')
    }
  }, [cookies, token])

  return (
    <div>Loading...</div>
  )
};

export default Auth;
