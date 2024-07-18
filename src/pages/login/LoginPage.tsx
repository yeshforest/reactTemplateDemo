import React, { FC, useEffect } from "react";
import KakaoLogin from "./KakaoLogin.tsx";
import GoogleAuthLogin from "./GoogleLogin.tsx";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../atom.ts";
interface Props {
    children?: React.ReactNode;
}
// const useCheckLogin = (navFunc:()=>void)=> {
//
//   const [isLogin] = useRecoilState(isLoggedInState);
//   useEffect(() => {
//     if(isLogin){
//       navFunc();
//     }
//   }, [isLogin]);
// };

const LoginPage: FC<Props> = () => {
  const code:string = new URL(window.location.href).searchParams.get("code") ?? "null";
  console.log("인가코드: "+ code);

  const navigate = useNavigate();
  // useCheckLogin(() => navigate("/"));
  const [isLogin] = useRecoilState(isLoggedInState);
  useEffect(() => {
    if(isLogin){
      navigate("/");
    }else{
      navigate("/login");
    }
  }, [isLogin]);
  console.log("isLogin?: "+isLogin);

  return (
    <div>
      <KakaoLogin/>
      <GoogleAuthLogin />
    </div>
  );
};
export default LoginPage;