import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { authConfig } from "./config/config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <GoogleOAuthProvider clientId={authConfig.googleClientId}>
      <App />
    </GoogleOAuthProvider>,

  </RecoilRoot>,
);
