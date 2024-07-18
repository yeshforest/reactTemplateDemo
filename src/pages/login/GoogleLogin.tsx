import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const GoogleAuthLogin = () => {
  const navigate = useNavigate();

  return (
    // <a href="https://dev.dokbaro.kro.kr/api/auth/login/google">
    //   구글 로그인
    // </a>
    <GoogleLogin
      onSuccess={(credentialResponse:CredentialResponse) => {
        console.log(credentialResponse);
        console.log("credential:" + credentialResponse.credential);
        const decodeToken: JwtPayload = jwtDecode(credentialResponse.credential!);
        console.log("userTokeninfo: "+JSON.stringify(decodeToken));
        localStorage.setItem("token", credentialResponse.credential!); // 로컬 스토리지에 토큰 저장
        navigate(0);
      }}
      onError={() => {
        console.log("login 실패");
      }}
      useOneTap
    />
  );
};

export default GoogleAuthLogin;