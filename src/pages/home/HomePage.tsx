import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../atom.ts";

// declare global {
//   interface Window {
//     Kakao: any;
//   }
// }
// const useCheckLogin = (navFunc:()=>void)=> {
//
//   const [isLogin] = useRecoilState(isLoggedInState);
//   useEffect(() => {
//     if(isLogin){
//       navFunc();
//     }
//   }, [isLogin]);
// };

interface Props {
  children?: React.ReactNode;
}
const HomePage: FC<Props> = () => {

  //useCheckLogin(() => navigate("/"));
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
  //const REST_API_KEY = "7f2d59a5c95a9a47d4e36f8bedc420ca"; // 자신의 REST API 키로 변경
  //const REDIRECT_URI = "http://localhost:5173"; // 자신의 리다이렉트 URI로 변경

  // const [searchParams] = useSearchParams();
  //
  // useEffect(() => {
  //   if (!window.Kakao.isInitialized()) {
  //     window.Kakao.init(REST_API_KEY);
  //   }
  //
  //   const code = searchParams.get("code");
  //   if (code) {
  //     getAccessToken(code);
  //   }
  // }, [searchParams]);
  //
  // const loginWithKakao = () => {
  //   window.Kakao.Auth.authorize({
  //     redirectUri: REDIRECT_URI,
  //   });
  // };

  // const getAccessToken = async (code: string) => {
  //   console.log("코드:", code);
  //   try {
  //     const response = await axios.post(
  //         "https://kauth.kakao.com/oauth/token",
  //         new URLSearchParams({
  //           grant_type: "authorization_code",
  //           client_id: REST_API_KEY,
  //           redirect_uri: REDIRECT_URI,
  //           code: code,
  //         }),
  //         {
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //         }
  //     );
  //
  //     const { access_token } = response.data;
  //     console.log("access_token:", access_token);
  //
  //     window.Kakao.Auth.setAccessToken(access_token);
  //     displayToken();
  //   } catch (error: any) {
  //     console.error("access token 패칭 오류: ", error);
  //     if (error.response) {
  //       console.error("응답 데이터: ", error.response.data);
  //     }
  //   }
  // };
  //
  // const displayToken = () => {
  //   // 로그인 정보 가져오기
  //   const token = window.Kakao.Auth.getAccessToken();
  //   if (token) {
  //     window.Kakao.API.request({
  //       url: "/v2/user/me",
  //     })
  //         .then((response) => console.log(response))
  //         .catch((error) => console.log(error));
  //   }
  // };

  return (
    <div>
      {/*<button onClick={loginWithKakao}>카카오 로그인</button>*/}
        홈
      {/*<button onClick={googleLogout}>구글 로그아웃</button>*/}
    </div>
  );
};

export default HomePage;
