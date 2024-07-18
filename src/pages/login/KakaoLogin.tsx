import { authConfig } from "../../config/config.ts";

const KakaoLogin = () => {
  const Rest_api_key = authConfig.kakaoApiKey;
  const redirect_uri = "http://localhost:5173"; //Redirect URI
  //oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <button style={{ padding: "0px" }}><img src={"/src/assets/kakao_login_medium_narrow.png"} onClick={handleLogin}
        alt={"kakao_login"}/></button>

    </>
  );
};
export default KakaoLogin;

