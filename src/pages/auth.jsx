import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AUTH } from '@/constants/main'
import Cookies from "universal-cookie";
import { useLazySelfUserQuery } from '../store/pushNoteApi.js'

const Auth = () => {
  const [lazySelfQuery] = useLazySelfUserQuery();
  const authParams = useSearchParams();
  const router = useRouter();

  const cookies = new Cookies(null, { path: '/' })
  const token = authParams.get("token");

  useEffect(() => {
    if (token) {
      cookies.set(AUTH.SESSION_TOKEN, token, {})
      lazySelfQuery()
      router.push('/')
    }
  }, [cookies, token])

  return (
    <div>Loading...</div>
  )
};

export default Auth;
